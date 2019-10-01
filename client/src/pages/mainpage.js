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

class Main extends Component {
    state = {
        user : {},
        allevents:[]
      }
     
      componentDidMount(){
        Axios.get("/auth/google/main").then(res => {
            if (res) {
                console.log("------------------------",res.data)
              this.setState({user : res.data})
            }
            else {
              console.log("makanch")
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
   
    render() {
        
        return (

            <div id="mainpagediv">
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