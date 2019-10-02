import React, { Component } from "react";
import "./mainpage.css";
import Nav from "../components/nav"
import Profile from "../subpages/profile";
import Chat from "../subpages/chat";
import Post from "../subpages/post"
import Timeline from "../subpages/timeline"
import Events from "../subpages/events"
import Axios from "axios"
import {Redirect} from "react-router-dom"

class Main extends Component {
    state = {
        user : {},
        redirect: false
      }
     
      componentDidMount(){
        Axios.get("/auth/google/main").then(res => {
          
            if (res) {
              this.setState({user : res.data})
            }
           
          })
      }
      componentDidUpdate(){
          if (!this.state.user){
            this.setState({redirect : true})
          }
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

export default Main;