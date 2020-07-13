import React, { Component } from "react";
import Navbar from "../../components/Navbar";


class Transactions extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        Typing words to test
      </div>
    );
  }
}

export default Transactions;
