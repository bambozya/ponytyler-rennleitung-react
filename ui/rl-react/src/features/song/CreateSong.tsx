import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { createSong, Origin } from "../../api/song";
import { useSnackbar } from "../../ui/Snackbar";
import { SongFormFields, type SongFormValues } from "./SongFormFields";

export function CreateSong() {
  const navigate = useNavigate();
  const snackbar = useSnackbar();
  const [values, setValues] = useState<SongFormValues>({ name: "", artist: "", selectable: true });

  const save = async () => {
    try {
      await createSong({ ...values, deleted: false, origin: Origin.FROM_DIRECT_INPUT });
      navigate("/song");
    } catch (error) {
      snackbar.error("Error during Creation Of Song", error);
    }
  };

  return (
    <div>
      <h2>Add Song</h2>
      <SongFormFields values={values} onChange={setValues} />
      <Button variant="contained" onClick={save}>
        Speichern
      </Button>
    </div>
  );
}
