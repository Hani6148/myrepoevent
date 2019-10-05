import React, { Component } from "react";
import Widget from "../CreateEvent/widget"
import "./CreateEvent.css"

class Banner extends Component {

  
    



render(){
    return (
        
      <div className="Banner" style={{backgroundImage:`url(${this.props.image})`,backgroundSize:"contain",backgroundRepeat:"no-repeat", backgroundPosition: "center"}}>
        <Widget checkUploadResult={this.props.checkUploadResult} />
      </div>
    );
  }
}


  export default Banner