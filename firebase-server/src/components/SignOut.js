import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const SignOut = () => {
  const logout = () => {
    signOut(auth);
  };
  return (
    <button className="btn btn-danger" onClick={logout}>
      Sign out
    </button>
  );
};

export default SignOut;
