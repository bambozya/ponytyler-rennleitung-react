import { useMemo, useState } from "react";
import { Outlet, useOutletContext, useParams } from "react-router-dom";
import { getShow } from "../../../api/show";
import type { User } from "../../../api/user";
import { useLoad } from "../../../hooks/useLoad";

/** Selections collected across the wizard steps; lives as long as the wizard is open. */
export interface WizzardState {
  selectedUsers: User[];
  selectUsers: (users: User[]) => void;
  selectedShiftCount: number;
  setShiftCount: (count: number) => void;
}

export function Wizzard() {
  const { showId = "" } = useParams();
  const show = useLoad(() => getShow(showId), [showId]);
  const [selectedUsers, selectUsers] = useState<User[]>([]);
  const [selectedShiftCount, setShiftCount] = useState(0);

  const state = useMemo<WizzardState>(
    () => ({ selectedUsers, selectUsers, selectedShiftCount, setShiftCount }),
    [selectedUsers, selectedShiftCount],
  );

  return (
    <div>
      <h2>{show.data?.name} / Shifts / Wizzard</h2>
      <Outlet context={state} />
    </div>
  );
}

export const useWizzard = () => useOutletContext<WizzardState>();
