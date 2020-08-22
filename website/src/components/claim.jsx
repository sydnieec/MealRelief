import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
//class for what an indivdual claim would look like
class Claim extends Component {
  render() {
    console.log("props", this.props);
    return (
      <div>
        <Badge variant="success">Claimed</Badge>{" "}
        <span style={{ fontsize: 30 }}>{this.props.claim.value}</span>
        <button
          onClick={() => this.props.onDelete(this.props.claim.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete Claim
        </button>
      </div>
    );
  }
}

export default Claim;
