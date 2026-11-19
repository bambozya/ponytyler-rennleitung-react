import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";

export interface SongFormValues {
  name: string;
  artist: string;
  selectable: boolean;
}

interface SongFormFieldsProps {
  values: SongFormValues;
  onChange: (values: SongFormValues) => void;
}

export function SongFormFields({ values, onChange }: SongFormFieldsProps) {
  return (
    <>
      <div className="form-row">
        <TextField
          label="Title"
          placeholder="i.e. Toxic or Total Eclipse of the Heart..."
          value={values.name}
          onChange={(event) => onChange({ ...values, name: event.target.value })}
        />
      </div>
      <div className="form-row">
        <TextField
          label="Artist/Band"
          placeholder="i.e. Britney Spears or Queen"
          value={values.artist}
          onChange={(event) => onChange({ ...values, artist: event.target.value })}
        />
      </div>
      <div>
        <FormControlLabel
          label="Selectable"
          control={
            <Checkbox
              checked={values.selectable}
              onChange={(event) => onChange({ ...values, selectable: event.target.checked })}
            />
          }
        />
      </div>
    </>
  );
}
