import { Link, Outlet } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const statLinks = [
  { to: "songs/most-played-songs", label: "Most Played Songs" },
  { to: "songs/most-wished-songs", label: "Most Wished Songs" },
  { to: "songs/never-wished-songs", label: "Never Wished Songs" },
  { to: "races/which-bike-won-most", label: "Which Bike Won Most" },
];

export function Stats() {
  return (
    <div>
      <h2>Stats</h2>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: 10 }}>
        <div style={{ width: 260, flexShrink: 0 }}>
          <List>
            {statLinks.map((link) => (
              <ListItemButton key={link.to} component={Link} to={link.to}>
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
        </div>
        <div style={{ flexGrow: 3 }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
