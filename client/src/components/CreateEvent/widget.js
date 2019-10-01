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
    <button className="cloudinary-button" onClick={this.showWidget}>Banner</button>
    </div>
)


}



}


export default Upload


