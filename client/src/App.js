import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/Signup";
import { Component } from "react"
import Login from "./pages/Login";
import Main from "./pages/mainpage"

class App extends Component {


  render() {
    return (
    <Router>
      <div>
        
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/feed" component={Main} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    )
  ;}
}

export default App;
