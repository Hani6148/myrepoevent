import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect,withRouter } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/Signup";
import { Component } from "react"
import Login from "./pages/Login";
import Main from "./pages/mainpage"
import Axios from "axios"

class App extends Component {
  state = {
    autenticated: false
  }
  static propTypes = {
    location: PropTypes.object.isRequired,
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.autenticate();
    }
  }
  autenticate = () => {
    Axios.get("/auth/google/main").then(res => {
      if (!res) {
        this.setState({ autenticated: false })
       
      }
      else {
        
        this.setState({ autenticated: true })
        
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
            <Route exact path="/main" >
              {this.state.autenticated ? <Main/> : <Redirect to="/" />}
            </Route>
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
      ;
  }
}

export default App;
