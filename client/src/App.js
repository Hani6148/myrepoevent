import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import { Component } from "react"

class App extends Component {


  render() {
    return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    )
  ;}
}

export default App;
