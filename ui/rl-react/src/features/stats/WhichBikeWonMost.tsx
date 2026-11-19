import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { whichBikeWonMost } from "../../api/statistics";
import { useLoad } from "../../hooks/useLoad";

// Labels carried over unchanged from the Angular app.
const bikeWonLabels: Record<number, string> = {
  0: "Not Raced",
  1: "White Bike Won",
  2: "Black Bike Won",
  3: "Both Songs Played",
};

export function WhichBikeWonMost() {
  const stats = useLoad(whichBikeWonMost, []);

  return (
    <div>
      <h2>Which Bike Won Most</h2>
      {stats.data && (
        <Paper elevation={8}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Bike</TableCell>
                <TableCell>Count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stats.data.map((stat) => (
                <TableRow key={stat.bikeWon}>
                  <TableCell>{bikeWonLabels[stat.bikeWon] ?? ""}</TableCell>
                  <TableCell>{stat.timesWon}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </div>
  );
}
