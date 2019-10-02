import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect,Link } from "react-router-dom";
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
            <Route exact path="/main" component={Main}/>
            <Route exact path="/main/createEvent" component={()=><Main link="/main/createEvent"/>} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
      ;
  }
}

export default App;
