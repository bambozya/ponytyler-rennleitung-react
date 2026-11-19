import { http } from "./http";
import { averageRacesPerHour, getAllRacesForShow, RaceState } from "./race";
import { getShow } from "./show";

export interface StatSong {
  artist: string;
  name: string;
  totalCount?: number;
}

export interface WhichBikeWonMost {
  timesWon: number;
  bikeWon: number;
}

/** True when the list holds more races than fit into the show's duration, going by past shows. */
export async function isListFull(showId: string | number): Promise<boolean> {
  const [average, races, show] = await Promise.all([
    averageRacesPerHour(),
    getAllRacesForShow(showId),
    getShow(showId),
  ]);
  const countedRaces = races.filter(
    (race) =>
      race.raceState === RaceState.RACED ||
      race.raceState === RaceState.WAITING_TO_RACE ||
      race.raceState === RaceState.WAITING_FOR_OPPONENT,
  );
  // Without finished shows there is no average to compare against.
  if (!average) return false;
  return countedRaces.length - 2 > Math.round((show.duration / 60) * average);
}

export const mostPlayedSongs = () => http.get<StatSong[]>("api/statistics/most-played-songs");
export const mostWishedSongs = () => http.get<StatSong[]>("api/statistics/most-wished-songs");
export const neverWishedSongs = () => http.get<StatSong[]>("api/statistics/never-wished-songs");
export const whichBikeWonMost = () => http.get<WhichBikeWonMost[]>("api/statistics/which-bike-won-most");
