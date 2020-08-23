import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import NavRestaurant from "../NavRestaurant";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../App.css";
import Claims from "../components/claims";
// import axios from "axios";

class RestaurantDashboard extends Component {
  state = {
    claimslist: [],
  };

  componentDidMount() {
    // supposed to only get claim codes for one provider but this retrieves all for now
    fetch('http://127.0.0.1:8000/claimcodes/', {
      method: 'GET',
    }).then((response) => response.json())
    .then(list => {
      this.setState({ claimslist: list });
    });
  }

  //deletes claim from claim list
  handleDelete = (claimid) => {
    const claimslist = this.state.claimslist.filter((c) => c.id !== claimid);
    this.setState({ claimslist });
    fetch('http://127.0.0.1:8000/claimcodes/'+claimid+'/', {
      method: 'DELETE',
    }).then((response) => console.log(response));
  };

  handleClaims = (claimid) => {
    const claimslist = this.state.claimslist.filter((c) => c.id !== claimid);
    this.setState({ claimslist });
    fetch('http://127.0.0.1:8000/claimcodes/'+claimid+'/', {
      method: 'DELETE',
    }).then((response) => console.log(response));
  };

  render() {
    return (
      <React.Fragment>
        <NavRestaurant />
        <h1 className="title "> Your Dashboard </h1>
        <Card style={dashboardStyle}>
          <Card.Header as="h5">Current Listing</Card.Header>
          <Card.Body>
            <Card.Title>Restaurant Name</Card.Title>
            <Card.Text>
              12321 Main Street, Toronto, Ontario 000-000-0000
            </Card.Text>
            <Card.Text>description of food item</Card.Text>
            <Card.Text>servings available</Card.Text>

            <Button style={btn}>Edit</Button>
          </Card.Body>
        </Card>
        <h1 className="title"> Claim Codes</h1>
        <div style={claimStyle} className="center">
          <Claims
            claimslist={this.state.claimslist}
            onDelete={this.handleDelete}
            onClaim={this.handleClaims}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default RestaurantDashboard;

const dashboardStyle = {
  marginRight: "20%",
  marginLeft: "20%",
  marginTop: "2%",
};

const claimStyle = {
  marginRight: "30%",
  marginLeft: "30%",
  marginTop: "2%",
};

const btn = {
  backgroundColor: "#ff8364",
  borderColor: "#edf7fa",
  color: "#edf7fa",
  marginTop: "5%",
};
