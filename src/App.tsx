import WorstFastFoodByName from "./getWorstFastFoodByName/WorstFastFoodByName";
import Login from "./login/Login";
import { useState } from "react";
import { request } from "./fns/requests";

function App() {
  const [state, setState] = useState({
    error: "",
    isAuthenticated: sessionStorage.getItem("jwt") ? true : false,
  });
  async function onLogin(body: { [k: string]: FormDataEntryValue }) {
    try {
      const result = await request({
        url: "/login",
        method: "POST",
        body,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      if (result?.token) {
        sessionStorage.setItem("jwt", result.token);
        setState((state) => ({ ...state, isAuthenticated: true }));
      }
    } catch (err) {
      console.log(err);
      if (err?.response?.status === 401) {
        setState((prev) => ({
          ...prev,
          error: "Invalid username or password",
        }));
        return;
      }

      setState((prev) => ({
        ...prev,
        error: err?.message,
      }));
    }
  }

  return (
    <>
      <h1>Wortst Fast Food to eat.</h1>
      {!state.isAuthenticated && (
        <Login onLogin={onLogin} error={state.error} />
      )}
      {state.isAuthenticated && <WorstFastFoodByName />}
    </>
  );
}

export default App;
