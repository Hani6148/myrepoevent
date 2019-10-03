import React from "react";
import { Router, Route, Switch, Redirect,Link } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/Signup";
import { Component } from "react"
import Login from "./pages/Login";
import Main from "./pages/mainpage"
import Axios from "axios"
import history from './../src/history';
class App extends Component {
  state = {
    autenticated: false
  }
  autenticate = () => {
    Axios.get("/auth/google/main").then(res => {
      if (!res) {
        this.setState({ autenticated: false })
      }
      else {
        
        this.setState({ autenticated: true })
        return true
      }
    })

  }

  render() {
    return (
      <Router history={history}>
        <div>

          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/main" component={Main}/>
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    )
      ;
  }
}

export default App;
