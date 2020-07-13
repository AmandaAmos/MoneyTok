import React, { Component } from "react";
import { Container } from "../../components/Grid";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import { Card } from "react-bootstrap";

class Budget extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     result: "",
  //   };

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
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Coming Soon!</Card.Title>
                <p>We're Working Very Hard to Bring You New Content</p>
              </Card.Body>
            </Card>
          </Container>
        </div>
      </div>
    );
  }
}

export default Budget;
