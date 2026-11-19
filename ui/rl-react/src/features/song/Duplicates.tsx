import { useState } from "react";
import { closest, distance } from "fastest-levenshtein";
import Chip from "@mui/material/Chip";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Slider from "@mui/material/Slider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { getSelectableSongs, songTitle, updateSong, type Song } from "../../api/song";
import { useLoad } from "../../hooks/useLoad";
import { useSnackbar } from "../../ui/Snackbar";
import { SongSyncOrigin } from "../../ui/SongSyncOrigin";

interface SongWithDuplicate extends Song {
  duplicate: Song;
  distance: number;
}

const MAX_DISTANCE_STORAGE_KEY = "pontyTyperLevenshteinDistanceMinimum";

/** Pairs each song with its most similar other song, if their titles differ by at most maxDistance edits. */
function findDuplicates(songs: Song[], maxDistance: number): SongWithDuplicate[] {
  const found: SongWithDuplicate[] = [];
  for (const song of songs) {
    const otherSongs = songs.filter((other) => other.id !== song.id);
    if (otherSongs.length === 0) continue;

    const title = songTitle(song);
    const closestTitle = closest(title, otherSongs.map(songTitle));
    const titleDistance = distance(title, closestTitle);
    // Skip the mirror image of a pair that is already listed.
    const alreadyListed = found.some((entry) => entry.duplicate.id === song.id);
    if (titleDistance > maxDistance || alreadyListed) continue;

    const duplicate = otherSongs.find((other) => songTitle(other) === closestTitle);
    if (duplicate) found.push({ ...song, distance: titleDistance, duplicate });
  }
  return found.sort((song1, song2) => song1.distance - song2.distance);
}

export function Duplicates() {
  const snackbar = useSnackbar();
  const [sliderValue, setSliderValue] = useState(
    () => Number(localStorage.getItem(MAX_DISTANCE_STORAGE_KEY)) || 6,
  );
  const [maxDistance, setMaxDistance] = useState(sliderValue);
  const duplicates = useLoad(
    async () => findDuplicates(await getSelectableSongs(), maxDistance),
    [maxDistance],
  );

  const commitMaxDistance = (value: number) => {
    localStorage.setItem(MAX_DISTANCE_STORAGE_KEY, String(value));
    setMaxDistance(value);
  };

  const deactivateDuplicate = async (song: SongWithDuplicate) => {
    try {
      await updateSong({ ...song.duplicate, selectable: false });
      await snackbar.success("Successfully deactivated Duplicate");
      duplicates.reload();
    } catch (error) {
      snackbar.error("Error during Update Of Song", error);
    }
  };

  return (
    <div>
      <h3>Find/Merge Duplicate Songs</h3>

      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", margin: 15, columnGap: 20 }}>
        <h4>
          Accuracy
          <br />
          <span style={{ color: "#333333", fontStyle: "italic", fontSize: "0.8em" }}>
            (Levenshtein Distance Minimum)
          </span>
        </h4>
        <Slider
          sx={{ width: 200 }}
          min={1}
          max={30}
          step={1}
          aria-label="Levenshtein distance"
          value={sliderValue}
          onChange={(_event, value) => setSliderValue(value as number)}
          onChangeCommitted={(_event, value) => commitMaxDistance(value as number)}
        />
        <Chip label={sliderValue} />
      </div>

      {duplicates.data && (
        <Paper elevation={8}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Distance</TableCell>
                <TableCell>Original</TableCell>
                <TableCell>Duplicate</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {duplicates.data.map((song) => (
                <TableRow key={song.id}>
                  <TableCell>{song.distance}</TableCell>
                  <TableCell>
                    <SongSyncOrigin origin={song.origin} /> {songTitle(song)}
                  </TableCell>
                  <TableCell>
                    <SongSyncOrigin origin={song.duplicate.origin} /> {songTitle(song.duplicate)}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="Deactivate Duplicate"
                      title="Deactivate Duplicate"
                      onClick={() => deactivateDuplicate(song)}
                    >
                      <Icon>merge</Icon>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </div>
  );
}
