import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import NavRestaurant from "../NavRestaurant";
function RestaurantForm() {
  const formStyle = {
    paddingRight: "20%",
    paddingLeft: "20%",
  };
  return (
    <React.Fragment>
      <NavRestaurant />
      <div style={formStyle}>
        <h1> Add a food listing </h1>
        <Form>
          <Form.Group>
            <Form.Label>Food Name</Form.Label>
            <Form.Control required type="text" placeholder="Pizza" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Amout of servings</Form.Label>
            <Form.Control required type="text" placeholder="50" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description of food</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Form>
            <Form.Group>
              <Form.File
                id="exampleFormControlFile1"
                label="Submit a picture"
              />
            </Form.Group>
          </Form>
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

export default RestaurantForm;
