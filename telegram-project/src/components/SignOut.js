import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const SignOut = () => {
  const logout = () => {
    signOut(auth);
  };
  return <button onClick={logout}>Sign Out</button>;
};

export default SignOut;
