import React, { Component } from "react";
import { Container, Row, Column } from "../../components/Grid";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import Result from "../../components/Result";
import KeyPad from "../../components/KeyPad";
// import API from "../../utils/API";

class Dashboard extends Component {
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

   
    // state = { 
    //     toLogin: false,
    //     toRegister: false,
    //     login: [],
    //     register: [],
    // };

    render() {
        return (
          <div>
            <Navbar />
            <Container>
                <div>
                    <Jumbotron fluid>
                        <h1>Money Tok</h1>
                    </Jumbotron>
                    <Container>
                        <Row>
                        <Column>
                      <Card />
                    </Column>
                    <Column>
                      <Card />
                    </Column>
                    <Column>
                      <Card />
                    </Column>
                        </Row>
                <Row>
                
                    <Column>
                      <Card />
                    </Column>
                    <Column>
                      <Card />
                    </Column>
                <Column>
                <div className="calculator-body">
                    <Result result={this.state.result} />
                    <KeyPad onClick={this.onClick} />
                </div>
                </Column>
                
                
                </Row>
                </Container>

            </div>
            </Container>
        </div>
       );
     }
}

export default Dashboard;