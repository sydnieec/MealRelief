import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";

class RestaurantSignup extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", address: "", phonenumber: "" };
  }
  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  handleAddressChange = (event) => {
    this.setState({ address: event.target.value });
  };
  handlePhoneNumberChange = (event) => {
    this.setState({ phonenumber: event.target.value });
  };
  handleSubmit = (event) => {
    alert(
      this.state.email +
        this.state.password +
        this.state.addres +
        this.state.phonenumber
    );
    event.preventDefault();
  };

  render() {
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
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                value={this.state.address}
                onChange={this.handleAddressChange}
                placeholder="1234 Main St"
              />
            </Form.Group>

            <Form.Group controlId="formGridPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                value={this.state.phonenumber}
                onChange={this.handlePhoneNumberChange}
                placeholder="000-000-0000"
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>{" "}
            </Form.Group>
            <Link to="/restaurantform">
              <Button variant="primary" type="submit">
                Submit
              </Button>{" "}
            </Link>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

export default RestaurantSignup;

const loginStyle = {
  paddingRight: "30%",
  paddingLeft: "30%",
};
