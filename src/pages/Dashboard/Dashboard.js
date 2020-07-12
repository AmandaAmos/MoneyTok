import React, { Component } from "react";
import { Container } from "../../components/Grid";
import { Card } from "react-bootstrap";
import { CardColumns } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import Result from "../../components/Result";
import KeyPad from "../../components/KeyPad";
import MoneyInTable from "../../components/MoneyInTable";
import MoneyOutTable from "../../components/MoneyOutTable";
import Button from "react-bootstrap/Button";
// import API from "../../utils/API";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
    };
  }

  //calculator function
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
  //end calculator function

  // state = {
  //     toLogin: false,
  //     toRegister: false,
  //     login: [],
  //     register: [],
  // };

  //page render
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <Jumbotron fluid>
            <h1>Money Tok</h1>
          </Jumbotron>
          <Container>
            <CardColumns>

              {/* Income Card */}
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Income</Card.Title>
                  <Card.Title>(You Got Money!)</Card.Title>
                  <MoneyInTable />
                </Card.Body>
                <Button variant="secondary" size="lg" block id="addIncome">
                  Add New Income
                </Button>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title> 2. Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>


                {/* Expense Card */}
                <Card className="text-center">
                <Card.Body>
                  <Card.Title>Expense</Card.Title>
                  <Card.Title>(You Spent Money!)</Card.Title>
                  <MoneyOutTable />
                </Card.Body>
                <Button variant="secondary" size="lg" block id="addExpense">
                  Add New Expense
                </Button>
              </Card>

              <Card bg="primary" text="white" className="text-center p-3">
                <blockquote className="blockquote mb-0 card-body">
                  <p>
                    3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer">
                    <small className="text-muted">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </small>
                  </footer>
                </blockquote>
              </Card>


              <Card className="text-center">
                <Card.Body>
                  <Card.Title>4. Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                  <Card.Text>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Calculator</Card.Title>
                  <div className="calculator-body">
                    <Result result={this.state.result} />
                    <KeyPad onClick={this.onClick} />
                  </div>
                </Card.Body>
              </Card>
            </CardColumns>
          </Container>
        </div>
      </div>
    );
  }
}

export default Dashboard;
