// Type-only: this file is also imported by the React app through api-types.ts.

export type TrackPhase = "idle" | "countdown" | "racing" | "finished";

export interface TrackRider {
  name: string;
  /** Metres ridden since GO, capped at the track length. */
  distance: number;
  /** km/h. While racing: the current speed. After the finish: the average over the whole track. */
  speed: number;
  /** Seconds from GO to the finish line, null until the rider gets there. */
  finishTime: number | null;
}

/** The race on the track right now. One state for every screen, pushed by api/track/stream. */
export interface TrackState {
  phase: TrackPhase;
  raceId: number | null;
  showId: number | null;
  /** Metres. */
  trackLength: number;
  white: TrackRider;
  black: TrackRider;
  /** Whole seconds left until GO, null outside the countdown. */
  countdown: number | null;
  /** Seconds since GO. */
  elapsed: number;
  /** 0 = nobody yet, 1 = white bike, 2 = black bike, 3 = dead heat. Same numbers as Race.bikeWon. */
  winner: 0 | 1 | 2 | 3;
  /** Where the distances come from: the Arduino on the rollers, or made-up riders. */
  feed: "serial" | "simulation";
  /** Set when the Arduino is configured but cannot be read. */
  feedProblem: string | null;
}
