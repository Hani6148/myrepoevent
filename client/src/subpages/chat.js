import React, { Component } from "react";
import { IoMdSend } from "react-icons/io";
import Friend from "../components/friend"

class Chat extends Component {

    render() {
        return (
            <div className="container" id="chatdiv">
                <h3 className="sectiontitle">Adds</h3>
                <div className="chatbox">
                   
                   <img src="https://d24wuq6o951i2g.cloudfront.net/img/events/id/273/2737376/assets/3b5.Coding_vert-lockup-cmyk.jpg" alt="add" style={{width:"100%"}}></img>
                   
                </div>
            </div>
        )
    }
}

export default Chat;