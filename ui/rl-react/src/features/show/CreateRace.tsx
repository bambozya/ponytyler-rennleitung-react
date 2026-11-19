import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import { createRace, RaceState } from "../../api/race";
import { getShow } from "../../api/show";
import { isListFull } from "../../api/statistics";
import { useLoad } from "../../hooks/useLoad";
import { ButtonList } from "../../ui/ButtonList";
import { Message } from "../../ui/Message";
import { useSnackbar } from "../../ui/Snackbar";
import { emptyRaceForm, RaceFormFields, type RaceFormValues } from "./RaceFormFields";

export function CreateRace() {
  const { showId = "" } = useParams();
  const navigate = useNavigate();
  const snackbar = useSnackbar();
  const show = useLoad(() => getShow(showId), [showId]);
  const listIsFull = useLoad(() => isListFull(showId), [showId]);
  const [values, setValues] = useState<RaceFormValues>(emptyRaceForm);
  const [createInProcess, setCreateInProcess] = useState(false);

  const save = async () => {
    setCreateInProcess(true);
    // A race with a missing rider or song goes on the waiting list until an opponent turns up.
    const complete = Boolean(values.person1 && values.person2 && values.song1 && values.song2);
    const raceState = complete ? RaceState.WAITING_TO_RACE : RaceState.WAITING_FOR_OPPONENT;
    try {
      await createRace({ ...values, raceState, showId });
      await snackbar.success(
        complete
          ? `Successfully Created Race between ${values.person1} and ${values.person2}`
          : "Successfully Created Race for Waiting List",
        200,
      );
      navigate(`/show/${showId}`);
    } catch (error) {
      setCreateInProcess(false);
      snackbar.error("Error during Race Creation", error);
    }
  };

  return (
    <div>
      {show.data && <h2>Adding Race for Show: {show.data.name}</h2>}
      {listIsFull.data && (
        <Message type="warn">
          The List exceeds the Number of Races calculated to be raceable within the defined duration, based on
          the average Number of Songs raced per Hour in past races.
        </Message>
      )}

      <RaceFormFields showId={showId} values={values} onChange={setValues} />

      <ButtonList>
        <Button variant="contained" color="secondary" component={Link} to={`/show/${showId}`} aria-label="Back">
          <Icon>arrow_back</Icon>
        </Button>
        <Button variant="contained" onClick={save} disabled={createInProcess}>
          Speichern
        </Button>
      </ButtonList>
    </div>
  );
}
