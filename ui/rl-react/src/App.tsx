import { useEffect, useState, type MouseEvent } from "react";
import { Link, Navigate, NavLink, Route, Routes, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { getAllShows, type Show } from "./api/show";
import { RaceTrack } from "./features/race-track/RaceTrack";
import { CreateRace } from "./features/show/CreateRace";
import { CreateShow } from "./features/show/CreateShow";
import { DirectorDashboard } from "./features/show/DirectorDashboard";
import { DirectorDashboardRedirect } from "./features/show/DirectorDashboardRedirect";
import { EditShow } from "./features/show/EditShow";
import { ChooseShifts } from "./features/show/shifts/ChooseShifts";
import { ChooseUsers } from "./features/show/shifts/ChooseUsers";
import { ShiftsDashboard } from "./features/show/shifts/ShiftsDashboard";
import { Wizzard } from "./features/show/shifts/Wizzard";
import { ShowDashboard } from "./features/show/ShowDashboard";
import { Shows } from "./features/show/Shows";
import { UpdateRace } from "./features/show/UpdateRace";
import { CreateSong } from "./features/song/CreateSong";
import { Duplicates } from "./features/song/Duplicates";
import { EditSong } from "./features/song/EditSong";
import { Songs } from "./features/song/Songs";
import { SongSync } from "./features/song/SongSync";
import { SongStats } from "./features/stats/SongStats";
import { Stats } from "./features/stats/Stats";
import { WhichBikeWonMost } from "./features/stats/WhichBikeWonMost";
import { CreateUser } from "./features/users/CreateUser";
import { DeleteUser } from "./features/users/DeleteUser";
import { EditUser } from "./features/users/EditUser";
import { UsersList } from "./features/users/UsersList";
import { NextRace } from "./features/views/NextRace";
import { UpcomingRaces } from "./features/views/UpcomingRaces";
import { Views } from "./features/views/Views";

const menuEntries = [
  { to: "/show", label: "Shows" },
  { to: "/song", label: "Songs" },
  { to: "/views", label: "Views" },
  { to: "/users", label: "Users" },
  { to: "/stats", label: "Statistiken" },
];

export function App() {
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
  const [currentShow, setCurrentShow] = useState<Show | undefined>(undefined);

  const { pathname } = useLocation();

  useEffect(() => {
    console.info("Welcome to RL Version 1.0.0");
  }, []);

  // Reloaded on every navigation, so a show that was just created, started or stopped shows up right away.
  useEffect(() => {
    let cancelled = false;
    getAllShows().then(
      // The list is ordered active-first, so the first entry is the current show.
      (shows) => {
        if (!cancelled) setCurrentShow(shows.some((show) => show.active) ? shows[0] : undefined);
      },
      (error) => console.error(error),
    );
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  const closeMenu = () => setMenuAnchor(null);

  return (
    <>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="Open menu"
            onClick={(event: MouseEvent<HTMLElement>) => setMenuAnchor(event.currentTarget)}
          >
            <Icon>menu</Icon>
          </IconButton>
          <Menu anchorEl={menuAnchor} open={menuAnchor !== null} onClose={closeMenu}>
            {menuEntries.map((entry) => (
              <MenuItem key={entry.to} component={NavLink} to={entry.to} onClick={closeMenu}>
                {entry.label}
              </MenuItem>
            ))}
          </Menu>
          <Typography variant="h6" component="h1">
            Pony Tyler Rennleitung
          </Typography>
          <span className="toolbar-spacer" />
          {currentShow && (
            <IconButton aria-label="Add Race" component={Link} to={`/show/${currentShow.id}/create-race`}>
              <Icon>add_box</Icon>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <div className="main-stage">
        <Routes>
          <Route path="/" element={<Navigate to="/show" replace />} />

          <Route path="/show" element={<Shows />} />
          <Route path="/show/director-dashboard-redirect" element={<DirectorDashboardRedirect />} />
          <Route path="/show/create" element={<CreateShow />} />
          <Route path="/show/:showId" element={<ShowDashboard />} />
          <Route path="/show/:showId/edit" element={<EditShow />} />
          <Route path="/show/:showId/create-race" element={<CreateRace />} />
          <Route path="/show/:showId/race/:raceId" element={<UpdateRace />} />
          <Route path="/show/:showId/director-dashboard" element={<DirectorDashboard />} />
          <Route path="/show/:showId/shifts" element={<ShiftsDashboard />} />
          <Route path="/show/:showId/shifts/wizzard" element={<Wizzard />}>
            <Route index element={<Navigate to="users" replace />} />
            <Route path="users" element={<ChooseUsers />} />
            <Route path="shifts" element={<ChooseShifts />} />
            <Route path="roles" element={<ChooseUsers />} />
          </Route>

          <Route path="/song" element={<Songs />} />
          <Route path="/song/duplicates" element={<Duplicates />} />
          <Route path="/song/create" element={<CreateSong />} />
          <Route path="/song/sync" element={<SongSync />} />
          <Route path="/song/:songId" element={<EditSong />} />

          <Route path="/views" element={<Views />} />
          <Route path="/views/next-race" element={<NextRace />} />
          <Route path="/views/upcoming-races" element={<UpcomingRaces />} />

          <Route path="/users" element={<UsersList />} />
          <Route path="/users/create" element={<CreateUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/users/delete/:id" element={<DeleteUser />} />

          <Route path="/race-track" element={<RaceTrack />} />

          <Route path="/stats" element={<Stats />}>
            <Route path="songs/:songStatType" element={<SongStats />} />
            <Route path="races/which-bike-won-most" element={<WhichBikeWonMost />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
