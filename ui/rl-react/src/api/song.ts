import { http } from "./http";

export const Origin = {
  LEGACY: "LEGACY",
  FROM_DIRECT_INPUT: "FROM_DIRECT_INPUT",
  FROM_FILE_SYNC: "FROM_FILE_SYNC",
  FROM_CLOUD_SYNC: "FROM_CLOUD_SYNC",
} as const;
export type Origin = (typeof Origin)[keyof typeof Origin];

export interface Song {
  id?: number;
  name: string;
  artist: string;
  deleted: boolean;
  selectable: boolean;
  origin: Origin;
}

export const songTitle = (song: Pick<Song, "artist" | "name">) => `${song.artist} - ${song.name}`;

export const getSongs = () => http.get<Song[]>("api/song");
export const getSong = (songId: string | number) => http.get<Song>(`api/song/${songId}`);
export const getSelectableSongs = () => http.get<Song[]>("api/song/selectable");
export const createSong = (song: Song) => http.post<Song>("api/song", song);
export const updateSong = (song: Song) => http.patch<Song>(`api/song/${song.id}`, song);
