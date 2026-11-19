import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { getRace, updateRace, type Race } from "../../api/race";
import { getShow } from "../../api/show";
import { useLoad } from "../../hooks/useLoad";
import { useSnackbar } from "../../ui/Snackbar";
import { emptyRaceForm, RaceFormFields, type RaceFormValues } from "./RaceFormFields";

export function UpdateRace() {
  const { showId = "", raceId = "" } = useParams();
  const navigate = useNavigate();
  const snackbar = useSnackbar();
  const show = useLoad(() => getShow(showId), [showId]);
  const [race, setRace] = useState<Race | undefined>(undefined);
  const [values, setValues] = useState<RaceFormValues>(emptyRaceForm);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let cancelled = false;
    getRace(raceId).then(
      (loaded) => {
        if (cancelled) return;
        setRace(loaded);
        setValues({
          person1: loaded.person1 ?? "",
          song1: loaded.song1 ?? null,
          person2: loaded.person2 ?? "",
          song2: loaded.song2 ?? null,
        });
      },
      (error) => snackbar.error("Error during loading of the Race", error),
    );
    return () => {
      cancelled = true;
    };
  }, [raceId, snackbar]);

  const save = async () => {
    if (!race) return;
    setSaving(true);
    try {
      await updateRace({
        ...race,
        ...values,
        // null removes the song from the race
        song1Id: values.song1?.id ?? null,
        song2Id: values.song2?.id ?? null,
      });
      await snackbar.success("Successfully Updated the Race", 200);
      navigate(`/show/${showId}`);
    } catch (error) {
      setSaving(false);
      snackbar.error("Error during update", error);
    }
  };

  return (
    <div>
      {show.data && <h2>Updating Race for Show: {show.data.name}</h2>}
      <RaceFormFields showId={showId} values={values} onChange={setValues} />
      <Button variant="contained" onClick={save} disabled={!race || saving}>
        Speichern
      </Button>
    </div>
  );
}
