import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import { createShow } from "../../api/show";
import { useSnackbar } from "../../ui/Snackbar";
import { combineDateAndTime, toDateInputValue } from "../../utils/formatDate";
import { isShowFormValid, ShowFormFields, type ShowFormValues } from "./ShowFormFields";

interface ShiftRoleDraft {
  roleTitle: string;
  crewMember: string;
}

export function CreateShow() {
  const navigate = useNavigate();
  const snackbar = useSnackbar();
  const [values, setValues] = useState<ShowFormValues>(() => ({
    name: "",
    date: toDateInputValue(new Date()),
    time: "20:00",
    duration: "120",
  }));
  // Shift planning is work in progress: shifts can be drafted here but are not saved with the show yet.
  const [shifts, setShifts] = useState<ShiftRoleDraft[][]>([]);

  const addShift = () => setShifts((current) => [...current, [{ roleTitle: "", crewMember: "" }]]);

  const setShiftRole = (shiftIndex: number, roleIndex: number, patch: Partial<ShiftRoleDraft>) =>
    setShifts((current) =>
      current.map((roles, index) =>
        index !== shiftIndex
          ? roles
          : roles.map((role, index2) => (index2 === roleIndex ? { ...role, ...patch } : role)),
      ),
    );

  const [saving, setSaving] = useState(false);

  const save = async () => {
    setSaving(true);
    try {
      const result = await createShow({
        name: values.name,
        date: combineDateAndTime(values.date, values.time),
        duration: Number(values.duration) || 0,
        active: true,
        finished: false,
      });
      await snackbar.success(`Successfully Created Show ${values.name}`, 200);
      navigate(`/show/${result.id}`);
    } catch (error) {
      setSaving(false);
      snackbar.error("Error during Creation Of Show", error);
    }
  };

  return (
    <div>
      <ShowFormFields values={values} onChange={setValues} />

      <div className="form-row">
        <h2>Shifts ({shifts.length})</h2>
        {shifts.map((roles, shiftIndex) => (
          <div className="form-row" key={shiftIndex}>
            <h3>Shift #{shiftIndex}</h3>
            {roles.map((role, roleIndex) => (
              <div className="form-row" key={roleIndex}>
                <input
                  aria-label="Role"
                  value={role.roleTitle}
                  onChange={(event) => setShiftRole(shiftIndex, roleIndex, { roleTitle: event.target.value })}
                />
                <input
                  aria-label="Crew member"
                  value={role.crewMember}
                  onChange={(event) => setShiftRole(shiftIndex, roleIndex, { crewMember: event.target.value })}
                />
              </div>
            ))}
          </div>
        ))}
        <Button variant="contained" onClick={addShift} startIcon={<Icon>add</Icon>}>
          Add Shift
        </Button>
      </div>

      <Button variant="contained" disabled={saving || !isShowFormValid(values)} onClick={save}>
        Speichern
      </Button>
    </div>
  );
}
