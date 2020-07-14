import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Articles from "./pages/Articles";
import Budget from "./pages/Budget";
import Profile from "./pages/Profile";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import "./App.css";

class App extends Component {
  render() {
    return (

        <Router>
          <div>
           <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/MoneyTok" component={Dashboard} />
              <Route exact path="/Transactions" component={Transactions} />
              <Route exact path="/Articles" component={Articles} />
              <Route exact path="/Budget" component={Budget} />
              <Route exact path="/Profile" component={Profile} />

              {/* <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} /> */}
           </Switch>
          </div>
        </Router>
    )
  }
};

export default App;
