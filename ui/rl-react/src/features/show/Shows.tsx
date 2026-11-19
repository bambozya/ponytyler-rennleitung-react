import { useRef, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { backupDownloadUrl, isDownloadPossible } from "../../api/backup";
import { getAllShows, updateShow, type Show } from "../../api/show";
import { useLoad } from "../../hooks/useLoad";
import { ButtonList } from "../../ui/ButtonList";
import { useSnackbar } from "../../ui/Snackbar";
import { formatDateTime, formatFileTimestamp } from "../../utils/formatDate";
import "./Shows.css";

function rowClass(show: Show) {
  if (show.finished) return "finished-show";
  if (show.active) return "active-show";
  return "upcoming-show";
}

export function Shows() {
  const navigate = useNavigate();
  const snackbar = useSnackbar();
  const uploadInput = useRef<HTMLInputElement>(null);
  const shows = useLoad(getAllShows, []);
  const downloadPossible = useLoad(isDownloadPossible, []);

  const update = async (show: Show) => {
    try {
      await updateShow(show);
      shows.reload();
    } catch (error) {
      snackbar.error("Error during toggling of Show Status", error);
    }
  };

  const toggleActive = (show: Show) => update({ ...show, active: !show.active });

  const toggleFinished = (show: Show) =>
    update({ ...show, finished: !show.finished, active: !show.finished ? false : show.active });

  const downloadDatabaseBackup = () => {
    const link = document.createElement("a");
    link.target = "_blank";
    link.href = backupDownloadUrl;
    link.download = `rl-backup_download_${formatFileTimestamp(new Date())}.db`;
    link.click();
    link.remove();
  };

  // Restoring a backup from the UI is not implemented yet (same as before); the files are only logged.
  const uploadDatabaseBackup = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      console.log("filesChanged:", event.target.files);
    }
  };

  return (
    <div className="shows">
      <h2>Shows</h2>

      <ButtonList>
        <Button variant="contained" component={Link} to="/show/create" startIcon={<Icon>add</Icon>}>
          Add Show
        </Button>
        <Button
          variant="contained"
          color="inherit"
          disabled={!downloadPossible.data}
          onClick={downloadDatabaseBackup}
          startIcon={<Icon>download</Icon>}
        >
          Download Database Backup
        </Button>
        <Button
          variant="contained"
          color="inherit"
          onClick={() => uploadInput.current?.click()}
          startIcon={<Icon>upload</Icon>}
        >
          Upload Database Backup
        </Button>
        <input ref={uploadInput} type="file" multiple hidden onChange={uploadDatabaseBackup} />
      </ButtonList>

      {shows.data && shows.data.length > 0 && (
        <>
          <h3>Aktive Shows</h3>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>
                  <Icon>calendar_month</Icon>
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {shows.data.map((show) => (
                <TableRow key={show.id} className={rowClass(show)}>
                  <TableCell>
                    {show.finished && <Icon>check</Icon>}
                    {show.active && <Icon>play_circle</Icon>}
                    {!show.active && !show.finished && <Icon>calendar_month</Icon>}
                  </TableCell>
                  <TableCell className="clickable" onClick={() => navigate(`/show/${show.id}`)}>
                    {formatDateTime(show.date)}
                  </TableCell>
                  <TableCell className="clickable" onClick={() => navigate(`/show/${show.id}`)}>
                    {show.name}
                  </TableCell>
                  <TableCell>
                    {show.active ? (
                      <IconButton aria-label="Stop Show" onClick={() => toggleActive(show)}>
                        <Icon>stop</Icon>
                      </IconButton>
                    ) : (
                      <IconButton aria-label="Start Show" onClick={() => toggleActive(show)}>
                        <Icon>play_circle</Icon>
                      </IconButton>
                    )}
                    &nbsp;
                    <IconButton aria-label="Add Race" component={Link} to={`/show/${show.id}/create-race`}>
                      <Icon>add_box</Icon>
                    </IconButton>
                    <IconButton aria-label="Edit Show" component={Link} to={`/show/${show.id}/edit`}>
                      <Icon>edit</Icon>
                    </IconButton>
                    {show.active && (
                      <IconButton
                        aria-label="Set Show to finished"
                        title="Set Show to finished"
                        onClick={() => toggleFinished(show)}
                      >
                        <Icon>done</Icon>
                      </IconButton>
                    )}
                    {show.finished && (
                      <IconButton aria-label="Re-Activate Show" onClick={() => toggleFinished(show)}>
                        <Icon>history</Icon>
                      </IconButton>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </div>
  );
}
