import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getRace, getUpcomingRace, RaceState, updateRace } from "../../api/race";
import { clearTrack, startRaceOnTrack, useTrackState, type TrackRider, type TrackState } from "../../api/track";
import { useLoad } from "../../hooks/useLoad";
import { colors } from "../../theme";
import { useSnackbar } from "../../ui/Snackbar";
import "./RaceTrack.css";

const CHECKER_SIZE = 10;
const CHECKER_COLUMNS = 4;
const CHECKER_ROWS = 12;

const OUTER_SHAPE =
  "M1185.531 0C1359.207 0 1500 167.895 1500 375s-140.793 375-314.469 375H314.47C140.793 750 0 582.105 0 375S140.793 0 314.469 0Zm0 0";
const INFIELD_SHAPE =
  "M1075.2 124.84c138.16 0 250.16 112 250.16 250.16s-112 250.16-250.16 250.16H424.8c-138.16 0-250.16-112-250.16-250.16s112-250.16 250.16-250.16Zm0 0";
/** Lanes start and end at the finish line (x = 750). */
const WHITE_LANE =
  "M750 26.594 L1071.48 26.594 c179.958 0 325.845 145.887 325.845 325.847 0 179.958-145.887 325.844-325.844 325.844 H374.05 c-179.957 0-325.844-145.886-325.844-325.844 0-179.96 145.887-325.847 325.844-325.847 L750 26.594 Z";
const BLACK_LANE =
  "M750 65.957 L1107.457 65.957 c179.961 0 325.848 145.887 325.848 325.848 0 179.957-145.887 325.844-325.848 325.844 H410.031 c-179.96 0-325.843-145.887-325.843-325.844 0-179.961 145.882-325.848 325.843-325.848 L750 65.957 Z";

/** Length of the lane that is still undrawn when the rider has done `distance` of `trackLength`. */
function dashOffset(distance: number, trackLength: number, laneLength: number): number {
  const done = Math.min(Math.max(distance / trackLength, 0), 1);
  return laneLength - done * laneLength;
}

const formatSpeed = (speed: number) => `${Math.round(speed)} km/h`;
const formatTime = (seconds: number) => `${seconds.toFixed(2).replace(".", ",")} s`;

interface RiderCardProps {
  bike: "white" | "black";
  rider: TrackRider;
  phase: TrackState["phase"];
  won: boolean;
}

function RiderCard({ bike, rider, phase, won }: RiderCardProps) {
  const finished = rider.finishTime !== null;
  return (
    <div className={`race-track-rider race-track-rider-${bike}${won ? " race-track-rider-won" : ""}`}>
      <span className="race-track-bike">{bike === "white" ? "White Bike" : "Black Bike"}</span>
      <h2>{rider.name || "?"}</h2>
      {(phase === "racing" || phase === "finished") && (
        <div className="race-track-speed">
          {formatSpeed(rider.speed)}
          {finished && <small> ⌀ · {formatTime(rider.finishTime as number)}</small>}
        </div>
      )}
    </div>
  );
}

/**
 * Full-screen race track. The backend runs the race (countdown, distances from the bikes, speeds)
 * and every screen that has this page open shows the same race.
 */
export function RaceTrack() {
  const navigate = useNavigate();
  const snackbar = useSnackbar();
  const track = useTrackState();
  // With nothing on the track, the next race of the current show is announced.
  const upcoming = useLoad(getUpcomingRace, [track?.phase === "idle"]);
  const whiteLane = useRef<SVGPathElement>(null);
  const blackLane = useRef<SVGPathElement>(null);
  const [laneLengths, setLaneLengths] = useState<{ white: number; black: number } | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    setLaneLengths({
      white: whiteLane.current?.getTotalLength() ?? 0,
      black: blackLane.current?.getTotalLength() ?? 0,
    });
  }, []);

  const idle = !track || track.phase === "idle";
  const nextRace = idle ? upcoming.data : undefined;
  const white: TrackRider =
    !idle && track ? track.white : { name: nextRace?.person1 ?? "", distance: 0, speed: 0, finishTime: null };
  const black: TrackRider =
    !idle && track ? track.black : { name: nextRace?.person2 ?? "", distance: 0, speed: 0, finishTime: null };
  const phase = track?.phase ?? "idle";
  const trackLength = track?.trackLength ?? 250;
  const winner = track?.winner ?? 0;
  const raceId = idle ? nextRace?.id : track?.raceId;
  const backTo = !idle && track?.showId ? `/show/${track.showId}` : "/views";

  const run = async (action: () => Promise<unknown>, errorMessage: string) => {
    setBusy(true);
    try {
      await action();
    } catch (error) {
      snackbar.error(errorMessage, error);
    } finally {
      setBusy(false);
    }
  };

  const start = () => {
    if (raceId == null) return;
    run(() => startRaceOnTrack(raceId), "Das Rennen konnte nicht gestartet werden");
  };

  /** Writes the winner into the race list, like the flag buttons on the show page, and clears the track. */
  const saveResult = () =>
    run(async () => {
      if (!track?.raceId || winner === 0) return;
      const race = await getRace(track.raceId);
      await updateRace({ ...race, bikeWon: winner, raceState: RaceState.RACED, raced: true });
      await clearTrack();
      navigate(`/show/${race.showId}`);
    }, "Das Ergebnis konnte nicht eingetragen werden");

  const winnerName = winner === 1 ? white.name : winner === 2 ? black.name : "";

  let banner: string;
  if (phase === "countdown") banner = String(track?.countdown ?? "");
  else if (phase === "racing") banner = winner === 0 ? "Allez! Allez! Allez!" : `${winnerName} ist durch!`;
  else if (phase === "finished")
    banner = winner === 3 ? "Unentschieden!?" : winner === 0 ? "Keiner im Ziel!?" : `${winnerName} gewinnt!`;
  else banner = nextRace ? "Gleich am Start" : "Keiner dran!?";

  return (
    <div className={`race-track race-track-${phase}`}>
      <Link className="race-track-back" to={backTo} aria-label="Zurück">
        ← Zurück
      </Link>
      {track?.feed === "simulation" && (
        <p className="race-track-note" title="BIKE_SERIAL_PORT ist im Backend nicht gesetzt">
          Simulation – keine Räder angeschlossen
        </p>
      )}
      {track?.feedProblem && <p className="race-track-note race-track-note-problem">{track.feedProblem}</p>}

      <div className="race-track-stage">
        <div className="race-track-infield">
          <div className="race-track-riders">
            <RiderCard bike="white" rider={white} phase={phase} won={winner === 1 || winner === 3} />
            <RiderCard bike="black" rider={black} phase={phase} won={winner === 2 || winner === 3} />
          </div>

          <p className="race-track-cheer" aria-live="polite">
            {banner}
          </p>

          <div className="race-track-actions">
            {idle && nextRace && (
              <button type="button" className="race-track-button" onClick={start} disabled={busy}>
                Start the race!
              </button>
            )}
            {phase === "finished" && (
              <>
                {winner !== 0 && (
                  <button type="button" className="race-track-button" onClick={saveResult} disabled={busy}>
                    Ergebnis eintragen
                  </button>
                )}
                <button
                  type="button"
                  className="race-track-button race-track-button-quiet"
                  onClick={start}
                  disabled={busy}
                >
                  Nochmal
                </button>
              </>
            )}
            {(phase === "countdown" || phase === "racing") && (
              <button
                type="button"
                className="race-track-button race-track-button-quiet"
                onClick={() => run(clearTrack, "Das Rennen konnte nicht abgebrochen werden")}
                disabled={busy}
              >
                Abbrechen
              </button>
            )}
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 750" style={{ padding: "0 7.5%" }}>
          <defs>
            {/* Each lane is clipped to its own shape, so only the inner half of its stroke shows. */}
            <clipPath id="race-track-white-lane">
              <path d={WHITE_LANE} />
            </clipPath>
            <clipPath id="race-track-black-lane">
              <path d={BLACK_LANE} />
            </clipPath>
          </defs>

          <path fill={colors.pink} d={OUTER_SHAPE} />

          <g clipPath="url(#race-track-white-lane)">
            <path
              ref={whiteLane}
              className="race-track-lane"
              fill="none"
              stroke={colors.paper}
              strokeWidth="30"
              d={WHITE_LANE}
              style={{
                visibility: laneLengths ? "visible" : "hidden",
                strokeDasharray: laneLengths?.white,
                strokeDashoffset: laneLengths
                  ? dashOffset(white.distance, trackLength, laneLengths.white)
                  : undefined,
              }}
            />
          </g>
          <g clipPath="url(#race-track-black-lane)">
            <path
              ref={blackLane}
              className="race-track-lane"
              fill="none"
              stroke={colors.black}
              strokeWidth="30"
              d={BLACK_LANE}
              style={{
                visibility: laneLengths ? "visible" : "hidden",
                strokeDasharray: laneLengths?.black,
                strokeDashoffset: laneLengths
                  ? dashOffset(black.distance, trackLength, laneLengths.black)
                  : undefined,
              }}
            />
          </g>

          {/* checkerboard finish line */}
          <g transform="translate(730,0)">
            {Array.from({ length: CHECKER_ROWS * CHECKER_COLUMNS }, (_unused, index) => {
              const row = Math.floor(index / CHECKER_COLUMNS);
              const column = index % CHECKER_COLUMNS;
              return (
                <rect
                  key={index}
                  x={column * CHECKER_SIZE}
                  y={row * CHECKER_SIZE}
                  width={CHECKER_SIZE}
                  height={CHECKER_SIZE}
                  fill={(row + column) % 2 === 0 ? colors.paper : colors.black}
                />
              );
            })}
          </g>

          <path fill={colors.surface} d={INFIELD_SHAPE} />
        </svg>
      </div>
    </div>
  );
}
