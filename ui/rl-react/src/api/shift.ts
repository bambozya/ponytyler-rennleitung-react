import { http } from "./http";
import type { Show } from "./show";

export interface Shift {
  id?: number;
  show?: Show;
  showId?: number;
  order: number;
  duration?: number;
  shiftStarted?: string;
  shiftFinished?: string;
  shiftJobs: ShiftRole[];
}

export interface ShiftRole {
  id?: number;
  shift?: Shift;
  shiftId?: number;
  roleTitle: string;
  crewMember: string;
}

export const getAllShiftsForShow = (showId: string | number) =>
  http.get<Shift[]>(`api/shifts/for-show/${showId}`);
