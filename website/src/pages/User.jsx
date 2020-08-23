import React, { Component } from "react";
import "../App.css";
import Nav from "../Nav";
import DefaultMap from "../DefaultMap";
import UserClaims from "../components/userclaims";

class User extends Component {
  state = {
    userclaimslist: []
  };

  componentDidMount() {
    fetch('http://127.0.0.1:8000/foodproviders/', {
      method: 'GET',
    }).then((response) => response.json())
    .then(list => {
      this.setState({ userclaimslist: list });
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="row mt-4" style={rowStyle}>
          <DefaultMap />
          <div style={claimStyle}>
            <UserClaims
              userclaimslist={this.state.userclaimslist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default User;

const rowStyle = {
  paddingLeft: "5%"
}

const claimStyle = {
  paddingLeft: "5%",
}