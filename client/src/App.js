import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Feed from "./pages/Feed";
import Nav from "./components/Nav";
import { Component } from "react"
import Login from "./pages/Login";
import Create from "./pages/Create";

class App extends Component {


  render() {
    return (
    <Router>
      <div>
        
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/feed" component={Create} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    )
  ;}
}

export default App;
