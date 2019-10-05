import React, { Component } from "react";
import { MdEvent,MdArrowForward } from "react-icons/md";

class Welcome extends Component{
    render(){
        return(
            <div className="container" id="mainsectionCtrE">
                <h3 className="sectiontitle" style={{paddingTop: "10px", paddingLeft:"10px"}} >Welcome</h3>
                <div className="text-center" style={{paddingTop: "200px",fontSize:"20px"}}>
                    <p style={{paddingRight:"50px",paddingLeft:"50px",lineHeight:"30px"}}><span style={{color:"#111e8f"}}>EVENTBOOK</span> is an online service that allows you to organize an event and invite people to it </p>
                    <p style={{paddingRight:"50px",paddingLeft:"50px"}}>To get started Create an event
                    <button type="button" 
                    className="btn btn-outline-success postbtns"
                    onClick={(e)=>{e.preventDefault(); window.location = "/main/createEvent"}}
                    style={{border:"none"}}
                    ><MdEvent className="posticons" /></button>
                     or Select one of the events in the event section <MdArrowForward/></p>
                </div>
            </div>
        )
    }
}

export default Welcome