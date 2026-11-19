import { useParams } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { mostPlayedSongs, mostWishedSongs, neverWishedSongs, type StatSong } from "../../api/statistics";
import { useLoad } from "../../hooks/useLoad";

const loaders: Record<string, () => Promise<StatSong[]>> = {
  "most-played-songs": mostPlayedSongs,
  "most-wished-songs": mostWishedSongs,
  "never-wished-songs": neverWishedSongs,
};

export function SongStats() {
  const { songStatType = "" } = useParams();
  const songs = useLoad(async () => {
    const loader = loaders[songStatType];
    return loader ? { type: songStatType, list: await loader() } : undefined;
  }, [songStatType]);

  // While switching between statistics, don't show the previous one under the new heading.
  const list = songs.data?.type === songStatType ? songs.data.list : undefined;

  return (
    <div>
      <h2>Song Statistics: {songStatType}</h2>
      {list && (
        <div>
          <p>Found {list.length}</p>
          <Paper elevation={8}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Artist</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Count</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {list.map((song, index) => (
                  <TableRow key={index}>
                    <TableCell>{song.artist}</TableCell>
                    <TableCell>{song.name}</TableCell>
                    <TableCell>{song.totalCount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      )}
    </div>
  );
}
