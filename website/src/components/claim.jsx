import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
//class for what an indivdual claim would look like
class Claim extends Component {
  render() {
    return (
      <div class="d-flex justify-content-between">
        <div>
          <span style={{ fontsize: 30 }}>{this.props.claim.code}</span>
        </div>
        <div>
          <button
            onClick={() => this.props.onClaim(this.props.claim.id)}
            className="btn btn-success btn-sm m-2"
          >
            Approve Claim
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.claim.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete Claim
          </button>
        </div>
      </div>
    );
  }
}

export default Claim;
