import React, { Component } from "react";
import { Container, Row } from "../../components/Grid";
import { Card, Table} from "react-bootstrap";
import { CardColumns } from "react-bootstrap";
import ArticleCard from "../../components/ArticleCard";
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

  render() {
    return (
      <div>
        <Navbar />
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
      </div>
    );
  }
}

export default Dashboard;