import { useRef, useState, type ChangeEvent } from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { createSong, getSongs, Origin, songTitle, updateSong, type Song } from "../../api/song";
import { ButtonList } from "../../ui/ButtonList";
import { useSnackbar } from "../../ui/Snackbar";

/** File names look like "Artist - Title [PTHQ].mp4". */
function songFromFileName(fileName: string): Song {
  const artist = fileName.substring(0, fileName.indexOf("-")).trim();
  const name = fileName
    .substring(fileName.indexOf("-") + 1, fileName.lastIndexOf("."))
    .replace("[PTHQ]", "")
    .replace("[PT]", "")
    .replace("&amp;", "&")
    .trim();
  return { artist, name, deleted: false, selectable: true, origin: Origin.FROM_FILE_SYNC };
}

export function SongSync() {
  const snackbar = useSnackbar();
  const uploadInput = useRef<HTMLInputElement>(null);
  const [filesToSync, setFilesToSync] = useState<string[]>([]);
  const [songsNotFoundInFiles, setSongsNotFoundInFiles] = useState<Song[]>([]);
  const [processingFiles, setProcessingFiles] = useState(0);
  const [nothingFound, setNothingFound] = useState(false);

  const filesChanged = async (event: ChangeEvent<HTMLInputElement>) => {
    setNothingFound(false);
    const fileNames = Array.from(event.target.files ?? [], (file) => file.name);
    event.target.value = ""; // allow choosing the same files again
    if (fileNames.length === 0) return;

    let songs: Song[];
    try {
      songs = await getSongs();
    } catch (error) {
      snackbar.error("Error during loading of Songs", error);
      return;
    }

    const newFiles = fileNames.filter(
      (fileName) => !songs.some((song) => fileName.startsWith(songTitle(song))),
    );
    const missingSongs = songs
      .filter((song) => song.selectable)
      .filter((song) => !fileNames.some((fileName) => fileName.startsWith(songTitle(song))));

    setFilesToSync(newFiles);
    setSongsNotFoundInFiles(missingSongs);
    setNothingFound(newFiles.length === 0 && missingSongs.length === 0);
  };

  const oneDone = () => setProcessingFiles((current) => current - 1);

  const markAllMissingSongsBlocked = () => {
    const songs = songsNotFoundInFiles;
    setProcessingFiles(songs.length);
    setSongsNotFoundInFiles([]);
    for (const song of songs) {
      updateSong({ ...song, selectable: false })
        .catch((error) => console.error(`Song "${songTitle(song)}" update failed:`, error))
        .finally(oneDone);
    }
  };

  const createAllNewSongs = () => {
    const fileNames = filesToSync;
    setProcessingFiles(fileNames.length);
    setFilesToSync([]);
    for (const fileName of fileNames) {
      createSong(songFromFileName(fileName))
        .catch((error) => console.error(`Song for file "${fileName}" could not be created:`, error))
        .finally(oneDone);
    }
  };

  const syncSingleFile = async (fileName: string) => {
    setProcessingFiles(1);
    try {
      await createSong(songFromFileName(fileName));
      setFilesToSync((current) => current.filter((other) => other !== fileName));
    } catch (error) {
      snackbar.error("Error during Creation Of Song", error);
    } finally {
      oneDone();
    }
  };

  return (
    <div>
      <h3>Songs File Sync</h3>
      <Button variant="contained" onClick={() => uploadInput.current?.click()}>
        Choose Files from DJ Notebook
      </Button>
      <input ref={uploadInput} type="file" multiple hidden onChange={filesChanged} />

      {nothingFound && <p>Nothing to Sync</p>}

      {processingFiles > 0 && (
        <div>
          Processing {processingFiles} Files/Songs.
          <br />
          <CircularProgress />
        </div>
      )}

      {(filesToSync.length > 0 || songsNotFoundInFiles.length > 0) && (
        <>
          <ButtonList>
            <Button
              variant="contained"
              onClick={createAllNewSongs}
              disabled={filesToSync.length === 0}
              startIcon={<Icon>cloud_sync</Icon>}
            >
              Sync all new Files
            </Button>
            <Button
              variant="contained"
              onClick={markAllMissingSongsBlocked}
              disabled={songsNotFoundInFiles.length === 0}
              startIcon={<Icon>block</Icon>}
            >
              Block all Songs, missing from File List
            </Button>
          </ButtonList>

          <List>
            {filesToSync.length > 0 && <ListSubheader>New Songs/Files</ListSubheader>}
            {filesToSync.map((fileName) => (
              <ListItemButton key={fileName} onClick={() => syncSingleFile(fileName)}>
                <ListItemIcon>
                  <Icon>note_add</Icon>
                </ListItemIcon>
                <ListItemText primary={fileName} />
              </ListItemButton>
            ))}
            <Divider />
            {songsNotFoundInFiles.length > 0 && (
              <ListSubheader>Songs that are not in the File List but selectable</ListSubheader>
            )}
            {songsNotFoundInFiles.map((song) => (
              <ListItem key={song.id}>
                <ListItemIcon>
                  <Icon>audio_file</Icon>
                </ListItemIcon>
                <ListItemText primary={songTitle(song)} />
              </ListItem>
            ))}
          </List>
        </>
      )}
    </div>
  );
}
