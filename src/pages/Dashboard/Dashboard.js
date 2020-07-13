import React, { Component } from "react";
<<<<<<< HEAD
import { Container, Row } from "../../components/Grid";
import { Card, Table} from "react-bootstrap";
=======
import { Container } from "../../components/Grid";
import { Card } from "react-bootstrap";
>>>>>>> de4ac0e8189eccc34ef60b1ac087edf3c16b069e
import { CardColumns } from "react-bootstrap";
import ArticleCard from "../../components/ArticleCard";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import Result from "../../components/Result";
import KeyPad from "../../components/KeyPad";
import MoneyInTable from "../../components/MoneyInTable";
import MoneyOutTable from "../../components/MoneyOutTable";
import Button from "react-bootstrap/Button";
import { PieChart } from "react-minimal-pie-chart";

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

<<<<<<< HEAD
=======
  // state = {
  //     toLogin: false,
  //     toRegister: false,
  //     login: [],
  //     register: [],
  // };

  //page render
>>>>>>> de4ac0e8189eccc34ef60b1ac087edf3c16b069e
  render() {
    return (
      <div>
        <Navbar />
<<<<<<< HEAD
          <Container>
            <Jumbotron fluid />
          </Container>
          <CardColumns>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Money In</Card.Title>
                    <Card.Text>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Description</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Food</td>
                            <td>Chipotle</td>
                            <td>$10.00</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Text>
                </Card.Body>
              </Card>
              <Card bg="primary" text="white" className="text-center p-3">
                <block className="block mb-0 card-body">
                  <p>
                    Money Graphic Goes here
                  </p>
                  <footer className="block-footer">
                    <small className="text-muted">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </small>
                  </footer>
                </block>
              </Card>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Money Out</Card.Title>
                    <Card.Text>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Description</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Food</td>
                            <td>Chipotle</td>
                            <td>$10.00</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <ArticleCard />
              </Card>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Savings Goals</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in
                      to additional content.{" "}
                    </Card.Text>
                    <Card.Text>
                      <Table striped bordered hover>
                        <div id="SavingsTable" class="card text-center">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Item</th>
                              <th>Description</th>
                              <th>Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Car</td>
                              <td>Used Camero from Craigslist</td>
                              <td>$12000.00</td>
                            </tr>
                          </tbody>
                          <a href="#" class="btn btn-primary">New Goal</a>
                        </div>
                      </Table>
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
=======
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
                <Button
                  variant="secondary"
                  size="lg"
                  block
                  id="addIncome"
                  href="/Transactions"
                >
                  Add New Income
                </Button>
              </Card>

              {/* Expense Card */}
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Expense</Card.Title>
                  <Card.Title>(You Spent Money!)</Card.Title>
                  <MoneyOutTable />
                </Card.Body>
                <Button
                  variant="secondary"
                  size="lg"
                  block
                  id="addExpense"
                  href="/Transactions"
                >
                  Add New Expense
                </Button>
              </Card>

              {/* Pie chart Card */}
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Your Money Snapshot</Card.Title>
                  <PieChart
                    data={[
                      { title: "Income", value: 125, color: "#85bb65"},
                      { title: "Expenses", value: 15, color: "#BF0A30" },
                      
                    ]}
                  />
                </Card.Body>
              </Card>

              {/* Article Cards */}
              <Card>
                <ArticleCard />
              </Card>

              <Card className="text-center p-3">
                <blockquote className="blockquote mb-0 card-body">
                  <p>
                    This made learning how to budget for my highschool finance
                    class so fun!
                  </p>
                  <footer className="blockquote-footer">
                    <small className="text-muted">Some kid probably</small>
                  </footer>
                </blockquote>
              </Card>

              {/* Calculator Card */}
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
>>>>>>> de4ac0e8189eccc34ef60b1ac087edf3c16b069e
      </div>
    );
  }
}

export default Dashboard;