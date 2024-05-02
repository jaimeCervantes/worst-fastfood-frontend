import WorstFastFoodByName from "./getWorstFastFoodByName/WorstFastFoodByName";
import Login from "./login/Login";
import { useState } from "react";
import { request } from "./fns/requests";

function App() {
  const [state, setState] = useState({ isAuthenticated: false });
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
    }
  }

  return (
    <>
      <h1>Las peores FastFood que no debes comer</h1>
      {!state.isAuthenticated && <Login onLogin={onLogin} />}
      {state.isAuthenticated && <WorstFastFoodByName />}
    </>
  );
}

export default App;
