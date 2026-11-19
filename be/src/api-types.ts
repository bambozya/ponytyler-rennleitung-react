/**
 * The JSON shapes the API sends and accepts, derived from the Prisma models.
 *
 * The React app imports this file (ui/rl-react/src/api/types.ts), so it must stay type-only:
 * no runtime imports, no values.
 */
import type * as Db from "./generated/prisma/browser";
import type { neverWishedSongs, whichBikeWonMost } from "./generated/prisma/sql";

/** A value as it arrives after JSON serialisation: dates are ISO strings, SQL counts are plain numbers. */
export type Json<T> = T extends Date
  ? string
  : T extends bigint
    ? number
    : T extends (infer Item)[]
      ? Json<Item>[]
      : T extends object
        ? { [Key in keyof T]: Json<T[Key]> }
        : T;

/** Everything but the id is optional when creating a row; the database fills in defaults. */
type Creatable<T extends { id: number }, Required extends keyof T> = Pick<T, Required> &
  Partial<Omit<T, "id" | Required>>;

// The schema stores these two as plain strings (SQLite has no enums).
export type RaceState = "WAITING_FOR_OPPONENT" | "WAITING_TO_RACE" | "CANCELED" | "RACED";
export type SongOrigin = "LEGACY" | "FROM_DIRECT_INPUT" | "FROM_FILE_SYNC" | "FROM_CLOUD_SYNC";

export type Show = Json<Db.Show>;
export type NewShow = Creatable<Show, "name">;

export type Song = Omit<Json<Db.Song>, "origin"> & { origin: SongOrigin };
export type NewSong = Creatable<Song, "name" | "artist">;

export type Race = Omit<Json<Db.Race>, "raceState"> & {
  raceState: RaceState;
  /** Present on every race that is read; missing on the answer to a create or update. */
  song1?: Song | null;
  song2?: Song | null;
};
/** POST api/race: order number and creation time are set by the backend. */
export type NewRace = Pick<Race, "showId" | "raceState"> &
  Partial<Pick<Race, "person1" | "song1Id" | "person2" | "song2Id">>;

export type User = Json<Db.User>;
export type NewUser = Creatable<User, "name">;

export type Shift = Json<Db.Shift>;

/**
 * One row of the song statistics. The count is null for songs that were never wished; that is
 * spelled out here because SQLite's type inference does not report nullability reliably.
 */
export type StatSong = Omit<Json<neverWishedSongs.Result>, "totalCount"> & { totalCount: number | null };
export type WhichBikeWonMost = Json<whichBikeWonMost.Result>;

export type { TrackPhase, TrackRider, TrackState } from "./track/track.types";
