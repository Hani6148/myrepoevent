import React, { Component } from "react";
import { MdEvent } from "react-icons/md";
import { IoIosStar ,IoIosStarOutline} from "react-icons/io";

class Profile extends Component {

    render() {
        return ( 
            <div className="container" id="profilediv">
                <div className="row justify-content-md-center" id="rowprofileimg">
                <img src={this.props.user.photo} alt="profileimg" className="img-thumbnail rounded-circle" id="imageprofile"/>
                </div>
                <div className="row justify-content-md-center" id="">
                    <h1>{this.props.user.username}</h1>
                </div>
                <div className="row justify-content-md-center profileinfo" style={{paddingTop: "10px"}} >
                    <p>@{this.props.user.email}</p>
                </div>
                <div className="row justify-content-md-center profileinfo">
                </div>
                
            </div>
        )
    }
}

export default Profile;