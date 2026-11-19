import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { getUpcomingRaces, type Race } from "../../api/race";
import { getAllShows } from "../../api/show";
import { useLoad } from "../../hooks/useLoad";

const personStyle = { fontWeight: "bolder", fontSize: "1.2rem", letterSpacing: "0.15rem" } as const;

async function loadUpcomingRaces(): Promise<Race[] | undefined> {
  const shows = await getAllShows();
  // Without an active show there is nothing to announce.
  return shows.some((show) => show.active) ? getUpcomingRaces() : undefined;
}

export function UpcomingRaces() {
  const races = useLoad(loadUpcomingRaces, []);

  return (
    <div>
      <h2>Upcomming Races</h2>
      {races.data &&
        (races.data.length === 0 ? (
          <p>No Races yet</p>
        ) : (
          <Table>
            <TableBody>
              {races.data.map((race) => (
                <TableRow key={race.id}>
                  <TableCell>
                    <div style={personStyle}>{race.person1}</div>
                    <div>
                      {race.song1?.artist} - {race.song1?.name}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div style={personStyle}>{race.person2}</div>
                    <div>
                      {race.song2?.artist} - {race.song2?.name}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ))}
    </div>
  );
}
