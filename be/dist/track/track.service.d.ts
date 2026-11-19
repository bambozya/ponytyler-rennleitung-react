import { OnModuleDestroy } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Observable } from "rxjs";
import { RaceService } from "../prisma-api/race.service";
import { TrackState } from "./track.types";
export declare const TRACK_LENGTH_M = 250;
export declare class TrackService implements OnModuleDestroy {
    private readonly raceService;
    private readonly logger;
    private readonly feed;
    private readonly state$;
    private timer;
    private countdownEndsAt;
    private samples;
    constructor(raceService: RaceService, config: ConfigService);
    onModuleDestroy(): void;
    get state(): TrackState;
    get stream(): Observable<TrackState>;
    start(raceId: number): Promise<TrackState>;
    stop(): TrackState;
    private idleState;
    private publish;
    private stopTimer;
    private tick;
}
