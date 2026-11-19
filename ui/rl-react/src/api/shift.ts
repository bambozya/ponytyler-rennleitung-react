import { http } from "./http";
import type { Shift } from "./types";

export type { Shift };

export const getAllShiftsForShow = (showId: string | number) =>
  http.get<Shift[]>(`api/shifts/for-show/${showId}`);
