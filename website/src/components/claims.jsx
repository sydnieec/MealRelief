import React, { Component } from "react";
import Claim from "./claim";

//class to map the claims
class Claims extends Component {
  render() {
    return (
      <div>
        {this.props.claimslist.map((claim) => (
          <Claim
            key={claim.code}
            onClaim={this.props.onClaim}
            onDelete={this.props.onDelete}
            claim={claim}
          />
        ))}
      </div>
    );
  }
}

export default Claims;
