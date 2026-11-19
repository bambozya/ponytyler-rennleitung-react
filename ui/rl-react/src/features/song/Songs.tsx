import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import { getSongs, updateSong, type Song } from "../../api/song";
import { useLoad } from "../../hooks/useLoad";
import { ButtonList } from "../../ui/ButtonList";
import { useSnackbar } from "../../ui/Snackbar";
import { SongSyncOrigin } from "../../ui/SongSyncOrigin";
import "./Songs.css";

export function Songs() {
  const snackbar = useSnackbar();
  const songs = useLoad(getSongs, []);
  const [filter, setFilter] = useState("");

  const filteredSongs = useMemo(() => {
    const search = filter.toLowerCase();
    return (songs.data ?? []).filter(
      (song) => song.artist.toLowerCase().includes(search) || song.name.toLowerCase().includes(search),
    );
  }, [songs.data, filter]);

  const update = async (song: Song) => {
    try {
      await updateSong(song);
      songs.reload();
    } catch (error) {
      snackbar.error("Error during Update Of Song", error);
    }
  };

  return (
    <div className="songs">
      <h1>Songs</h1>

      <div className="songs-toolbar">
        <TextField
          label="Filter"
          placeholder="i.e. Toxic or Total Eclipse of the Heart..."
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
        <ButtonList>
          <Button variant="contained" component={Link} to="/song/create" startIcon={<Icon>add</Icon>}>
            Add Song
          </Button>
          <Button
            variant="contained"
            color="inherit"
            component={Link}
            to="/song/sync"
            startIcon={<Icon>sync</Icon>}
          >
            Sync Songs
          </Button>
          <Button
            variant="contained"
            color="inherit"
            component={Link}
            to="/song/duplicates"
            startIcon={<Icon>difference</Icon>}
          >
            Find Duplicates
          </Button>
        </ButtonList>
      </div>

      {songs.data && (
        <Paper elevation={8}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Icon>check_box</Icon>
                </TableCell>
                <TableCell>Artist</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Origin</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredSongs.map((song) => (
                <TableRow key={song.id} className={song.selectable ? undefined : "song-blocked"}>
                  <TableCell>
                    <Icon>{song.selectable ? "check_box" : "block"}</Icon>
                  </TableCell>
                  <TableCell>{song.artist}</TableCell>
                  <TableCell>{song.name}</TableCell>
                  <TableCell>
                    <SongSyncOrigin origin={song.origin} />
                  </TableCell>
                  <TableCell>
                    <IconButton aria-label="Edit Song" component={Link} to={`/song/${song.id}`}>
                      <Icon>edit</Icon>
                    </IconButton>
                    <IconButton aria-label="Delete Song" onClick={() => update({ ...song, deleted: true })}>
                      <Icon>delete</Icon>
                    </IconButton>
                    {song.selectable ? (
                      <IconButton aria-label="Block Song" onClick={() => update({ ...song, selectable: false })}>
                        <Icon>block</Icon>
                      </IconButton>
                    ) : (
                      <IconButton aria-label="Unblock Song" onClick={() => update({ ...song, selectable: true })}>
                        <Icon>check_box</Icon>
                      </IconButton>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}

      <ButtonList>
        <Button variant="contained" component={Link} to="/song/create">
          Add Song
        </Button>
      </ButtonList>
    </div>
  );
}
