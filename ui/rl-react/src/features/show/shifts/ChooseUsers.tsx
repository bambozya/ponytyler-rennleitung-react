import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { getUsers } from "../../../api/user";
import { useLoad } from "../../../hooks/useLoad";
import { useWizzard } from "./Wizzard";

export function ChooseUsers() {
  const navigate = useNavigate();
  const wizzard = useWizzard();
  const users = useLoad(getUsers, []);
  const [checkedIds, setCheckedIds] = useState<ReadonlySet<number>>(new Set());

  const toggle = (userId: number, checked: boolean) =>
    setCheckedIds((current) => {
      const next = new Set(current);
      if (checked) next.add(userId);
      else next.delete(userId);
      return next;
    });

  const nextStep = () => {
    wizzard.selectUsers((users.data ?? []).filter((user) => user.id !== undefined && checkedIds.has(user.id)));
    navigate("../shifts", { relative: "path" });
  };

  const nextButton = (
    <Button variant="contained" onClick={nextStep} disabled={!users.data}>
      Next
    </Button>
  );

  return (
    <div>
      <h2>Choose Users</h2>
      {nextButton}
      {users.data && (
        <ul>
          {users.data.map((user) => (
            <li key={user.id}>
              <FormControlLabel
                label={user.name}
                control={
                  <Checkbox
                    checked={user.id !== undefined && checkedIds.has(user.id)}
                    onChange={(event) => user.id !== undefined && toggle(user.id, event.target.checked)}
                  />
                }
              />
            </li>
          ))}
        </ul>
      )}
      {nextButton}
    </div>
  );
}
