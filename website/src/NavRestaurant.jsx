import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function NavRestaurant() {
  const navStyle = {
    color: "white",
  };
  return (
    <Navbar className="color-nav" variant="dark">
      <Navbar.Brand href="/">Logo</Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Button href="/" variant="outline-light">
          Logout
        </Button>
      </Navbar.Collapse>
    </Navbar>
    // <nav>
    //   <Link style={navStyle} to="/">
    //     <h3>Logo & Website Name </h3>
    //   </Link>
    //   <ul className="nav-links">
    //     {/* <Link style={navStyle} to="/user">
    //       <li> User</li>
    //     </Link> */}
    // <Link style={navStyle} to="/restaurantlogin">
    //   <li> Restaurant Login</li>
    // </Link>
    //   </ul>
    // </nav>
  );
}

export default NavRestaurant;
