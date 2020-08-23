import React, { Component } from "react";
import { Badge, Card, Button, Modal, } from "react-bootstrap";

class UserClaim extends Component {
  state = {
    servings: this.props.userclaim.servings,
    isOpen: false,
    claimCode: null
  };

  handleUserClaims = (event) => {
    event.preventDefault()
    const updatedServings = this.state.servings - 1
    const code = Date.now()
    if (updatedServings >= 0) {
      this.setState({ 
        servings: updatedServings,
        isOpen: true,
        claimCode: code
      })
    }
    const payload = {
      "phone": this.props.userclaim.phone,
      "address": this.props.userclaim.address,
      "name": this.props.userclaim.name,
      "image": this.props.userclaim.image,
      "description": this.props.userclaim.description,
      "servings": this.state.servings
    }
    fetch('http://127.0.0.1:8000/foodproviders/'+this.props.userclaim.id+'/', {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(payload)
    }).then((response) => {
      console.log(response)
    })

    const payload2 = {
      "provider_id": this.props.userclaim.id,
      "code": code
    }
    fetch('http://127.0.0.1:8000/claimcodes/', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(payload2)
    }).then((response) => {
      console.log(response)
    })
  };

  handleClose = () => this.setState({isOpen: false});
  
  render() {
    return (
      <div>
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
                <Card.Text>{this.state.servings} servings available</Card.Text>
                <Button onClick={this.handleUserClaims} style={btn}>Claim a Serving</Button>
              </div>
            </Card.Body>
            </div>
          </div>
        </Card>
        <Modal show={this.state.isOpen}>
          <Modal.Header>
            <Modal.Title>{this.state.claimCode}</Modal.Title>
          </Modal.Header>
        
          <Modal.Body>
            <p>This is your unique claim code! Please present it to an employee to redeem your meal. Expires within 1 hour.</p>
          </Modal.Body>
        
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
      </Modal>
      </div>
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