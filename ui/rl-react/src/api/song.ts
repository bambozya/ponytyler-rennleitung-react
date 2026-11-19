import { http } from "./http";

import type { NewSong, Song, SongOrigin } from "./types";

export type { NewSong, Song };

export const Origin = {
  LEGACY: "LEGACY",
  FROM_DIRECT_INPUT: "FROM_DIRECT_INPUT",
  FROM_FILE_SYNC: "FROM_FILE_SYNC",
  FROM_CLOUD_SYNC: "FROM_CLOUD_SYNC",
} as const satisfies Record<SongOrigin, SongOrigin>;
export type Origin = SongOrigin;

export const songTitle = (song: Pick<Song, "artist" | "name">) => `${song.artist} - ${song.name}`;

export const getSongs = () => http.get<Song[]>("api/song");
export const getSong = (songId: string | number) => http.get<Song>(`api/song/${songId}`);
export const getSelectableSongs = () => http.get<Song[]>("api/song/selectable");
export const createSong = (song: NewSong) => http.post<Song>("api/song", song);
export const updateSong = (song: Song) => http.patch<Song>(`api/song/${song.id}`, song);
