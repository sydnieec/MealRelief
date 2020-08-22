import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
function RestaurantSignup() {
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
        <h1> Sign up for Food Providers </h1>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control placeholder="000-000-0000" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </React.Fragment>
  );
}

export default RestaurantSignup;
