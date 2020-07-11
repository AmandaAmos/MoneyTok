import React, { Component } from "react";
import { Container, Row, Column } from "../../components/Grid";
import { Card } from "react-bootstrap";
import { CardColumns } from "react-bootstrap";
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

              {/* Anne testing code below */}

              <CardColumns>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title that wraps to a new line</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <blockquote className="blockquote mb-0 card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in
                      to additional content.{" "}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                <Card bg="primary" text="white" className="text-center p-3">
                  <blockquote className="blockquote mb-0 card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in
                      to additional content.{" "}
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
        </Container>
      </div>
    );
  }
}

export default Dashboard;
