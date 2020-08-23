import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Button, Image, } from "react-bootstrap";

function NavRestaurant() {
  const navStyle = {
    color: "white",
  };
  return (
    <Navbar className="color-nav" variant="dark">
      <Navbar.Brand href="/"><Image style={imgstyle} src="https://i.imgur.com/5HBGuCZ.png" /></Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Button href="/" variant="outline-light">
          Logout
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavRestaurant;

const imgstyle = {
  maxHeight: "80px",
  paddingLeft: "10%"
}