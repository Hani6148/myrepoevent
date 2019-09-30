import React, { Component } from "react";
import Event from "../components/event";


class Events extends Component {

    render() {
        return ( 
            
            <div className="container" id="eventscontainer">
                <h3 className="sectiontitle">Events</h3>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
              
            </div>
            
            
        )
    }
}

export default Events;