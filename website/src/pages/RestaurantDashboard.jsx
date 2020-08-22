import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import NavRestaurant from "../NavRestaurant";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
  state = {};

  render() {
    return (
      <React.Fragment>
        <NavRestaurant />
        <h1> Restaurant Dashboard</h1>
        <Card style={dashboardStyle}>
          <Card.Header as="h5">Current Listing</Card.Header>
          <Card.Body>
            <Card.Title>Restaurant Name</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Edit</Button>
          </Card.Body>
        </Card>
        <h2> Current Listing</h2>

        <h4> Restaurant Name</h4>
        <h5> Phone Number</h5>
        <h5>Address </h5>
        <h5> fskldfjslkfjlskfjlskfjslkdjfs</h5>
        <h5> servings available</h5>
      </React.Fragment>
    );
  }
}

export default RestaurantDashboard;

const dashboardStyle = {
  marginRight: "20%",
  marginLeft: "20%",
};
