import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import Navbar from "react-bootstrap/Navbar";

function RestaurantLogin() {
  const loginStyle = {
    paddingRight: "30%",
    paddingLeft: "30%",
  };
  return (
    <React.Fragment>
      <Nav />
      {/* <Navbar bg="primary" variant="dark">
        <Link to="/">
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
      </Navbar>{" "} */}
      <div style={loginStyle}>
        <h1> Login as a Food Provider </h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Link to="/restaurantform">
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Link>
        </Form>
      </div>
    </React.Fragment>
  );
}

export default RestaurantLogin;
