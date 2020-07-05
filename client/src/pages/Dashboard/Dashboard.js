import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Container } from "../../components/Grid";
import Article from "../../components/Article";
import Calculator from "../../components/Calculator";
import Goals from "../../components/Goals";
import Graph from "../../components/Graph";
import Navbar from "../../components/Navbar";
import Money from "../../components/Money";
import Login from "../../components/Login";
import Register from "../../components/Register";
import API from "../../utils/API";

class Dashboard extends Component {
    state = {
        title: "", 
        toLogin: false,
        toRegister: false,
        Login: [],
        Register: [],
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        if (this.state.title) {
            const title = this.state.title.trim();

            API.getScrapedArticles(title)
                .then((res) => {
                    console.log(res.data.items);

                    this.setState({
                        toResults: true,
                        results: res.data.items,
                    });
                })
                .catch((err) => console.log(err));
        }
    };

    render() {
        if (this.state.toResults) {
          return (
            <Redirect
              to={{
                pathname: "/",
                data: { results: this.state.results },
              }}
            />
          );
        }
        
        return (
          <div>
            <Navbar>
              <h1 className="display-4">Google Books Search</h1>
              <p className="lead">Search for and save books of interest.</p>
              <hr className="my-4" />
              <p className="lead">
                <Link className="btn btn-default btn-lg" to="/" role="button">
                  New Search
                </Link>
                <Link className="btn btn-default btn-lg" to="/saved" role="button">
                  Saved Books
                </Link>
              </p>
            </Navbar>
            {/* <Container>
              <form>
                <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  label="Book Title"
                  placeholder="Search Book Title (required)"
                />
                <FormBtn onClick={this.handleFormSubmit} className="btn btn-info">
                  Search
                </FormBtn>
              </form>
            </Container> */}
          </div>
        );
      }
}

export default Dashboard;