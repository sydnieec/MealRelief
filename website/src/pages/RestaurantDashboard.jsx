import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import NavRestaurant from "../NavRestaurant";

function RestaurantDashboard() {
  const formStyle = {
    paddingRight: "20%",
    paddingLeft: "20%",
  };
  return (
    <React.Fragment>
      <NavRestaurant />
      <div style={formStyle}>
        <h1> Restaurant Dashboard</h1>
      </div>
    </React.Fragment>
  );
}

export default RestaurantDashboard;
