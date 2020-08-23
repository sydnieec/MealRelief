import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function Nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <Navbar className="color-nav" variant="dark">
      <Link style={navStyle} to="/">
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Button variant="outline-light" href="/restaurantlogin" className="mr-3">
          Login as a Food Provider
        </Button>
        <Button variant="outline-light" href="/restaurantsignup">
          Sign Up as a Food Provider
        </Button>
        {/* <Link style={navStyle} to="/restaurantlogin">
          <Navbar.Text> Login</Navbar.Text>
        </Link>
        <Link style={navStyle} to="/restaurantsignup">
          <Navbar.Text>Signup</Navbar.Text>
        </Link> */}
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

export default Nav;
