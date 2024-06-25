import { SyntheticEvent, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const target = ev.target as HTMLFormElement;
    console.log(target, {
      email,
      password,
    });
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={submitForm}>
      <TextField
        onChange={(ev) => {
          setEmail(ev.target.value);
        }}
        value={email}
        id="outlined-basic"
        label="Email"
        placeholder="Enter your email"
        variant="outlined"
      />
      <TextField
        onChange={(ev) => {
          setPassword(ev.target.value);
        }}
        value={password}
        type="password"
        label="Password"
        placeholder="Enter your password"
        variant="outlined"
      />
      <Button type="submit" variant="contained">Submit</Button>
    </form>
  );
};
