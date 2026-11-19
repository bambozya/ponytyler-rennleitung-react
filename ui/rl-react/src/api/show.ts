import { http } from "./http";

import type { NewShow, Show } from "./types";

export type { NewShow, Show };

export const getAllShows = () => http.get<Show[]>("api/show/shows");
export const getOldShows = () => http.get<Show[]>("api/show/old-shows");
export const getCurrentShows = () => http.get<Show[]>("api/show/current-shows");
export const getCurrentShow = () => http.get<Show>("api/show/current-show");
export const getShow = (showId: string | number) => http.get<Show>(`api/show/${showId}`);
export const createShow = (show: NewShow) => http.post<Show>("api/show", show);
export const updateShow = (show: Show) => http.patch<Show>(`api/show/${show.id}`, show);
export const deleteShow = (showId: string | number) => http.delete<Show>(`api/show/${showId}`);
