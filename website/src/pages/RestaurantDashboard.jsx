import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import NavRestaurant from "../NavRestaurant";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../App.css";
import Claims from "../components/claims";
// import axios from "axios";

// function RestaurantDashboard() {
//   const formStyle = {
//     paddingRight: "20%",
//     paddingLeft: "20%",
//   };
//   return (
// <React.Fragment>
//   <NavRestaurant />
//   <div style={formStyle}>
//     <h1> Restaurant Dashboard</h1>
//   </div>
// </React.Fragment>
//   );
// }

// export default RestaurantDashboard;

class RestaurantDashboard extends Component {
  state = {
    claimslist: [
      { id: 1, value: "Ssdf" },
      { id: 2, value: "SDf" },
      { id: 3, value: "SDFSDF" },
      { id: 4, value: "Asdasd" },
    ],
  };

  //deletes claim from claim list
  handleDelete = (claimid) => {
    const claimslist = this.state.claimslist.filter((c) => c.id !== claimid);
    this.setState({ claimslist });
  };

  render() {
    return (
      <React.Fragment>
        <NavRestaurant />
        <h1 className="title "> Restaurant Dashboard</h1>
        <Card style={dashboardStyle}>
          <Card.Header as="h5">Current Listing</Card.Header>
          <Card.Body>
            <Card.Title>Restaurant Name</Card.Title>
            <Card.Text>
              12321 Main Street, Toronto, Ontario 000-000-0000
            </Card.Text>
            <Card.Text>description of food item</Card.Text>
            <Card.Text>servings available</Card.Text>

            <Button variant="primary">Edit</Button>
          </Card.Body>
        </Card>
        <h1 className="title"> Claim Codes</h1>
        <div style={claimStyle} className="center">
          <Claims
            claimslist={this.state.claimslist}
            onDelete={this.handleDelete}
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
