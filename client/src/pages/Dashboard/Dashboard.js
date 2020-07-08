import React, { Component } from "react";
import { Container, Row, Column } from "../../components/Grid";
import Article from "../../components/Article";
import Calculator from "../../components/Calculator";
// import Goals from "../../components/Goals";
// import Graph from "../../components/Graph";
import Navbar from "../../components/Navbar";
// import Money from "../../components/Money";
// import Login from "../../components/Login";
// import Register from "../../components/Register";
// import API from "../../utils/API";

class Dashboard extends Component {
    state = { 
        toLogin: false,
        toRegister: false,
        login: [],
        register: [],
    };

    render() {
        return (
          <div>
            <Navbar />
            <Container>
              <Row>
                <Column>
                <Article />
                </Column>
              </Row>
            </Container>
            <Container>
                <Calculator />
            </Container>
          </div>
        );
      }
}

export default Dashboard;