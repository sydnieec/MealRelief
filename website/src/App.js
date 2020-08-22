import React from "react";
import "./App.css";
import Nav from "./Nav";
import User from "./pages/User";
import RestaurantLogin from "./pages/RestaurantLogin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/user" component={User} />
          <Route path="/restaurantlogin" component={RestaurantLogin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
