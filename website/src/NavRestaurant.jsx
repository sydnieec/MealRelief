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
  );
}

export default NavRestaurant;
