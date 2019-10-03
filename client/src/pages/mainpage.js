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
import Invitation from "../components/invitation"
import Axios from "axios"
import { Router, Route, Switch, Redirect,Link } from "react-router-dom";

class Main extends Component {
    state = {
        user : {},
        dataAdded:""
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

      checkUploadResult=(resultEvent) =>{
        if(resultEvent.event==="success"){
            console.log(resultEvent.info.url)
            this.setState({dataAdded:resultEvent.info.url})
            console.log(this.state.imageAdded)
        }
        
        }


   
    render() {
        
        return (
          
        
            <div id="mainpagediv">
                <Route path="/main" component={() => <Nav current={this.state.user} />}/>
                <div className="container-fluid" id="contentdiv">
                    <div className="row" id="contentrow">
                        <div className="container" id="profileChat">
                            <Profile user={this.state.user} />
                            <Chat />
                        </div>
                            
                            <div className="container" id="mainsectionCtrE">
                           
                            <Switch>
                            <Route exact path="/main/createEvent" component={() => <Create currentUser={this.state.user} />}/>
                            
                            <Route exact path="/main/invite/:id" component={Invitation}/>
                            </Switch>
                            <Route exact path="/main" component={() => <Post checkUploadResult={this.checkUploadResult} />}/>
                            <Route exact path="/main" component={Timeline}/>
                            </div>
                        

                        <div className="container" id="events">
                            
                             <Route path="/main" component={() => <Events currentUser={this.state.user} />}/>
                             
                             
                        </div>
                    </div>

                </div>
            </div>
            

        )
    }
    
}

export default Main;