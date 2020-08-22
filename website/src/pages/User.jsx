import React from "react";
import "../App.css";
import Nav from "../Nav";
import DefaultMap from "../DefaultMap";

function User() {
  return (
    <div>
      <Nav />
      <h1 className="title"> User Dashboard </h1>
      <DefaultMap />
    </div>
  );
}

export default User;
