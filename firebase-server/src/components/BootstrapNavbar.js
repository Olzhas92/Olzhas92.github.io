import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavLink } from "react-bootstrap";
import SignIn from "./SignIn";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignOut from "./SignOut";
import Username from "./Username";
import UserIcon from "./UserIcon";

const BootstrapNavbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <Navbar collapseOnSelect expand="sm" bg="primary">
      <Navbar.Toggle aria-controls="myNavbar" />
      <Navbar.Collapse id="myNavbar">
        <Nav>
          <NavLink style={{ color: "white " }} as={Link} to="/">
            Home
          </NavLink>
          <NavLink style={{ color: "white " }} as={Link} to="/about">
            About
          </NavLink>
          <NavLink style={{ color: "white " }} as={Link} to="/product">
            Product
          </NavLink>
        </Nav>
      </Navbar.Collapse>

      {!user && <SignIn />}
      {user && (
        <>
          <Username username={user.displayName} />
          <UserIcon photoUrl={user.photoURL} />
        </>
      )}
      {user && <SignOut />}
    </Navbar>
  );
};

export default BootstrapNavbar;
