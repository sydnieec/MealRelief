import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import Nav from "../Nav";

function RestaurantLogin() {
  const loginStyle = {
    paddingRight: "30%",
    paddingLeft: "30%",
  };
  return (
    <React.Fragment>
      <Nav />
      <div style={loginStyle}>
        <h1> Restaurant Login </h1>
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
