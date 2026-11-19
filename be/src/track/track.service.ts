import { Injectable, Logger, NotFoundException, OnModuleDestroy } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { BehaviorSubject, Observable } from "rxjs";
import { RaceService } from "../prisma-api/race.service";
import { BikeFeed, SerialBikeFeed, SimulatedBikeFeed } from "./bike-feed";
import { TrackRider, TrackState } from "./track.types";

/** The rollers stand in for one lap of a 250 m velodrome. */
export const TRACK_LENGTH_M = 250;
const COUNTDOWN_SECONDS = 3;
const TICK_MS = 100;
/** The current speed is the average over this much of the recent past. */
const SPEED_WINDOW_MS = 1000;
/** Once the first rider is home, the other one gets this long to finish. */
const STRAGGLER_SECONDS = 30;
/** Nobody takes this long; the race ends on its own if the bikes never move. */
const MAX_RACE_SECONDS = 180;

interface Sample {
  time: number;
  white: number;
  black: number;
}

const idleRider = (): TrackRider => ({ name: "", distance: 0, speed: 0, finishTime: null });

const kmh = (metres: number, seconds: number) => (seconds > 0 ? (metres / seconds) * 3.6 : 0);

/**
 * Runs the race on the track: countdown, then distances and speeds from the bikes until both
 * riders have done the track length. There is one race at a time, and every screen sees the same.
 */
@Injectable()
export class TrackService implements OnModuleDestroy {
  private readonly logger = new Logger(TrackService.name);
  private readonly feed: BikeFeed;
  private readonly state$: BehaviorSubject<TrackState>;
  private timer: ReturnType<typeof setInterval> | undefined;
  private countdownEndsAt = 0;
  private samples: Sample[] = [];

  constructor(
    private readonly raceService: RaceService,
    config: ConfigService,
  ) {
    const serialPath = config.get<string>("BIKE_SERIAL_PORT");
    if (serialPath) {
      const whiteIndex = config.get<string>("BIKE_WHITE_INDEX") === "1" ? 1 : 0;
      this.feed = new SerialBikeFeed(serialPath, whiteIndex);
    } else {
      this.logger.warn("BIKE_SERIAL_PORT is not set: the race track runs on simulated riders.");
      this.feed = new SimulatedBikeFeed();
    }
    this.state$ = new BehaviorSubject<TrackState>(this.idleState());
  }

  onModuleDestroy() {
    this.stopTimer();
  }

  get state(): TrackState {
    return this.state$.value;
  }

  get stream(): Observable<TrackState> {
    return this.state$.asObservable();
  }

  /** Puts a race on the track and starts the countdown. Replaces whatever was running. */
  async start(raceId: number): Promise<TrackState> {
    const race = await this.raceService.raceWithSongs(String(raceId));
    if (!race) {
      throw new NotFoundException(`There is no race #${raceId}`);
    }
    this.stopTimer();
    this.samples = [];
    this.countdownEndsAt = Date.now() + COUNTDOWN_SECONDS * 1000;
    this.publish({
      ...this.idleState(),
      phase: "countdown",
      raceId: race.id,
      showId: race.showId,
      white: { ...idleRider(), name: race.person1 ?? "" },
      black: { ...idleRider(), name: race.person2 ?? "" },
      countdown: COUNTDOWN_SECONDS,
    });
    this.timer = setInterval(() => this.tick(), TICK_MS);
    return this.state;
  }

  /** Clears the track. */
  stop(): TrackState {
    this.stopTimer();
    this.publish(this.idleState());
    return this.state;
  }

  private idleState(): TrackState {
    return {
      phase: "idle",
      raceId: null,
      showId: null,
      trackLength: TRACK_LENGTH_M,
      white: idleRider(),
      black: idleRider(),
      countdown: null,
      elapsed: 0,
      winner: 0,
      feed: this.feed.kind,
      feedProblem: this.feed.problem,
    };
  }

  private publish(state: TrackState) {
    this.state$.next({ ...state, feed: this.feed.kind, feedProblem: this.feed.problem });
  }

  private stopTimer() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  private tick() {
    const now = Date.now();
    const state = this.state;

    if (state.phase === "countdown") {
      const remainingMs = this.countdownEndsAt - now;
      if (remainingMs > 0) {
        this.publish({ ...state, countdown: Math.ceil(remainingMs / 1000) });
        return;
      }
      // GO: whatever the rollers turned during the countdown does not count.
      this.feed.reset();
      this.samples = [{ time: now, white: 0, black: 0 }];
      this.publish({ ...state, phase: "racing", countdown: null, elapsed: 0 });
      return;
    }

    if (state.phase !== "racing") {
      this.stopTimer();
      return;
    }

    const start = this.samples[0];
    const previous = this.samples[this.samples.length - 1];
    const sample: Sample = { time: now, ...this.feed.distances() };
    this.samples.push(sample);
    // Keep the start and whatever the speed window still needs.
    while (this.samples.length > 2 && this.samples[1].time < now - SPEED_WINDOW_MS) {
      this.samples.splice(1, 1);
    }
    const windowStart = this.samples.find((entry) => entry.time >= now - SPEED_WINDOW_MS) ?? start;
    const elapsed = (now - start.time) / 1000;

    const rider = (current: TrackRider, key: "white" | "black"): TrackRider => {
      if (current.finishTime !== null) return current;
      const distance = sample[key];
      if (distance < TRACK_LENGTH_M) {
        const windowSeconds = (now - windowStart.time) / 1000;
        return { ...current, distance, speed: kmh(distance - windowStart[key], windowSeconds) };
      }
      // Crossed the line somewhere between the last two samples: interpolate the exact moment.
      const step = distance - previous[key];
      const fraction = step > 0 ? (TRACK_LENGTH_M - previous[key]) / step : 1;
      const finishTime = (previous.time + (now - previous.time) * fraction - start.time) / 1000;
      return {
        ...current,
        distance: TRACK_LENGTH_M,
        finishTime,
        speed: kmh(TRACK_LENGTH_M, finishTime),
      };
    };

    const white = rider(state.white, "white");
    const black = rider(state.black, "black");

    let winner = state.winner;
    if (winner === 0 && (white.finishTime !== null || black.finishTime !== null)) {
      if (white.finishTime !== null && black.finishTime !== null) {
        winner = white.finishTime === black.finishTime ? 3 : white.finishTime < black.finishTime ? 1 : 2;
      } else {
        winner = white.finishTime !== null ? 1 : 2;
      }
    }

    const firstFinish = Math.min(white.finishTime ?? Infinity, black.finishTime ?? Infinity);
    const over =
      (white.finishTime !== null && black.finishTime !== null) ||
      elapsed > firstFinish + STRAGGLER_SECONDS ||
      elapsed > MAX_RACE_SECONDS;

    this.publish({ ...state, phase: over ? "finished" : "racing", white, black, elapsed, winner });
    if (over) this.stopTimer();
  }
}
