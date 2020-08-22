import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
function Nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <h3>Logo & Website Name </h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/user">
          <li> User</li>
        </Link>
        <Link style={navStyle} to="/restaurantlogin">
          <li> Restaurant Login</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
