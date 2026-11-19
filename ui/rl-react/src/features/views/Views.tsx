import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export function Views() {
  return (
    <div>
      <h2>Views</h2>
      <List>
        <ListItem>
          <Button variant="outlined" component={Link} to="/views/next-race">
            Next Race
          </Button>
        </ListItem>
        <ListItem>
          <Button variant="outlined" component={Link} to="/views/upcoming-races">
            Upcoming Races
          </Button>
        </ListItem>
      </List>
    </div>
  );
}
