import React from "react";
import Chat from "./components/Chat";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <React.Fragment>
      {user ? <Chat /> : <SignIn />}
      {user ? <SignOut /> : ""}
    </React.Fragment>
  );
};

export default App;
