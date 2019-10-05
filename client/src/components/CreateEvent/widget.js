import React, { Component } from "react"

 class Upload extends Component {


showWidget=()=>{
    console.log("hani")
   var myWidget = window.cloudinary.createUploadWidget({
    cloudName: 'drjmxewag', 
    uploadPreset:'eventBook'}, (error, result) => {this.props.checkUploadResult(result)})
 
    myWidget.open()

}    
    
render(){


        

return(
    <div className="widget">
    <button className="cloudinary-button" onClick={this.showWidget} style={{backgroundColor: "#111e8f", borderRadius: "5px"}}>Banner</button>
    </div>
)


}



}


export default Upload


