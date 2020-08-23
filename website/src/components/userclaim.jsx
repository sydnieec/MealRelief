import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class UserClaim extends Component {

  handleUserClaims = (event) => {
    event.preventDefault()
    const payload = {
      "phone": this.props.userclaim.phone,
      "address": this.props.userclaim.address,
      "name": this.props.userclaim.name,
      "image": this.props.userclaim.image,
      "description": this.props.userclaim.description,
      "servings": this.props.userclaim.servings - 1
    }
    fetch('http://127.0.0.1:8000/foodproviders/'+this.props.userclaim.id+'/', {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(payload)
    }).then((response) => {
      console.log(response)
    })
  };
  
  render() {
    return (
      <Card style={{ maxWidth: "42rem", marginBottom: "5%", borderColor: "#ff8364" }}>
        <div class="row no-gutters">
          <div class="col-md-4">
            <Card.Img variant="top" style={imgStyle} src={this.props.userclaim.image} />
          </div>
          <div class="col-md-8">
          <Card.Body>
            <Card.Title>{this.props.userclaim.name}</Card.Title>
            <Card.Text>
              {this.props.userclaim.address}
            </Card.Text>
            <Card.Text>
              {this.props.userclaim.phone}
            </Card.Text>
            <Card.Text>{this.props.userclaim.description}</Card.Text>
            <div class="row pl-3" >
              <Card.Text>{this.props.userclaim.servings} servings available</Card.Text>
              <Button variant="primary" onClick={this.handleUserClaims} style={btn}>Claim a Serving</Button>
            </div>
          </Card.Body>
          </div>
        </div>
      </Card>
    );
  }
}

export default UserClaim;

const imgStyle = {
  paddingTop: "6%",
  paddingLeft: "6%"
}


const btn = {
  backgroundColor: "#ff8364",
  borderColor: "#edf7fa",
  color: "#edf7fa",
  marginLeft: "30%"
};