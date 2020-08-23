import React, { Component } from "react";
import UserClaim from "./userclaim";

//class to map the claims
class UserClaims extends Component {
  render() {
    return (
      <div>
        {this.props.userclaimslist.map((userclaim) => (
          <UserClaim
            key={userclaim.id}
            onUserClaim={this.props.onUserClaim}
            userclaim={userclaim}
          />
        ))}
      </div>
    );
  }
}

export default UserClaims;
