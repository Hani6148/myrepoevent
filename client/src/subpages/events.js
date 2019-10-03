import React, { Component } from "react";
import Event from "../components/event";
import Axios from "axios"

class Events extends Component {
    
    state={
        allevents:[]
    }

   
    


    componentDidMount(){

    Axios.get("/api/users/events/"+this.props.currentUser._id).then(res => {
        if (res) {
            console.log("------------------------",res.data.eventsParticipation)
          this.setState({allevents : res.data.eventsParticipation})
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
                     <Event event={event}/>
                ))}
                
              
            </div>
            
            
        )
    }
}

export default Events;