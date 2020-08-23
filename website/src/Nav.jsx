import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Button, Image, } from "react-bootstrap";


function Nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <Navbar className="color-nav" variant="dark">
      <Navbar.Brand href="/"><Image style={imgstyle} src="https://i.imgur.com/5HBGuCZ.png" /></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Button
          variant="outline-light"
          href="/restaurantlogin"
          className="mr-3"
        >
          Login as a Food Provider
        </Button>
        <Button variant="outline-light" href="/restaurantsignup">
          Sign Up as a Food Provider
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;

const imgstyle = {
  maxHeight: "80px",
  paddingTop: "5%",
  paddingLeft: "10%"
}