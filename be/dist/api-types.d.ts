import type * as Db from "./generated/prisma/browser";
import type { neverWishedSongs, whichBikeWonMost } from "./generated/prisma/sql";
export type Json<T> = T extends Date ? string : T extends bigint ? number : T extends (infer Item)[] ? Json<Item>[] : T extends object ? {
    [Key in keyof T]: Json<T[Key]>;
} : T;
type Creatable<T extends {
    id: number;
}, Required extends keyof T> = Pick<T, Required> & Partial<Omit<T, "id" | Required>>;
export type RaceState = "WAITING_FOR_OPPONENT" | "WAITING_TO_RACE" | "CANCELED" | "RACED";
export type SongOrigin = "LEGACY" | "FROM_DIRECT_INPUT" | "FROM_FILE_SYNC" | "FROM_CLOUD_SYNC";
export type Show = Json<Db.Show>;
export type NewShow = Creatable<Show, "name">;
export type Song = Omit<Json<Db.Song>, "origin"> & {
    origin: SongOrigin;
};
export type NewSong = Creatable<Song, "name" | "artist">;
export type Race = Omit<Json<Db.Race>, "raceState"> & {
    raceState: RaceState;
    song1?: Song | null;
    song2?: Song | null;
};
export type NewRace = Pick<Race, "showId" | "raceState"> & Partial<Pick<Race, "person1" | "song1Id" | "person2" | "song2Id">>;
export type User = Json<Db.User>;
export type NewUser = Creatable<User, "name">;
export type Shift = Json<Db.Shift>;
export type StatSong = Omit<Json<neverWishedSongs.Result>, "totalCount"> & {
    totalCount: number | null;
};
export type WhichBikeWonMost = Json<whichBikeWonMost.Result>;
export type { TrackPhase, TrackRider, TrackState } from "./track/track.types";
