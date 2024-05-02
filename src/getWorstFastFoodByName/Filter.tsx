import { TextField } from "@mui/material";
import { FormEvent } from "react";

export default function Filter({
  onFilter,
}: {
  onFilter: (name: string) => void;
}) {
  function startFiltering(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    onFilter(formData.get("name") as string);
  }

  return (
    <form onSubmit={startFiltering}>
      <TextField label="Food name:" name="name"></TextField>
    </form>
  );
}
