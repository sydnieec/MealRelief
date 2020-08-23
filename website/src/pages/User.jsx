import React, { Component } from "react";
import "../App.css";
import Nav from "../Nav";
import DefaultMap from "../DefaultMap";
import UserClaims from "../components/userclaims";

class User extends Component {
  state = {
    userclaimslist: [
      {
        id: 1,
        restaurant: "Pizza",
        telephone: "123-456-7890",
        address: "123 Main Street",
        description: "We have pepperoni pizza!",
        servings: "10",
      },
      {
        id: 1,
        restaurant: "Pizza",
        telephone: "123-456-7890",
        address: "123 Main Street",
        description: "We have pepperoni pizza!",
        servings: "10",
      },
      // { id: 2, value: "SDf" },
      // { id: 3, value: "SDFSDF" },
      // { id: 4, value: "Asdasd" },
    ],
  };

  handleUserClaims = (claimid) => {
    const userclaimslist = this.state.userclaimslist.filter(
      (c) => c.id !== claimid
    );
    this.setState({ userclaimslist });
  };

  render() {
    return (
      <div>
        <Nav />
        <h1 className="title"> User Dashboard </h1>
        <DefaultMap />
        <div className="row">
          <UserClaims
            userclaimslist={this.state.userclaimslist}
            onUserClaim={this.handleUserClaims}
          />
        </div>
      </div>
    );
  }
}

export default User;
