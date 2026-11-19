import { useEffect, useRef, useState } from "react";
import "./RaceTrack.css";

const TICK_MS = 100;
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

/** Length of the lane that is still undrawn at the given progress (0–100). */
function dashOffset(progress: number, laneLength: number): number {
  const clamped = Math.min(Math.max(progress, 0), 100);
  return laneLength - (clamped * laneLength) / 100;
}

/**
 * Full-screen race animation. There is no feed from the bikes yet, so both riders
 * advance by random steps until one of them completes the lap.
 */
export function RaceTrack() {
  const whiteLane = useRef<SVGPathElement>(null);
  const blackLane = useRef<SVGPathElement>(null);
  const [laneLengths, setLaneLengths] = useState<{ white: number; black: number } | null>(null);
  const [progress, setProgress] = useState({ white: 0, black: 0 });

  useEffect(() => {
    setLaneLengths({
      white: whiteLane.current?.getTotalLength() ?? 0,
      black: blackLane.current?.getTotalLength() ?? 0,
    });
  }, []);

  useEffect(() => {
    let white = 0;
    let black = 0;
    const timer = setInterval(() => {
      white += Math.random();
      black += Math.random();
      setProgress({ white, black });
      if (white >= 100 || black >= 100) clearInterval(timer);
    }, TICK_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="race-track">
      <div className="race-track-stage">
        <div className="race-track-riders">
          <div className="race-track-rider" style={{ color: "white" }}>
            <h2>Melis</h2>
            <div className="race-track-speed">65 km/h</div>
          </div>
          <div className="race-track-rider" style={{ color: "black" }}>
            <h2>Kim</h2>
            <div className="race-track-speed">65 km/h</div>
          </div>
        </div>

        <p className="race-track-cheer">Allez! Allez! Allez!</p>

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

          <path fill="#c5426a" d={OUTER_SHAPE} />

          <g clipPath="url(#race-track-white-lane)">
            <path
              ref={whiteLane}
              className="race-track-lane"
              fill="none"
              stroke="#fff"
              strokeWidth="30"
              d={WHITE_LANE}
              style={{
                visibility: laneLengths ? "visible" : "hidden",
                strokeDasharray: laneLengths?.white,
                strokeDashoffset: laneLengths ? dashOffset(progress.white, laneLengths.white) : undefined,
              }}
            />
          </g>
          <g clipPath="url(#race-track-black-lane)">
            <path
              ref={blackLane}
              className="race-track-lane"
              fill="none"
              stroke="#400112"
              strokeWidth="30"
              d={BLACK_LANE}
              style={{
                visibility: laneLengths ? "visible" : "hidden",
                strokeDasharray: laneLengths?.black,
                strokeDashoffset: laneLengths ? dashOffset(progress.black, laneLengths.black) : undefined,
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
                  fill={(row + column) % 2 === 0 ? "#f1f1f1" : "#400112"}
                />
              );
            })}
          </g>

          <path fill="#ecaec0" d={INFIELD_SHAPE} />
        </svg>
      </div>
    </div>
  );
}
