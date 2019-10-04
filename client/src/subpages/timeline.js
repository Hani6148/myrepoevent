import React, { Component } from "react";
import VideoStr from "../components/videoStr";
import Modal from "../components/modal"
class Timeline extends Component {
    state={
        modal: "",
        modalStyle: {},
        modalsrc :"",
        selectedEvent : "",
        data: []
    }
showModal=(e)=>{
    e.preventDefault()
    var {src} = e.target
    console.log(src)
    this.setState(prev =>{return{
        modalsrc : src,
         modal: "show" ,
         modalStyle : {display: "inline-block", backgroundColor: 'rgba(52, 52, 52, 0.8)'}
}}
    
    )
}
hideModal=()=>{
    this.setState(prev =>{return{
        modalsrc : "",
         modal: "" ,
         modalStyle : {}
    }})
}
componentDidMount(){
    this.setState({data: this.props.data})

}


    render() {
     
        return ( 
            <div className="container" id="timelinediv">
                <h3 className="sectiontitle">Videos</h3>
                <div className="streamsection">
                    <div  id="rowvideostream">
                        
                    </div>
                </div>
                <h3 className="sectiontitle">Images</h3>
                <div className="timelinesection">
                    <div className="row"  id="rowtimeline">

                    {this.state.data.map(ele=>{
                        if(ele.type == "image"){
                            return(
                                <div className="col-4"
                                key={ele._id}
                                onClick={(e)=>this.showModal(e)}>
                                <img src={ele.link} alt="" className="timelineimg"></img>
                                </div>
                            )
                        }
                    })}
                       
                    </div>
                </div>
                   <Modal show={this.state.modal} modalStyle={this.state.modalStyle} hide={this.hideModal} src={this.state.modalsrc}/> 
            </div>
        )
    }
}

export default Timeline;