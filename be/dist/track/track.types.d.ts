export type TrackPhase = "idle" | "countdown" | "racing" | "finished";
export interface TrackRider {
    name: string;
    distance: number;
    speed: number;
    finishTime: number | null;
}
export interface TrackState {
    phase: TrackPhase;
    raceId: number | null;
    showId: number | null;
    trackLength: number;
    white: TrackRider;
    black: TrackRider;
    countdown: number | null;
    elapsed: number;
    winner: 0 | 1 | 2 | 3;
    feed: "serial" | "simulation";
    feedProblem: string | null;
}
