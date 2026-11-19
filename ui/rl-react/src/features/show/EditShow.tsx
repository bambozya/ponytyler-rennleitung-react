import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { getShow, updateShow, type Show } from "../../api/show";
import { useSnackbar } from "../../ui/Snackbar";
import { combineDateAndTime, toDateInputValue, toTimeInputValue } from "../../utils/formatDate";
import { isShowFormValid, ShowFormFields, type ShowFormValues } from "./ShowFormFields";

export function EditShow() {
  const { showId = "" } = useParams();
  const navigate = useNavigate();
  const snackbar = useSnackbar();
  const [show, setShow] = useState<Show | undefined>(undefined);
  const [values, setValues] = useState<ShowFormValues>({ name: "", date: "", time: "20:00", duration: "120" });

  useEffect(() => {
    let cancelled = false;
    getShow(showId).then(
      (loaded) => {
        if (cancelled) return;
        setShow(loaded);
        setValues({
          name: loaded.name,
          date: toDateInputValue(loaded.date) || toDateInputValue(new Date()),
          time: toTimeInputValue(loaded.date) || "20:00",
          duration: String(loaded.duration ?? ""),
        });
      },
      (error) => snackbar.error("Error during loading of the Show", error),
    );
    return () => {
      cancelled = true;
    };
  }, [showId, snackbar]);

  if (!show) return null;

  const save = async () => {
    try {
      await updateShow({
        ...show,
        name: values.name,
        date: combineDateAndTime(values.date, values.time),
        duration: Number(values.duration) || 0,
        active: true,
        finished: show.finished || false,
      });
      await snackbar.success(`Successfully Updated Show ${values.name}`, 200);
      navigate(`/show/${showId}`);
    } catch (error) {
      snackbar.error("Error during Update Of Show", error);
    }
  };

  return (
    <div>
      <h2>
        Update of Show #{showId} ({show.name})
      </h2>
      <ShowFormFields values={values} onChange={setValues} />
      <Button variant="contained" disabled={!isShowFormValid(values)} onClick={save}>
        Speichern
      </Button>
    </div>
  );
}
