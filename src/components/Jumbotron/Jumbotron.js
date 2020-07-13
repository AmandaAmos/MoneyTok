import React from "react";
<<<<<<< HEAD
import "./style.css";
=======
import './style.css';
>>>>>>> de4ac0e8189eccc34ef60b1ac087edf3c16b069e

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
