import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { createUser } from "../../api/user";
import { useSnackbar } from "../../ui/Snackbar";

export function CreateUser() {
  const navigate = useNavigate();
  const snackbar = useSnackbar();
  const [name, setName] = useState("");

  const save = async () => {
    try {
      await createUser({ name });
      navigate("/users");
    } catch (error) {
      snackbar.error("Error during Creation Of User", error);
    }
  };

  return (
    <div>
      <h2>Create New User</h2>
      <div className="form-row">
        <TextField
          label="Username"
          placeholder="i.e. Dustin..."
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <Button variant="contained" onClick={save}>
        Speichern
      </Button>
    </div>
  );
}
