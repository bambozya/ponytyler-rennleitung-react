import { getUpcomingRace } from "../../api/race";
import { useLoad } from "../../hooks/useLoad";

export function NextRace() {
  const race = useLoad(getUpcomingRace, []);

  return (
    <div>
      <h2>Upcomming Race</h2>
      {race.data && (
        <div
          style={{ margin: 10, padding: 20, backgroundColor: "black", color: "white", letterSpacing: "0.15em" }}
        >
          <strong>{race.data.person1}</strong>, {race.data.song1?.artist} - {race.data.song1?.name}
          <span style={{ padding: "0px 15px" }}>vs.</span>
          <strong>{race.data.person2}</strong>, {race.data.song2?.artist} - {race.data.song2?.name}
        </div>
      )}
    </div>
  );
}
