import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect,Link } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/Signup";
import { Component } from "react"
import Login from "./pages/Login";
import Main from "./pages/mainpage"


class App extends Component {
  state = {
    autenticated: false
  }
  autenticate = (bool) => {
   if(bool){
      this.setState({autenticated : true})
   }else{
    this.setState({autenticated : false})
   }

  }

  render() {
    return (
      <Router>
        <div>

          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/main" component={()=>!this.state.autenticated ?  <Login/> : <Main autenticate={this.autenticate} />}/>
            <Route exact path="/main/createEvent" component={()=><Main link="/main/createEvent" autenticate={this.autenticate}/>} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
      ;
  }
}

export default App;
