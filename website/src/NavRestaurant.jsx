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
    <Navbar bg="primary" variant="dark">
      <Link style={navStyle} to="/">
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Button href="/">
            Logout
            {/* Signed in as: <a href="#login">Mark Otto</a> */}
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
