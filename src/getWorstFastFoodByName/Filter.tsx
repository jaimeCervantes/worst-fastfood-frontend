import { Button, TextField } from "@mui/material";
import { FormEvent } from "react";

export default function Filter({
  onFilter,
  name,
  label,
}: {
  onFilter: (name: string) => void;
  name: string;
  label: string;
}) {
  function startFiltering(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    onFilter(formData.get(name) as string);
  }

  return (
    <form
      onSubmit={startFiltering}
      style={{ display: "flex", gap: "1rem", alignItems: "center" }}
    >
      <TextField label={label} name={name}></TextField>
      <Button type="submit" variant="contained">
        Filter
      </Button>
    </form>
  );
}
