import React, { Component } from "react";
import { IoIosVideocam, IoMdImage } from "react-icons/io";
import { MdEvent } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
class Post extends Component {
    setState={
        selectedEvent: ""
    }




    showWidgetimg=()=>{
        console.log("hani")
       var myWidget = window.cloudinary.createUploadWidget({
        cloudName: 'drjmxewag', 
        
        uploadPreset:'eventBook'}, (error, result) => {this.props.checkUploadimg(result)})
        
     
        myWidget.open()
    
    }    

    showWidgetvid=()=>{
        console.log("hani")
       var myWidget = window.cloudinary.createUploadWidget({
        cloudName: 'drjmxewag', 
        sources: [ 'local', 'url'],
        uploadPreset:'eventBook'}, (error, result) => {this.props.checkUploadvid(result)})
     
        myWidget.open()
    
    }    

    render() {
        return (
            <div className="container" id="postdiv">
                <h3 className="sectiontitle">Post</h3>
                <div className="row justify-content-md-center">
                    <button type="button" className="btn btn-outline-success postbtns" onClick={this.showWidgetvid}><IoIosVideocam className="posticons" /></button>
                    <button type="button" className="btn btn-outline-success postbtns" onClick={this.showWidgetimg}><IoMdImage className="posticons" /></button>
                    <button type="button" 
                    className="btn btn-outline-success postbtns"
                    onClick={(e)=>{e.preventDefault(); window.location = "/main/createEvent"}}
                    ><MdEvent className="posticons" /></button>
                </div>
              
            </div>
        )
    }
}

export default Post;