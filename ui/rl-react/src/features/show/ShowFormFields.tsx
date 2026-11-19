import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ButtonList } from "../../ui/ButtonList";

export interface ShowFormValues {
  name: string;
  /** yyyy-MM-dd */
  date: string;
  /** HH:mm */
  time: string;
  /** Minutes, kept as text while editing. */
  duration: string;
}

export const isShowFormValid = (values: ShowFormValues) =>
  values.name.trim() !== "" && values.date !== "" && values.time !== "" && values.duration !== "";

const durationPresets = [
  { minutes: 60, label: "1h" },
  { minutes: 90, label: "1:30h" },
  { minutes: 120, label: "2h" },
  { minutes: 150, label: "2:30h" },
  { minutes: 180, label: "3h" },
];

interface ShowFormFieldsProps {
  values: ShowFormValues;
  onChange: (values: ShowFormValues) => void;
}

export function ShowFormFields({ values, onChange }: ShowFormFieldsProps) {
  const set = (patch: Partial<ShowFormValues>) => onChange({ ...values, ...patch });

  return (
    <>
      <div className="form-row">
        <TextField
          label="Show Name"
          placeholder="i.e. PT @PAPP Dez 2023"
          value={values.name}
          onChange={(event) => set({ name: event.target.value })}
        />
      </div>

      <div className="form-row">
        <TextField
          label="Date"
          type="date"
          value={values.date}
          onChange={(event) => set({ date: event.target.value })}
          slotProps={{ inputLabel: { shrink: true } }}
        />
      </div>

      <div className="form-row">
        <TextField
          label="Start Time"
          type="time"
          value={values.time}
          onChange={(event) => set({ time: event.target.value })}
          slotProps={{ inputLabel: { shrink: true } }}
        />
      </div>

      <div className="form-row">
        <TextField
          label="Duration (in Minutes)"
          placeholder="i.e. 120 for 2 hours"
          type="number"
          value={values.duration}
          onChange={(event) => set({ duration: event.target.value })}
        />
        <ButtonList>
          {durationPresets.map((preset) => (
            <Button
              key={preset.minutes}
              className="duration-helper-button"
              variant="outlined"
              color="secondary"
              onClick={() => set({ duration: String(preset.minutes) })}
            >
              {preset.label}
            </Button>
          ))}
        </ButtonList>
      </div>
    </>
  );
}
