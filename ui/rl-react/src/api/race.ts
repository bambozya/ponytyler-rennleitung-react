import { http } from "./http";
import type { NewRace, Race, RaceState as RaceStateName } from "./types";

export type { NewRace, Race };

export const RaceState = {
  WAITING_FOR_OPPONENT: "WAITING_FOR_OPPONENT",
  WAITING_TO_RACE: "WAITING_TO_RACE",
  CANCELED: "CANCELED",
  RACED: "RACED",
} as const satisfies Record<RaceStateName, RaceStateName>;
export type RaceState = RaceStateName;

export const getRacesForShow = (showId: string | number, raced = false) =>
  http.get<Race[]>(`api/race/for-show/${showId}${raced ? "?raced=true" : ""}`);

export const getAllRacesForShow = (showId: string | number) =>
  http.get<Race[]>(`api/race/for-show/${showId}/all`);

export const createRace = (race: NewRace) => http.post<Race>("api/race", race);

export const updateRace = (race: Race) => http.patch<Race>(`api/race/${race.id}`, { ...race });

export const repairOrder = (showId: string | number) =>
  http.patch<unknown>(`api/show/repair-races-for/${showId}`, {});

export const moveRaceUpOrDown = (race: Race, upOrDown: "up" | "down") =>
  http.patch<unknown>(`api/race/${race.id}/${upOrDown}`, { ...race });

export const getRace = (raceId: string | number) => http.get<Race>(`api/race/${raceId}/with-songs`);
export const getUpcomingRace = () => http.get<Race | null>("api/race/upcoming-race-with-songs");
export const getUpcomingRaces = () => http.get<Race[]>("api/race/upcoming-races-with-songs");
export const averageRacesPerHour = () => http.get<number>("api/race/average-races-per-hour");
