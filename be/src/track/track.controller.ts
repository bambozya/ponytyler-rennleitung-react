import { BadRequestException, Body, Controller, Get, MessageEvent, Post, Sse } from "@nestjs/common";
import { Observable, map } from "rxjs";
import { TrackService } from "./track.service";
import { TrackState } from "./track.types";

@Controller("api/track")
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Get()
  state(): TrackState {
    return this.trackService.state;
  }

  /** Server-sent events: the current state right away, then every change. */
  @Sse("stream")
  stream(): Observable<MessageEvent> {
    return this.trackService.stream.pipe(map((state) => ({ data: state })));
  }

  @Post("start")
  start(@Body() body: { raceId?: number | string }): Promise<TrackState> {
    const raceId = Number(body?.raceId);
    if (!Number.isInteger(raceId)) {
      throw new BadRequestException("raceId is missing");
    }
    return this.trackService.start(raceId);
  }

  @Post("stop")
  stop(): TrackState {
    return this.trackService.stop();
  }
}
