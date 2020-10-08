import React from "react";
import { Link } from "react-router-dom";
//import { Navbar as Nav } from "react-bootstrap";
import { logout } from "../services/auth";
import "./Navbar.css";
import Logo from "./logo.png";

const handleLogout = (props) => {
  logout().then(() => {
    props.setUser(null);
  });
};

export default function Navbar(props) {
  return (
    <nav className="nav">
      <img src={Logo}></img>
      {props.user && (
        <div className="userWelcome">Welcome {props.user.username}</div>
      )}
      {props.user ? (
        <>
          <div className="loggedinElements">
            <div className="navElements">
              <Link to="/home">Learners</Link>
            </div>
            <div className="navElements">
              <Link to="/" onClick={() => handleLogout(props)}>
                Logout
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="LoginSignup">
            <div className="navElements">
              <Link to="/signup">Signup</Link>
            </div>
            <div className="navElements">
              <Link to="/login">Login</Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
