import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { getSong, updateSong, type Song } from "../../api/song";
import { useSnackbar } from "../../ui/Snackbar";
import { SongFormFields, type SongFormValues } from "./SongFormFields";

export function EditSong() {
  const { songId = "" } = useParams();
  const navigate = useNavigate();
  const snackbar = useSnackbar();
  const [song, setSong] = useState<Song | undefined>(undefined);
  const [values, setValues] = useState<SongFormValues>({ name: "", artist: "", selectable: true });

  useEffect(() => {
    let cancelled = false;
    getSong(songId).then(
      (loaded) => {
        if (cancelled) return;
        setSong(loaded);
        setValues({ name: loaded.name, artist: loaded.artist, selectable: loaded.selectable });
      },
      (error) => snackbar.error("Error during loading of the Song", error),
    );
    return () => {
      cancelled = true;
    };
  }, [songId, snackbar]);

  const save = async () => {
    if (!song) return;
    try {
      await updateSong({ ...song, ...values });
      await snackbar.success("Successfully Updated Song", 200);
      navigate("/song");
    } catch (error) {
      snackbar.error("Error during Update Of Song", error);
    }
  };

  return (
    <div>
      <h2>Edit Song</h2>
      <SongFormFields values={values} onChange={setValues} />
      <Button variant="contained" onClick={save} disabled={!song}>
        Speichern
      </Button>
    </div>
  );
}
