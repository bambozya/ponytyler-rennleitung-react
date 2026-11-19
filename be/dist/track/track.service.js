"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TrackService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackService = exports.TRACK_LENGTH_M = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const rxjs_1 = require("rxjs");
const race_service_1 = require("../prisma-api/race.service");
const bike_feed_1 = require("./bike-feed");
exports.TRACK_LENGTH_M = 250;
const COUNTDOWN_SECONDS = 3;
const TICK_MS = 100;
const SPEED_WINDOW_MS = 1000;
const STRAGGLER_SECONDS = 30;
const MAX_RACE_SECONDS = 180;
const idleRider = () => ({ name: "", distance: 0, speed: 0, finishTime: null });
const kmh = (metres, seconds) => (seconds > 0 ? (metres / seconds) * 3.6 : 0);
let TrackService = TrackService_1 = class TrackService {
    constructor(raceService, config) {
        this.raceService = raceService;
        this.logger = new common_1.Logger(TrackService_1.name);
        this.countdownEndsAt = 0;
        this.samples = [];
        const serialPath = config.get("BIKE_SERIAL_PORT");
        if (serialPath) {
            const whiteIndex = config.get("BIKE_WHITE_INDEX") === "1" ? 1 : 0;
            this.feed = new bike_feed_1.SerialBikeFeed(serialPath, whiteIndex);
        }
        else {
            this.logger.warn("BIKE_SERIAL_PORT is not set: the race track runs on simulated riders.");
            this.feed = new bike_feed_1.SimulatedBikeFeed();
        }
        this.state$ = new rxjs_1.BehaviorSubject(this.idleState());
    }
    onModuleDestroy() {
        this.stopTimer();
    }
    get state() {
        return this.state$.value;
    }
    get stream() {
        return this.state$.asObservable();
    }
    async start(raceId) {
        const race = await this.raceService.raceWithSongs(String(raceId));
        if (!race) {
            throw new common_1.NotFoundException(`There is no race #${raceId}`);
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
    stop() {
        this.stopTimer();
        this.publish(this.idleState());
        return this.state;
    }
    idleState() {
        return {
            phase: "idle",
            raceId: null,
            showId: null,
            trackLength: exports.TRACK_LENGTH_M,
            white: idleRider(),
            black: idleRider(),
            countdown: null,
            elapsed: 0,
            winner: 0,
            feed: this.feed.kind,
            feedProblem: this.feed.problem,
        };
    }
    publish(state) {
        this.state$.next({ ...state, feed: this.feed.kind, feedProblem: this.feed.problem });
    }
    stopTimer() {
        clearInterval(this.timer);
        this.timer = undefined;
    }
    tick() {
        const now = Date.now();
        const state = this.state;
        if (state.phase === "countdown") {
            const remainingMs = this.countdownEndsAt - now;
            if (remainingMs > 0) {
                this.publish({ ...state, countdown: Math.ceil(remainingMs / 1000) });
                return;
            }
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
        const sample = { time: now, ...this.feed.distances() };
        this.samples.push(sample);
        while (this.samples.length > 2 && this.samples[1].time < now - SPEED_WINDOW_MS) {
            this.samples.splice(1, 1);
        }
        const windowStart = this.samples.find((entry) => entry.time >= now - SPEED_WINDOW_MS) ?? start;
        const elapsed = (now - start.time) / 1000;
        const rider = (current, key) => {
            if (current.finishTime !== null)
                return current;
            const distance = sample[key];
            if (distance < exports.TRACK_LENGTH_M) {
                const windowSeconds = (now - windowStart.time) / 1000;
                return { ...current, distance, speed: kmh(distance - windowStart[key], windowSeconds) };
            }
            const step = distance - previous[key];
            const fraction = step > 0 ? (exports.TRACK_LENGTH_M - previous[key]) / step : 1;
            const finishTime = (previous.time + (now - previous.time) * fraction - start.time) / 1000;
            return {
                ...current,
                distance: exports.TRACK_LENGTH_M,
                finishTime,
                speed: kmh(exports.TRACK_LENGTH_M, finishTime),
            };
        };
        const white = rider(state.white, "white");
        const black = rider(state.black, "black");
        let winner = state.winner;
        if (winner === 0 && (white.finishTime !== null || black.finishTime !== null)) {
            if (white.finishTime !== null && black.finishTime !== null) {
                winner = white.finishTime === black.finishTime ? 3 : white.finishTime < black.finishTime ? 1 : 2;
            }
            else {
                winner = white.finishTime !== null ? 1 : 2;
            }
        }
        const firstFinish = Math.min(white.finishTime ?? Infinity, black.finishTime ?? Infinity);
        const over = (white.finishTime !== null && black.finishTime !== null) ||
            elapsed > firstFinish + STRAGGLER_SECONDS ||
            elapsed > MAX_RACE_SECONDS;
        this.publish({ ...state, phase: over ? "finished" : "racing", white, black, elapsed, winner });
        if (over)
            this.stopTimer();
    }
};
exports.TrackService = TrackService;
exports.TrackService = TrackService = TrackService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [race_service_1.RaceService,
        config_1.ConfigService])
], TrackService);
//# sourceMappingURL=track.service.js.map