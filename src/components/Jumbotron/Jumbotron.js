import React from "react";
import './style.css';

const Jumbotron = ({ children }) => (
  <div className="jumbotron jumbotron-fluid">
    <div
      style={{
        height: 60,
        clear: "both",
        paddingTop: 40,
        paddingBottom: 20,
        textAlign: "Center",
      }}
      className="container"
    >
      {children}
    </div>
  </div>
);

export default Jumbotron;
