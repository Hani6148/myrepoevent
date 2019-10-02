import React, { Component } from "react";
import "./mainpage.css";
import Nav from "../components/nav"
import Profile from "../subpages/profile";
import Chat from "../subpages/chat";
import Post from "../subpages/post"
import Timeline from "../subpages/timeline"
import Events from "../subpages/events"
import Create from "../subpages/Create"
import Axios from "axios"
import {Redirect} from "react-router-dom"

class Main extends Component {
    state = {
        user : {},
        allevents:[]
      }
     
      componentDidMount(){
        console.log(!this.state.user)
       
        Axios.get("/auth/google/main").then(res => {
          
            if (res) {
                console.log("------------------------",res.data)
              this.setState({user : res.data})
            }
           
          })

          Axios.get("/api/event/all").then(res => {
            if (res) {
                console.log("------------------------",res.data)
              this.setState({allevents : res.data})
            }
            else {
              console.log("makanch")
            }
          })
      }
     
   
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/' />
        }
      }
    render() {
        
        return (

            <div id="mainpagediv">
                {this.renderRedirect()}
                <Nav />
                <div className="container-fluid" id="contentdiv">
                    <div className="row" id="contentrow">
                        <div className="container" id="profileChat">
                            <Profile user={this.state.user} />
                            <Chat />
                        </div>
                        {this.props.link === "/main/createEvent"
                            ?
                            <div className="container" id="mainsectionCtrE">
                            <Create/>
                            </div>
                            :
                            <div className="container" id="mainsection">
                                <Post />
                                <Timeline />
                            </div>
                        }

                        <div className="container" id="events">
                            <Events events={this.state.allevents} />
                        </div>
                    </div>

                </div>
            </div>

        )
    }
    
}

export default Main;