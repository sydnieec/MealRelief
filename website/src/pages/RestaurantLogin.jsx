import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import Navbar from "react-bootstrap/Navbar";

class RestaurantLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { loginemail: "", loginpassword: "" };
  }
  handleLoginEmailChange = (event) => {
    this.setState({ loginemail: event.target.value });
  };
  handleLoginPasswordChange = (event) => {
    this.setState({ loginpassword: event.target.value });
  };
  handleSubmit = (event) => {
    alert(this.state.loginemail + this.state.loginpassword);
    event.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <Nav />
        <div style={loginStyle}>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "5%",
            }}
          >
            {" "}
            Login as a Food Provider{" "}
          </h1>
          <Form style={formStyle} onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={this.state.loginemail}
                onChange={this.handleLoginEmailChange}
                type="email"
                required
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={this.state.loginpassword}
                onChange={this.handleLoginPasswordChange}
                // type="password"
                required
                placeholder="Password"
              />
            </Form.Group>
            <Button bsStyle="" style={btn} bsClass="btn" type="submit">
              Submit
            </Button>{" "}
            <Link to="/restaurantform">
              <Button bsStyle="" style={btn} bsClass="btn" type="submit">
                Login
              </Button>
            </Link>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

export default RestaurantLogin;

const loginStyle = {
  paddingTop: "5%",
  paddingRight: "30%",
  paddingLeft: "30%",
  paddingBottom: "10%",
};

const formStyle = {
  paddingTop: "15%",
  backgroundColor: "#ff8364",
  paddingRight: "25%",
  paddingLeft: "25%",
  paddingBottom: "20%",
  borderRadius: "21px",
  color: "white",
};

const btn = {
  backgroundColor: "#ffb677",
  borderColor: "#edf7fa",
  color: "#edf7fa",
};
