import { RaceState, type Race } from "../../api/race";

export interface RaceWithSongPlayedInfo extends Race {
  song1AlreadyPlayed: boolean;
  song1AlreadyWished: boolean;
  song2AlreadyPlayed: boolean;
  song2AlreadyWished: boolean;
}

const stateOrder: Record<RaceState, number> = {
  [RaceState.WAITING_TO_RACE]: 1,
  [RaceState.WAITING_FOR_OPPONENT]: 2,
  [RaceState.RACED]: 3,
  [RaceState.CANCELED]: 4,
};

/** Waiting races first in running order, then raced and canceled ones, most recent first. */
export function compareRacesForList(race1: Race, race2: Race): number {
  const byState = stateOrder[race1.raceState as RaceState] - stateOrder[race2.raceState as RaceState];
  if (byState !== 0) return byState;

  const byOrderNumber = race1.orderNumber - race2.orderNumber;
  if (race1.raceState === RaceState.WAITING_TO_RACE || race1.raceState === RaceState.WAITING_FOR_OPPONENT) {
    return byOrderNumber;
  }
  if (race1.raceState === RaceState.RACED || race1.raceState === RaceState.CANCELED) {
    return -byOrderNumber;
  }
  return 0;
}

const isWaiting = (race: Race) =>
  race.raceState === RaceState.WAITING_TO_RACE || race.raceState === RaceState.WAITING_FOR_OPPONENT;

/** A song counts as played once it won a race (or both songs were played). */
function songAlreadyPlayed(finishedRaces: Race[], songId: number | null | undefined): boolean {
  return finishedRaces.some(
    (race) =>
      (race.song1Id && race.song1Id === songId && (race.bikeWon === 1 || race.bikeWon === 3)) ||
      (race.song2Id && race.song2Id === songId && (race.bikeWon === 2 || race.bikeWon === 3)),
  );
}

function songAlreadyWished(waitingRaces: Race[], raceId: number | undefined, songId: number | null | undefined) {
  return waitingRaces.some(
    (race) =>
      ((race.song1Id && race.song1Id === songId) || (race.song2Id && race.song2Id === songId)) &&
      race.id !== raceId,
  );
}

export function addSongPlayedInfo(races: Race[]): RaceWithSongPlayedInfo[] {
  const finishedRaces = races.filter((race) => race.raceState === RaceState.RACED);
  const waitingRaces = races.filter(isWaiting);
  return races.map((race) => ({
    ...race,
    song1AlreadyPlayed: songAlreadyPlayed(finishedRaces, race.song1Id),
    song1AlreadyWished: songAlreadyWished(waitingRaces, race.id, race.song1Id),
    song2AlreadyPlayed: songAlreadyPlayed(finishedRaces, race.song2Id),
    song2AlreadyWished: songAlreadyWished(waitingRaces, race.id, race.song2Id),
  }));
}
