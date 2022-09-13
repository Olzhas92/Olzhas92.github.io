import React, { useState } from "react";
import Chat from "./components/Chat";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [user] = useAuthState(auth);
  // const [logout, setLogout] = useState(false);
  return (
    <React.Fragment>
      {user ? <Chat /> : <SignIn />}
      {user ? <SignOut /> : ""}
    </React.Fragment>
  );
};

export default App;
