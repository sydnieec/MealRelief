import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class UserClaim extends Component {
  render() {
    console.log("props", this.props);
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{this.props.userclaim.restaurant}</Card.Title>
          <Card.Text>
            {this.props.userclaim.address} {this.props.userclaim.telephone}
          </Card.Text>
          <Card.Text>{this.props.userclaim.description}</Card.Text>
          <Card.Text>{this.props.userclaim.servings} available</Card.Text>

          <Button variant="primary">Claim</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default UserClaim;
