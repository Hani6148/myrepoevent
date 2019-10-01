import React, { Component } from "react";
import "./mainpage.css";
import Nav from "../components/nav"
import Profile from "../subpages/profile";
import Chat from "../subpages/chat";
import Post from "../subpages/post"
import Timeline from "../subpages/timeline"
import Events from "../subpages/events"
import Axios from "axios"

class Main extends Component {
    state = {
        autenticated: false
      }
     
      componentDidMount(){
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
        if(!this.state.autenticated){
            this.props.history.push("/")
        }else{
        return (

            <div id="mainpagediv">
                <Nav />
                <div className="container-fluid" id="contentdiv">
                    <div className="row" id="contentrow">
                        <div className="container" id="profileChat">
                            <Profile />
                            <Chat />
                        </div>
                        {this.props.link === "/main/createEvent"
                            ?
                            <div className="container" id="mainsectionCtrE">

                            </div>
                            :
                            <div className="container" id="mainsection">
                                <Post />
                                <Timeline />
                            </div>
                        }

                        <div className="container" id="events">
                            <Events />
                        </div>
                    </div>

                </div>
            </div>

        )
    }
    }
}

export default Main;