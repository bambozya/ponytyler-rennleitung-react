import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import LinearProgress from "@mui/material/LinearProgress";
import MenuItem from "@mui/material/MenuItem";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import {
  getAllRacesForShow,
  moveRaceUpOrDown,
  RaceState,
  repairOrder,
  updateRace,
  type Race,
} from "../../api/race";
import { deleteShow, getShow, type Show } from "../../api/show";
import { startRaceOnTrack } from "../../api/track";
import { isListFull } from "../../api/statistics";
import { useLoad } from "../../hooks/useLoad";
import { ButtonList } from "../../ui/ButtonList";
import { Message } from "../../ui/Message";
import { useSnackbar } from "../../ui/Snackbar";
import { useYesNoDialog } from "../../ui/YesNoDialog";
import { formatDateTime } from "../../utils/formatDate";
import { addSongPlayedInfo, compareRacesForList, type RaceWithSongPlayedInfo } from "./raceList";
import "./ShowDashboard.css";

const REFRESH_INTERVAL_STORAGE_KEY = "pontyTyperRefreshTimerInterval";
const STOP = "stop";
const refreshIntervals = [
  { value: "5000", label: "5 Sekunden" },
  { value: "8000", label: "8 Sekunden" },
  { value: "10000", label: "10 Sekunden" },
  { value: "15000", label: "15 Sekunden" },
  { value: "30000", label: "30 Sekunden" },
  { value: STOP, label: "Stopp" },
];
/** Buttons are disabled for this long before each automatic refresh, so a tap doesn't land on a row that is about to move. */
const REFRESH_LEAD_TIME_MS = 600;
const PROGRESS_TICK_MS = 250;

function readStoredRefreshInterval(): string {
  const stored = localStorage.getItem(REFRESH_INTERVAL_STORAGE_KEY);
  return refreshIntervals.some((option) => option.value === stored) ? (stored as string) : "5000";
}

const stateIcon: Record<RaceState, string> = {
  RACED: "done",
  CANCELED: "delete",
  WAITING_TO_RACE: "schedule",
  WAITING_FOR_OPPONENT: "assignment",
};

const stateRowClass: Record<RaceState, string> = {
  WAITING_TO_RACE: "race-state-waiting-to-race",
  WAITING_FOR_OPPONENT: "race-state-waiting-for-opponent",
  RACED: "race-state-raced",
  CANCELED: "race-state-canceled",
};

interface SongCellProps {
  race: RaceWithSongPlayedInfo;
  bike: 1 | 2;
  onBikeWon: (bike: 1 | 2, race: Race) => void;
}

function SongCell({ race, bike, onBikeWon }: SongCellProps) {
  const person = bike === 1 ? race.person1 : race.person2;
  const song = bike === 1 ? race.song1 : race.song2;
  const alreadyPlayed = bike === 1 ? race.song1AlreadyPlayed : race.song2AlreadyPlayed;
  const alreadyWished = bike === 1 ? race.song1AlreadyWished : race.song2AlreadyWished;
  const raced = race.raceState === RaceState.RACED;
  const won = raced && (race.bikeWon === bike || race.bikeWon === 3);
  const lost = raced && race.bikeWon === (bike === 1 ? 2 : 1);

  const classes = ["song-column"];
  if (!raced && alreadyPlayed) classes.push("alreadyPlayed");
  if (!raced && alreadyWished) classes.push("alreadyWished");
  if (won) classes.push("winning-bike");
  if (lost) classes.push("losing-bike");

  return (
    <TableCell className={classes.join(" ")}>
      {person && <strong className={`rider-name rider-name-${bike === 1 ? "white" : "black"}`}>{person}</strong>}
      <br />
      {song?.artist}
      <br />
      {song?.name}
      {!raced && alreadyPlayed && (
        <span className="song-already-played-info">
          Please choose a different Song <Icon>warning</Icon>
        </span>
      )}
      {lost && <Icon className="bike-has-lost">thumb_down</Icon>}
      {won && <Icon className="bike-has-won">thumb_up</Icon>}
      {race.raceState === RaceState.WAITING_TO_RACE && (
        <IconButton
          className="bike-won-button"
          aria-label={`Mark ${bike === 1 ? "white" : "black"} bike as winner`}
          onClick={() => onBikeWon(bike, race)}
        >
          <Icon className="bike-won">sports_score</Icon>
        </IconButton>
      )}
    </TableCell>
  );
}

export function ShowDashboard() {
  const { showId = "" } = useParams();
  const navigate = useNavigate();
  const snackbar = useSnackbar();
  const confirm = useYesNoDialog();

  const [show, setShow] = useState<Show | undefined>(undefined);
  const [races, setRaces] = useState<RaceWithSongPlayedInfo[] | undefined>(undefined);
  const [refreshing, setRefreshing] = useState(false);
  const [refreshInterval, setRefreshInterval] = useState(readStoredRefreshInterval);
  const [progress, setProgress] = useState(0);
  const listIsFull = useLoad(() => isListFull(showId), [showId]);
  const latestRequest = useRef(0);

  const loadRaces = useCallback(async () => {
    const request = ++latestRequest.current;
    try {
      const [loadedShow, loadedRaces] = await Promise.all([getShow(showId), getAllRacesForShow(showId)]);
      if (request !== latestRequest.current) return; // a newer load is already on its way
      setShow(loadedShow);
      setRaces(addSongPlayedInfo([...loadedRaces].sort(compareRacesForList)));
      setRefreshing(false);
    } catch (error) {
      if (request === latestRequest.current) snackbar.error("Error during loading of Data", error);
    }
  }, [showId, snackbar]);

  useEffect(() => {
    loadRaces();
    return () => {
      latestRequest.current++; // drop responses that arrive after leaving the page
    };
  }, [loadRaces]);

  useEffect(() => {
    setProgress(0);
    if (refreshInterval === STOP) return;

    const intervalMs = Number(refreshInterval);
    let cycleStart = Date.now();
    let leadTimer: ReturnType<typeof setTimeout> | undefined;

    const progressTimer = setInterval(() => {
      setProgress(Math.min(100, ((Date.now() - cycleStart) / intervalMs) * 100));
    }, PROGRESS_TICK_MS);

    const refreshTimer = setInterval(() => {
      setRefreshing(true);
      leadTimer = setTimeout(() => {
        cycleStart = Date.now();
        setProgress(0);
        loadRaces();
      }, REFRESH_LEAD_TIME_MS);
    }, intervalMs);

    return () => {
      clearInterval(progressTimer);
      clearInterval(refreshTimer);
      clearTimeout(leadTimer);
      setRefreshing(false);
    };
  }, [refreshInterval, loadRaces]);

  const changeRefreshInterval = (value: string) => {
    localStorage.setItem(REFRESH_INTERVAL_STORAGE_KEY, value);
    setRefreshInterval(value);
  };

  /** Runs a change, reports the outcome and reloads the list. */
  const run = async (action: () => Promise<unknown>, successMessage: string, errorMessage: string) => {
    try {
      await action();
      snackbar.success(successMessage);
      loadRaces();
    } catch (error) {
      snackbar.error(errorMessage, error);
    }
  };

  const bikeWon = (bike: 1 | 2, race: Race) => {
    if (race.raceState !== RaceState.WAITING_TO_RACE) {
      snackbar.error("Can't mark Winning Bike if Race is not Waiting to be Raced", undefined, 5000);
      return;
    }
    run(
      () => updateRace({ ...race, bikeWon: bike, raceState: RaceState.RACED, raced: true }),
      `Marked Race as "Bike ${bike} won!" Congrats ${bike === 1 ? race.person1 : race.person2}`,
      "Error during marking of the Race",
    );
  };

  const markRaceAsPlayBoth = (race: Race) =>
    run(
      () => updateRace({ ...race, raced: true, raceState: RaceState.RACED, bikeWon: 3 }),
      'Marked Race as "Both Won"',
      "Error during Marking of the Race",
    );

  const markRaceAsCanceled = (race: Race) =>
    run(
      () => updateRace({ ...race, raced: true, raceState: RaceState.CANCELED }),
      "Marked Race as over",
      "Error during Marking of the Race",
    );

  const markRaceAsNotRaced = (race: Race) =>
    run(
      () => updateRace({ ...race, raced: false, bikeWon: 0, raceState: RaceState.WAITING_TO_RACE }),
      "Marked Race as NOT over",
      "Error during Marking of the Race",
    );

  /** Puts the race on the track (countdown starts on every screen showing it) and goes there. */
  const startRace = async (race: Race) => {
    try {
      await startRaceOnTrack(race.id);
      navigate("/race-track");
    } catch (error) {
      snackbar.error("Das Rennen konnte nicht gestartet werden", error);
    }
  };

  const moveRace = (race: Race, upOrDown: "up" | "down") =>
    run(() => moveRaceUpOrDown(race, upOrDown), `Moved Race "${upOrDown}"`, `Error Moving Race "${upOrDown}"`);

  /** Pairs a waiting rider with the next rider who is also waiting for an opponent. */
  const mergeWaitingForOpponentRaces = (race: Race) => {
    const otherRace = races?.find(
      (candidate) => candidate.id !== race.id && candidate.raceState === RaceState.WAITING_FOR_OPPONENT,
    );
    if (!otherRace) return;
    run(
      () =>
        Promise.all([
          updateRace({
            ...race,
            person1: race.person1 || race.person2,
            song1Id: race.song1Id || race.song2Id,
            person2: otherRace.person1 || otherRace.person2,
            song2Id: otherRace.song1Id || otherRace.song2Id,
            raceState: RaceState.WAITING_TO_RACE,
          }),
          updateRace({ ...otherRace, raceState: RaceState.CANCELED, raced: false, bikeWon: 0 }),
        ]),
      "Races where merged successfully",
      "Races could not be merged",
    );
  };

  const repairRaceOrder = () =>
    run(() => repairOrder(showId), "Race Order Repaired", "Race Order could not be repaired");

  const removeShow = async () => {
    const confirmed = await confirm({
      title: `Do you want to delete the Show "${show?.name}"?`,
      text: "This will delete the Show and all the related Races.",
      optionYes: "Yes, Delete",
      optionNo: "No, Cancel",
    });
    if (!confirmed) return;
    try {
      await deleteShow(showId);
      snackbar.success("Show was deleted");
      navigate("/show");
    } catch (error) {
      snackbar.error("Show could not be deleted", error);
    }
  };

  const racesWaitingToRace = (races ?? []).filter((race) => race.raceState === RaceState.WAITING_TO_RACE);
  const firstWaitingToRaceId = racesWaitingToRace[0]?.id;
  const lastWaitingToRaceId = racesWaitingToRace[racesWaitingToRace.length - 1]?.id;

  return (
    <div className="show-dashboard">
      <h2>
        {show?.name} / {formatDateTime(show?.date)} ({show?.duration} Minutes)
      </h2>

      {listIsFull.data && (
        <Message type="warn">
          The List exceeds the Number of Races calculated to be raceable within the defined duration, based on
          the average Number of Songs raced per Hour in past races.
        </Message>
      )}

      {races && (
        <>
          <div className="refresh-bar">
            <ButtonList style={{ flexBasis: "auto", marginTop: 0 }}>
              <Button variant="contained" color="secondary" component={Link} to="/show" aria-label="Back">
                <Icon>arrow_back</Icon>
              </Button>
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to={`/show/${showId}/shifts`}
                aria-label="Shifts"
              >
                <Icon>groups</Icon>
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={repairRaceOrder}
                startIcon={<Icon>construction</Icon>}
              >
                Repair Order
              </Button>
              <Button variant="contained" component={Link} to={`/show/${showId}/create-race`}>
                Add Race for this Show
              </Button>
            </ButtonList>
            <div className="refresh-setting">
              <TextField
                select
                fullWidth
                variant="filled"
                label="Refresh Interval"
                value={refreshInterval}
                onChange={(event) => changeRefreshInterval(event.target.value)}
              >
                {refreshIntervals.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <LinearProgress variant="determinate" value={progress} />
            </div>
          </div>

          {races.length === 0 ? (
            <p className="empty-note">Noch keine Rennen. Wer traut sich?</p>
          ) : (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Icon>tag</Icon>
                  </TableCell>
                  <TableCell>
                    <span className="bike-label bike-label-white">White Bike</span>
                  </TableCell>
                  <TableCell>
                    <span className="bike-label bike-label-black">Black Bike</span>
                  </TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {races.map((race) => {
                  const state = race.raceState as RaceState;
                  const waitingToRace = state === RaceState.WAITING_TO_RACE;
                  return (
                    <TableRow key={race.id} className={stateRowClass[state]}>
                      <TableCell className="race-number" title={`#${race.id}`}>
                        {race.orderNumber + 1}
                        <br />
                        <Icon>{stateIcon[state]}</Icon>
                      </TableCell>
                      <SongCell race={race} bike={1} onBikeWon={bikeWon} />
                      <SongCell race={race} bike={2} onBikeWon={bikeWon} />
                      <TableCell>
                        {waitingToRace && (
                          <Button
                            className="start-race-button"
                            variant="contained"
                            aria-label="Start the race!"
                            onClick={() => startRace(race)}
                            disabled={refreshing}
                            startIcon={<Icon>play_arrow</Icon>}
                          >
                            <span className="start-race-label">Start the race!</span>
                          </Button>
                        )}
                        {waitingToRace && (
                          <IconButton
                            aria-label="Songs Beide"
                            onClick={() => markRaceAsPlayBoth(race)}
                            disabled={refreshing}
                          >
                            <Badge badgeContent="2" color="secondary">
                              <Icon>sports_score</Icon>
                            </Badge>
                          </IconButton>
                        )}
                        <IconButton
                          aria-label="Edit Race"
                          component={Link}
                          to={`/show/${showId}/race/${race.id}`}
                          disabled={refreshing}
                        >
                          <Icon>edit</Icon>
                        </IconButton>
                        {waitingToRace && race.id !== firstWaitingToRaceId && (
                          <IconButton
                            aria-label="Move Race Up"
                            onClick={() => moveRace(race, "up")}
                            disabled={refreshing}
                          >
                            <Icon>arrow_upward</Icon>
                          </IconButton>
                        )}
                        {waitingToRace && race.id !== lastWaitingToRaceId && (
                          <IconButton
                            aria-label="Move Race Down"
                            onClick={() => moveRace(race, "down")}
                            disabled={refreshing}
                          >
                            <Icon>arrow_downward</Icon>
                          </IconButton>
                        )}
                        {(state === RaceState.RACED || state === RaceState.CANCELED) && (
                          <IconButton aria-label="Return Race" onClick={() => markRaceAsNotRaced(race)}>
                            <Icon>history</Icon>
                          </IconButton>
                        )}
                        {state !== RaceState.CANCELED && (
                          <IconButton aria-label="Cancel Race" onClick={() => markRaceAsCanceled(race)}>
                            <Icon>delete</Icon>
                          </IconButton>
                        )}
                        {state === RaceState.WAITING_FOR_OPPONENT && (
                          <IconButton aria-label="Merge Races" onClick={() => mergeWaitingForOpponentRaces(race)}>
                            <Icon>merge</Icon>
                          </IconButton>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}

          <ButtonList>
            <Button variant="contained" color="secondary" component={Link} to="/show" aria-label="Back">
              <Icon>arrow_back</Icon>
            </Button>
            <Button variant="contained" color="error" onClick={removeShow}>
              Delete Show
            </Button>
          </ButtonList>
        </>
      )}
    </div>
  );
}
