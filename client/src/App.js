import React, { Component } from "react";
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Result from "./components/Result";
import KeyPad from "./components/KeyPad";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
    };
  }

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  calculate = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  render() {
    return (
      <div>
        <Jumbotron fluid>
          <h1>Money Tok</h1>
          <h2>Calculator</h2>
        </Jumbotron>

        <div className="calculator-body">
          <Result result={this.state.result} />
          <KeyPad onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;