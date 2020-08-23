import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
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
        <ul className="nav-links">
          <li>
            <Link style={navStyle} to="/restaurantlogin">
              <Navbar.Text> Login as a Food Provider</Navbar.Text>
            </Link>
          </li>
          <li>
            <Link style={navStyle} to="/restaurantsignup">
              <Navbar.Text>Sign Up as a Food Provider</Navbar.Text>
            </Link>
          </li>
        </ul>
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
