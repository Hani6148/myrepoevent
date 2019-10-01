import React from "react"; 
 
 function SubButton(props) {
    return (
        <div className="subButton" onClick={props.onClick}> <a href=""><i className="fab fa-submit"></i><b>Create</b></a></div>
    
     )                                                                      
    
   }

   export default SubButton