import TextField from "@mui/material/TextField";
import type { Song } from "../../api/song";
import { SongAutocomplete } from "../song/SongAutocomplete";

export interface RaceFormValues {
  person1: string;
  song1: Song | null;
  person2: string;
  song2: Song | null;
}

export const emptyRaceForm: RaceFormValues = { person1: "", song1: null, person2: "", song2: null };

interface RaceFormFieldsProps {
  showId?: string;
  values: RaceFormValues;
  onChange: (values: RaceFormValues) => void;
}

/** Person 1 rides the white bike, person 2 the black one. */
export function RaceFormFields({ showId, values, onChange }: RaceFormFieldsProps) {
  const set = (patch: Partial<RaceFormValues>) => onChange({ ...values, ...patch });

  return (
    <>
      <fieldset className="bike-group bike-group-white">
        <legend>White Bike</legend>
        <div className="form-row">
          <TextField
            label="White Bike Rider"
            placeholder="i.e. Gylcan or Oman or Paul or ..."
            value={values.person1}
            onChange={(event) => set({ person1: event.target.value })}
          />
        </div>
        <div className="form-row">
          <SongAutocomplete
            showId={showId}
            label="Song for White Bike"
            value={values.song1}
            onChange={(song1) => set({ song1 })}
          />
        </div>
      </fieldset>
      <fieldset className="bike-group bike-group-black">
        <legend>Black Bike</legend>
        <div className="form-row">
          <TextField
            label="Black Bike Rider"
            placeholder="i.e. Olga or Steve or ..."
            value={values.person2}
            onChange={(event) => set({ person2: event.target.value })}
          />
        </div>
        <div className="form-row">
          <SongAutocomplete
            showId={showId}
            label="Song for Black Bike"
            value={values.song2}
            onChange={(song2) => set({ song2 })}
          />
        </div>
      </fieldset>
    </>
  );
}
