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
import { getUsers } from "../../api/user";
import { useLoad } from "../../hooks/useLoad";
import { ButtonList } from "../../ui/ButtonList";

export function UsersList() {
  const users = useLoad(getUsers, []);

  return (
    <div>
      <h2>Users</h2>

      <ButtonList>
        <Button variant="contained" component={Link} to="/users/create">
          Add User
        </Button>
      </ButtonList>

      {users.data && (
        <Paper elevation={8}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.data.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>
                    <IconButton aria-label="Edit User" component={Link} to={`/users/edit/${user.id}`}>
                      <Icon>edit</Icon>
                    </IconButton>
                    <IconButton aria-label="Delete User" component={Link} to={`/users/delete/${user.id}`}>
                      <Icon>delete</Icon>
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
