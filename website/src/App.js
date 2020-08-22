import React from "react";
import "./App.css";
import Nav from "./Nav";
import User from "./pages/User";
import RestaurantLogin from "./pages/RestaurantLogin";
import RestaurantForm from "./pages/RestaurantForm";
import RestaurantDashboard from "./pages/RestaurantDashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={User} />
          <Route path="/restaurantlogin" component={RestaurantLogin} />
          <Route path="/restaurantform" component={RestaurantForm} />
          <Route path="/restaurantdashboard" component={RestaurantDashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
