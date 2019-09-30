import React, { Component } from "react";
import "./mainpage.css";
import Nav from "../components/nav"
import Profile from "../subpages/profile";
import Chat from "../subpages/chat";
import Post from "../subpages/post"
import Timeline from "../subpages/timeline"
import Events from "../subpages/events"
import Cookies from 'js-cookie'

class MainPage extends Component {

    componentDidMount(){
        console.log(Cookies.get('access_token'))
    }
    render() {
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

export default MainPage;