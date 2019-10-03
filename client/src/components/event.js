import React, { Component } from "react";
import API from "../utils/API";
import Moment from "moment"
import history from "../history"

class Event extends Component {
    state={
        host: "",
        selected:"",
        eventId: "",
        img: "",
        description :"",
        EventName : "",
        startDate : new Date,
        endDate : new Date

    }
    componentDidMount(){
        this.findHost();
        this.setState({
            eventId :this.props.event._id,
            img :this.props.event.img,
            EventName : this.props.event.name,
            description : this.props.event.description,
            startDate : this.props.event.startDate,
            endDate: this.props.event.endDate

        })
        if(this.props.event._id == this.props.selectedEvent)
        this.setState({selected : "eventClicked"})
    }
    
    findHost=()=>{

        API.getUserById(this.props.event.host).then(res => {
            if (res) {
                this.setState({host: res.data.username})   
            }
            else {
              console.log("makanch")

            }
          })
            
    }

    selectEvent=(e)=>{
        e.preventDefault();
        this.props.displayEvent(this.state.eventId)
        history.push('/main/showEvent')
    }

    render() {
        return (
            <div 
            className= {`card mb-3 eventcard ${this.state.selected}`}
            id={this.state.eventId} 
            data-id={this.state.eventId} 
            key={this.state.eventId}
            onClick={(e)=>{this.selectEvent(e);}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={this.state.img} className="card-img" alt="..." />
                            </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{this.state.EventName}</h5>
                                <p className="card-text">
                                    Organizor : {this.state.host }.
                                    <br/>
                                    Participants : 
                                    <br/>
                                    Description : {this.state.description}
                                    <br/>
                                    Starts: {Moment(new Date(this.state.startDate)).format("YYYY-MM-DD")}  
                                    <br/>
                                    Ends: { Moment(new Date(this.state.endDate)).format("YYYY-MM-DD")}
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        }
        
        export default Event;
        
        
        
