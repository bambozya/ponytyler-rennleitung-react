import { getUpcomingRace, type Race } from "../../api/race";
import { useLoad } from "../../hooks/useLoad";
import "./Views.css";

function Rider({ race, bike }: { race: Race; bike: 1 | 2 }) {
  const person = bike === 1 ? race.person1 : race.person2;
  const song = bike === 1 ? race.song1 : race.song2;
  return (
    <div className={`versus-rider ${bike === 1 ? "versus-white" : "versus-black"}`}>
      <span className="versus-bike">{bike === 1 ? "White Bike" : "Black Bike"}</span>
      <strong>{person}</strong>
      {song && (
        <span className="versus-song">
          {song.artist} – {song.name}
        </span>
      )}
    </div>
  );
}

export function NextRace() {
  const race = useLoad(getUpcomingRace, []);

  return (
    <div>
      <h2>
        Gleich am <span>Start</span>
      </h2>
      {race.data && (
        <div className="versus">
          <Rider race={race.data} bike={1} />
          <div className="versus-vs">vs.</div>
          <Rider race={race.data} bike={2} />
        </div>
      )}
      {race.data === null && <p className="empty-note">Keiner dran!? Meldet euch bei der Rennleitung.</p>}
    </div>
  );
}
