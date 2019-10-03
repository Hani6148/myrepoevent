import React, { Component } from "react";
import "./mainpage.css";
import Nav from "../components/nav"
import Profile from "../subpages/profile";
import Chat from "../subpages/chat";
import Post from "../subpages/post"
import Timeline from "../subpages/timeline"
import Events from "../subpages/events"
import Create from "../subpages/Create"
import InvitationsSub from "../subpages/InvitationsSub"
import Axios from "axios"
import { Router, Route, Switch, Redirect,Link } from "react-router-dom";

class Main extends Component {
    state = {
        user : {},
        
      }
     
      componentDidMount(){
        console.log(this.props.match)
        Axios.get("/auth/google/main").then(res => {
            if (res) {
                console.log("my user------------------",res.data)
              this.setState({user : res.data})
            }
            else {
              console.log("makanch")
            }
          })


      }
   
    render() {
        
        return (
          
        
            <div id="mainpagediv">
                <Nav current={this.state.user}/>
                <div className="container-fluid" id="contentdiv">
                    <div className="row" id="contentrow">
                        <div className="container" id="profileChat">
                            <Profile user={this.state.user} />
                            <Chat />
                        </div>
                            
                            <div className="container" id="mainsectionCtrE">
                           

                            <Route exact path="/main/createEvent" component={() => <Create currentUser={this.state.user} />}/>
                            <Route exact path="/main" component={Post}/>
                            <Route exact path="/main" component={Timeline}/>
                            
                            
                            </div>
                        

                        <div className="container" id="events">
                             <Route exact path="/main" component={Events}/>
                        </div>
                    </div>

                </div>
            </div>
            

        )
    }
    
}

export default Main;