import React, { Component } from "react";
import { MdEvent } from "react-icons/md";
import { IoIosStar ,IoIosStarOutline} from "react-icons/io";

class Profile extends Component {

    render() {
        return ( 
            <div className="container" id="profilediv">
                <div className="row justify-content-md-center" id="rowprofileimg">
                <img src="http://ae01.alicdn.com/kf/HTB1ZSuEXizxK1RkSnaVq6xn9VXaZ.jpg" alt="profileimg" className="img-thumbnail rounded-circle" id="imageprofile"/>
                </div>
                <div className="row justify-content-md-center" id="">
                    <h1>The Mask</h1>
                </div>
                <div className="row justify-content-md-center profileinfo" >
                    <p><MdEvent/> Has organised <span>10</span> events</p>
                </div>
                <div className="row justify-content-md-center profileinfo">
                <p>Rating <span><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStarOutline/><IoIosStarOutline/></span></p>
                </div>
                
            </div>
        )
    }
}

export default Profile;