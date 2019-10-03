import React, { Component } from "react";
import Event from "../components/event";
import Axios from "axios"

class Events extends Component {
    
    state={
        allevents:[],
    }



    componentDidMount(){

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
            
            <div className="container" id="eventscontainer">
                <h3 className="sectiontitle">Events</h3>
                {this.state.allevents.map(event=>(
                     <Event event={event} displayEvent={this.props.displayEvent} selectedEvent={this.props.selectedEvent}/>
                ))}
                
              
            </div>
            
            
        )
    }
}

export default Events;