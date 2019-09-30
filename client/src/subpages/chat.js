import React, { Component } from "react";
import { IoMdSend } from "react-icons/io";
import Friend from "../components/friend"

class Chat extends Component {

    render() {
        return (
            <div className="container" id="chatdiv">
                <h3 className="sectiontitle">Chat</h3>
                <div className="chatbox">
                    <div className="row" id="friendsbox">
                        <Friend/>
                        <Friend/>
                        <Friend/>
                        <Friend/>
                        <Friend/>
                        <Friend/>
                        <Friend/>
                        <Friend/>
                    </div>
                    <div className="row">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="message..." aria-label="message..." aria-describedby="button-addon2" />
                                <div className="input-group-append" />
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2"><IoMdSend/></button>
                                
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chat;