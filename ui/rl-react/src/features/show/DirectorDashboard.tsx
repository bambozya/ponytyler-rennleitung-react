import { Link, useParams } from "react-router-dom";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { getRacesForShow, updateRace, type Race } from "../../api/race";
import { getShow } from "../../api/show";
import { useLoad } from "../../hooks/useLoad";
import { ButtonList } from "../../ui/ButtonList";
import { useSnackbar } from "../../ui/Snackbar";
import { formatDateTime } from "../../utils/formatDate";
import "./DirectorDashboard.css";

function RaceTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <Icon>tag</Icon>
        </TableCell>
        <TableCell>Rider White Bike</TableCell>
        <TableCell>Song White Bike</TableCell>
        <TableCell>-</TableCell>
        <TableCell>Rider Black Bike</TableCell>
        <TableCell>Song Black Bike</TableCell>
        <TableCell>-</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
  );
}

export function DirectorDashboard() {
  const { showId = "" } = useParams();
  const snackbar = useSnackbar();
  const show = useLoad(() => getShow(showId), [showId]);
  const races = useLoad(() => getRacesForShow(showId), [showId]);
  const finishedRaces = useLoad(() => getRacesForShow(showId, true), [showId]);

  const update = async (race: Race, successMessage: string, errorMessage: string) => {
    try {
      await updateRace(race);
      snackbar.success(successMessage);
      races.reload();
      finishedRaces.reload();
    } catch (error) {
      snackbar.error(errorMessage, error);
    }
  };

  const bikeWon = (bike: 1 | 2, race: Race) =>
    update(
      { ...race, bikeWon: bike, raced: true },
      `Marked Race as "Bike ${bike} won!" Congrats ${bike === 1 ? race.person1 : race.person2}`,
      "Error during marking of the Race",
    );

  const markRaceAsPlayBoth = (race: Race) =>
    update({ ...race, raced: true, bikeWon: 3 }, 'Marked Race as "Both Won"', "Error during Marking of the Race");

  const markRaceAsRaced = (race: Race) =>
    update({ ...race, raced: true }, "Marked Race as over", "Error during Marking of the Race");

  const markRaceAsNotRaced = (race: Race) =>
    update({ ...race, raced: false }, "Marked Race as NOT over", "Error during Marking of the Race");

  const racedToggle = (race: Race) =>
    race.raced ? (
      <IconButton aria-label="Mark Race as not raced" onClick={() => markRaceAsNotRaced(race)}>
        <Icon>check_box</Icon>
      </IconButton>
    ) : (
      <IconButton aria-label="Mark Race as raced" onClick={() => markRaceAsRaced(race)}>
        <Icon>check_box_outline_blank</Icon>
      </IconButton>
    );

  return (
    <div className="director-dashboard">
      <h2>
        {show.data?.name} / {formatDateTime(show.data?.date)}
      </h2>

      <ButtonList>
        <Button variant="contained" component={Link} to={`/show/${showId}/create-race`}>
          Add Race for this Show
        </Button>
      </ButtonList>

      {races.data && (
        <>
          <h3>Upcoming Races</h3>
          {races.data.length === 0 ? (
            <p>No Races yet</p>
          ) : (
            <Table>
              <RaceTableHead />
              <TableBody>
                {races.data.map((race) => (
                  <TableRow key={race.id}>
                    <TableCell>{race.orderNumber + 1}</TableCell>
                    <TableCell>{race.person1}</TableCell>
                    <TableCell>
                      {race.song1?.artist}
                      <br />
                      {race.song1?.name}
                    </TableCell>
                    <TableCell className="bike-won-icon">
                      <IconButton aria-label="Mark Race as won by white Bike" onClick={() => bikeWon(1, race)}>
                        <Icon>sports_score</Icon>
                      </IconButton>
                    </TableCell>
                    <TableCell>{race.person2}</TableCell>
                    <TableCell>
                      {race.song2?.artist}
                      <br />
                      {race.song2?.name}
                    </TableCell>
                    <TableCell className="bike-won-icon">
                      <IconButton aria-label="Mark Race as won by black Bike" onClick={() => bikeWon(2, race)}>
                        <Icon>sports_score</Icon>
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      {!race.raced && (
                        <IconButton aria-label="Play both Songs" onClick={() => markRaceAsPlayBoth(race)}>
                          <Badge badgeContent="2" color="error">
                            <Icon>sports_score</Icon>
                          </Badge>
                        </IconButton>
                      )}
                      &nbsp;
                      {racedToggle(race)}
                      <IconButton aria-label="Edit Race" component={Link} to={`/show/${showId}/race/${race.id}`}>
                        <Icon>edit</Icon>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </>
      )}

      {finishedRaces.data && finishedRaces.data.length > 0 && (
        <>
          <h3>Past Races</h3>
          <Table>
            <RaceTableHead />
            <TableBody>
              {finishedRaces.data.map((race) => {
                const whiteWon = race.bikeWon === 1 || race.bikeWon === 3;
                const blackWon = race.bikeWon === 2 || race.bikeWon === 3;
                const whiteClass = whiteWon ? "winning-bike" : undefined;
                const blackClass = blackWon ? "winning-bike" : undefined;
                return (
                  <TableRow key={race.id}>
                    <TableCell>{race.orderNumber + 1}</TableCell>
                    <TableCell className={whiteClass}>{race.person1}</TableCell>
                    <TableCell className={whiteClass}>
                      {race.song1?.artist}
                      <br />
                      {race.song1?.name}
                    </TableCell>
                    <TableCell className={whiteClass}>{whiteWon && <Icon>sports_score</Icon>}</TableCell>
                    <TableCell className={blackClass}>{race.person2}</TableCell>
                    <TableCell className={blackClass}>
                      {race.song2?.artist}
                      <br />
                      {race.song2?.name}
                    </TableCell>
                    <TableCell className={blackClass}>{blackWon && <Icon>sports_score</Icon>}</TableCell>
                    <TableCell>{racedToggle(race)}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </>
      )}
    </div>
  );
}
