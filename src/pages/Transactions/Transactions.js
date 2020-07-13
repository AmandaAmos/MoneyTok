import React, { Component } from "react";
import { Container } from "../../components/Grid";
import Navbar from "../../components/Navbar";
import Form from "react-bootstrap/Form";
import Jumbotron from "../../components/Jumbotron";
import Button from "react-bootstrap/Button";

class Transactions extends Component {
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
              <Form id="AddIncome">
                <h2>Add New Income </h2>
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" placeholder="Babysitting" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Amount</Form.Label>
                  <Form.Control type="number" placeholder="25" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
                {""}
              </Form>

              <br/>

              <Form id="AddExpense">
                <h2>Add New Expense </h2>
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" placeholder="School Lunch" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Amount</Form.Label>
                  <Form.Control type="number" placeholder="10" />
                  <br/>
                  <Form.Check type="checkbox" label="Recurring Bill" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
                {""}
              </Form>
            </Container>
  
        </div>
      </div>
    );
  }
}

export default Transactions;
