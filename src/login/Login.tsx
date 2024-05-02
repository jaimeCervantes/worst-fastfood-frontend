import type { FormEvent } from "react";
import { Button, TextField } from "@mui/material";

export default function Login({ onLogin }) {
  async function authenticate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const body = Object.fromEntries(formData);

    onLogin(body);
  }

  return (
    <form onSubmit={authenticate}>
      <TextField type="text" label="Username" name="username" />
      <TextField type="password" label="Password" name="password" />
      <Button type="submit" variant="contained">
        Login
      </Button>
    </form>
  );
}
