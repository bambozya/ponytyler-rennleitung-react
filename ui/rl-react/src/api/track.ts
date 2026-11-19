import { useEffect, useState } from "react";
import { apiUrl, http } from "./http";
import type { TrackState } from "./types";

export type { TrackPhase, TrackRider, TrackState } from "./types";

/** Puts a race on the track and starts the countdown, on every screen that shows the track. */
export const startRaceOnTrack = (raceId: number) => http.post<TrackState>("api/track/start", { raceId });
export const clearTrack = () => http.post<TrackState>("api/track/stop", {});

/**
 * The race on the track, kept up to date by the backend's event stream.
 * `undefined` until the first state arrives; the browser reconnects on its own if the stream drops.
 */
export function useTrackState(): TrackState | undefined {
  const [state, setState] = useState<TrackState | undefined>(undefined);

  useEffect(() => {
    const source = new EventSource(`${apiUrl}api/track/stream`);
    source.onmessage = (event) => setState(JSON.parse(event.data) as TrackState);
    return () => source.close();
  }, []);

  return state;
}
