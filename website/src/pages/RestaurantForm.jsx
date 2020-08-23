import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import NavRestaurant from "../NavRestaurant";

class RestaurantForm extends Component {
  constructor(props) {
    super(props);
    this.state = { foodname: "", servings: "", description: "" };
  }
  handleFoodNameChange = (event) => {
    this.setState({ foodname: event.target.value });
  };
  handleServingsChange = (event) => {
    this.setState({ servings: event.target.value });
  };
  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };
  handleSubmit = (event) => {
    alert(this.state.foodname + this.state.servings + this.state.description);
    fetch('http://127.0.0.1:8000/foodproviders/', {
      method: 'GET',
      // We convert the React state to JSON and send it as the POST body
    }).then(function(response) {
      console.log(response)
      return response.json();
    });
    
    event.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <NavRestaurant />
        <div style={formStyle}>
          <h1> Add a food listing </h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Food Name</Form.Label>
              <Form.Control
                value={this.state.foodname}
                onChange={this.handleFoodNameChange}
                required
                type="text"
                placeholder="Pizza"
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Amout of servings</Form.Label>
              <Form.Control
                value={this.state.servings}
                onChange={this.handleServingsChange}
                required
                type="text"
                placeholder="50"
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description of food</Form.Label>
              <Form.Control
                value={this.state.description}
                onChange={this.handleDescriptionChange}
                as="textarea"
                rows="3"
                required
              />
            </Form.Group>
            <Form>
              <Form.Group>
                <Form.File
                  id="exampleFormControlFile1"
                  label="Submit a picture"
                />
              </Form.Group>
            </Form>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Link to="/restaurantdashboard">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Link>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

export default RestaurantForm;

const formStyle = {
  paddingTop: "5%",
  paddingRight: "20%",
  paddingLeft: "20%",
};
