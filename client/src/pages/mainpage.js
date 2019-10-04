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
import { Router, Route, Switch, Redirect, Link } from "react-router-dom";
import Welcome from "../subpages/welcome"

class Main extends Component {
  state = {
    user: {},
    data: [],
    selectedEvent:""
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
            Axios.post("/api/timeline/saveData",{
              type : "image",
              link : resultEvent.info.url,
              event : this.state.selectedEvent,
              user : this.state.user._id,

            }).then(res=>{
              console.log(res.data);
              this.getData(this.state.selectedEvent)
            }
             
            )
            console.log(resultEvent.info.url)
            
            
            console.log(this.state.dataAdded)
        }
        
        }
        getData=(eventID)=>{
          Axios.get("/api/timeline/getData/"+eventID).then(res=>{
            console.log(res.data)
            this.setState({data:res.data})
          }
            
          )
        }

        renderRedirect = () => {
          if (this.state.redirect) {
            return <Redirect to='/' />
          }
        }
      
        displayEvent = (id) => {
          console.log(id)
          this.getData(id)
          this.setState({selectedEvent : id})
          
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
                            
                            <div className="container" id="mainsection">
                           
                            <Switch>
                            <Route exact path="/main/createEvent" component={() => <Create currentUser={this.state.user} />}/>
                            
                            <Route exact path="/main/invite/:id" component={Invitation}/>
                            </Switch>
                            <Route exact path="/main" component={Welcome} />
                            <Route exact path="/main/showEvent" component={() => <Post selectedEvent={this.state.selectedEvent} checkUploadResult={this.checkUploadResult}/>} />
                            <Route exact path="/main/showEvent" component={() => <Timeline selectedEvent={this.state.selectedEvent} data={this.state.data}/>} />
                            </div>
                        

                        <div className="container" id="events">
                            
                             <Route path="/main" component={() => <Events currentUser={this.state.user} displayEvent={this.displayEvent} selectedEvent={this.state.selectedEvent} />}/>
                
                            
                             
                             
                        </div>
                    </div>

                </div>
            </div>
            

    )

  }
  
}

export default Main;