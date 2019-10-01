import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/Signup";
import { Component } from "react"
import Login from "./pages/Login";
import Main from "./pages/mainpage"
import Axios from "axios"

class App extends Component {
  autenticate=()=>{
    Axios.get("/auth/google/main").then(res=>{
      if(!res){
        console.log(res)
        return false
      }
      else{
        console.log(res)
        return true
      }
    })
  }

  render() {
    return (
    <Router>
      <div>
        
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/main" component={!this.autenticate() ? Login : Main} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    )
  ;}
}

export default App;
