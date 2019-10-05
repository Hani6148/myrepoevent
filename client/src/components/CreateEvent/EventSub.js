import React from "react"; 
 
 function SubButton(props) {
    return (
        <div className="subButton" style={{backgroundColor: "#111e8f"}} onClick={props.onClick}> <a href=""><i className="fab fa-submit"></i><b>Create</b></a></div>
    
     )                                                                      
    
   }

   export default SubButton