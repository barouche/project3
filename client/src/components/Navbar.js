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
      {props.user && <div>Welcome {props.user.username}</div>}
      {props.user ? (
        <>
          <div>
            <Link to="/home">Learners</Link>
          </div>
          <div>
            <Link to="/" onClick={() => handleLogout(props)}>
              Logout
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="LoginSignup">
            <div>
              <Link to="/signup">Signup</Link>
            </div>
            <div>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
