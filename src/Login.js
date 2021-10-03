import React from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionType } from "./reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionType.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://2.bp.blogspot.com/-2TZJ3M9sSx4/Vs7gZnFNwgI/AAAAAAAABUM/v3R88LMR0Zc/s1600/login.png"
          alt=""
        />
        <h1>Sign in to ndeewo</h1>
        <p>slack-imitation.ndeewo.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
