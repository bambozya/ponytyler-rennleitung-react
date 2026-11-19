import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import { getAllShiftsForShow } from "../../../api/shift";
import { getShow } from "../../../api/show";
import { useLoad } from "../../../hooks/useLoad";
import { ButtonList } from "../../../ui/ButtonList";
import { Message } from "../../../ui/Message";

export function ShiftsDashboard() {
  const { showId = "" } = useParams();
  const show = useLoad(() => getShow(showId), [showId]);
  const shifts = useLoad(() => getAllShiftsForShow(showId), [showId]);

  return (
    <div>
      <h2>{show.data?.name} / Shifts</h2>

      {shifts.data && (
        <>
          <ButtonList>
            <Button variant="contained" color="secondary" component={Link} to={`/show/${showId}`} aria-label="Back">
              <Icon>arrow_back</Icon>
            </Button>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to={`/show/${showId}/shifts/wizzard`}
              startIcon={<Icon>auto_fix_high</Icon>}
            >
              create {shifts.data.length > 0 ? "new " : ""}shifts
            </Button>
          </ButtonList>

          {shifts.data.length === 0 && (
            <Message type="info">No Shifts yet. Use The Wizzard to create Shifts.</Message>
          )}
        </>
      )}
    </div>
  );
}
