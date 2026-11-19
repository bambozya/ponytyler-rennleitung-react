import { MessageEvent } from "@nestjs/common";
import { Observable } from "rxjs";
import { TrackService } from "./track.service";
import { TrackState } from "./track.types";
export declare class TrackController {
    private readonly trackService;
    constructor(trackService: TrackService);
    state(): TrackState;
    stream(): Observable<MessageEvent>;
    start(body: {
        raceId?: number | string;
    }): Promise<TrackState>;
    stop(): TrackState;
}
