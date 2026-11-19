import { http } from "./http";
import type { Song } from "./song";

export const RaceState = {
  WAITING_FOR_OPPONENT: "WAITING_FOR_OPPONENT",
  WAITING_TO_RACE: "WAITING_TO_RACE",
  CANCELED: "CANCELED",
  RACED: "RACED",
} as const;
export type RaceState = (typeof RaceState)[keyof typeof RaceState];

export interface Race {
  id?: number;
  createdAt?: string;
  showId: number | string;
  person1: string | null;
  song1Id?: number | null;
  song1?: Song | null;
  person2: string | null;
  song2Id?: number | null;
  song2?: Song | null;
  orderNumber: number;
  raced?: boolean;
  raceState?: RaceState;
  bikeWon: number;
}

export interface NewRace {
  showId: number | string;
  person1: string;
  song1?: Song | null;
  person2: string;
  song2?: Song | null;
  raceState: RaceState;
}

export const getRacesForShow = (showId: string | number, raced = false) =>
  http.get<Race[]>(`api/race/for-show/${showId}${raced ? "?raced=true" : ""}`);

export const getAllRacesForShow = (showId: string | number) =>
  http.get<Race[]>(`api/race/for-show/${showId}/all`);

export const createRace = (race: NewRace) =>
  http.post<Race>("api/race", {
    showId: race.showId,
    person1: race.person1,
    song1Id: race.song1?.id,
    person2: race.person2,
    song2Id: race.song2?.id,
    raceState: race.raceState,
  });

export const updateRace = (race: Race) => http.patch<Race>(`api/race/${race.id}`, { ...race });

export const repairOrder = (showId: string | number) =>
  http.patch<unknown>(`api/show/repair-races-for/${showId}`, {});

export const moveRaceUpOrDown = (race: Race, upOrDown: "up" | "down") =>
  http.patch<unknown>(`api/race/${race.id}/${upOrDown}`, { ...race });

export const getRace = (raceId: string | number) => http.get<Race>(`api/race/${raceId}/with-songs`);
export const getUpcomingRace = () => http.get<Race | null>("api/race/upcoming-race-with-songs");
export const getUpcomingRaces = () => http.get<Race[]>("api/race/upcoming-races-with-songs");
export const averageRacesPerHour = () => http.get<number>("api/race/average-races-per-hour");
