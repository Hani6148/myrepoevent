import React, { Component } from "react";
import VideoStr from "../components/videoStr";
import Modal from "../components/modal"
class Timeline extends Component {
    state={
        modal: "",
        modalStyle: {}
    }
showModal=()=>{
    
    this.setState(prev =>{return{
         modal: "show" ,
         modalStyle : {display: "inline-block", backgroundColor: 'rgba(52, 52, 52, 0.8)'}
}}
    
    )
}
hideModal=()=>{
    this.setState(prev =>{return{
         modal: "" ,
         modalStyle : {}
    }})
}

    render() {
        return ( 
            <div className="container" id="timelinediv">
                <h3 className="sectiontitle">Streaming</h3>
                <div className="streamsection">
                    <div  id="rowvideostream">
                        <VideoStr/>
                        <VideoStr/>
                        <VideoStr/>
                        <VideoStr/>
                        <VideoStr/>
                    </div>
                </div>
                <h3 className="sectiontitle">Timeline</h3>
                <div className="timelinesection">
                    <div className="row"  id="rowtimeline">
                        <div className="col-4"
                            onClick={(e)=>this.showModal()}>
                            <img src="https://picsum.photos/200" alt="" className="timelineimg"></img>
                        </div>
                        <div className="col-4">
                            <img src="https://picsum.photos/200" alt="" className="timelineimg"></img>
                        </div>
                        <div className="col-4">
                            <img src="https://picsum.photos/200" alt="" className="timelineimg"></img>
                        </div>
                        <div className="col-4">
                            <img src="https://picsum.photos/200" alt="" className="timelineimg"></img>
                        </div>
                        <div className="col-4">
                            <img src="https://picsum.photos/200" alt="" className="timelineimg"></img>
                        </div>
                    </div>
                </div>
                   <Modal show={this.state.modal} modalStyle={this.state.modalStyle} hide={this.hideModal}/> 
            </div>
        )
    }
}

export default Timeline;