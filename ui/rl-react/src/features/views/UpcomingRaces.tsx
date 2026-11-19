import { getUpcomingRaces, type Race } from "../../api/race";
import { getAllShows } from "../../api/show";
import { useLoad } from "../../hooks/useLoad";
import "./Views.css";

async function loadUpcomingRaces(): Promise<Race[] | undefined> {
  const shows = await getAllShows();
  // Without an active show there is nothing to announce.
  return shows.some((show) => show.active) ? getUpcomingRaces() : undefined;
}

function Rider({ race, bike }: { race: Race; bike: 1 | 2 }) {
  const person = bike === 1 ? race.person1 : race.person2;
  const song = bike === 1 ? race.song1 : race.song2;
  return (
    <div className="race-sticker-rider">
      <strong>{person}</strong>
      {song && (
        <span>
          {song.artist} – {song.name}
        </span>
      )}
    </div>
  );
}

export function UpcomingRaces() {
  const races = useLoad(loadUpcomingRaces, []);

  return (
    <div>
      <h2>
        Wer fährt <span>wann?</span>
      </h2>
      {races.data &&
        (races.data.length === 0 ? (
          <p className="empty-note">Noch keine Rennen. Wer traut sich?</p>
        ) : (
          <ol className="race-stickers">
            {races.data.map((race, index) => (
              <li className="race-sticker" key={race.id}>
                <span className="race-sticker-number">{index + 1}</span>
                <Rider race={race} bike={1} />
                <span className="race-sticker-vs">vs.</span>
                <Rider race={race} bike={2} />
              </li>
            ))}
          </ol>
        ))}
    </div>
  );
}
