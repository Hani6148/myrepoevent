import React from "react";
import "./Logo.css"

function Logo(props) {
  return (
      <div className="logo"><img className="img" src={require('./moon.png')}/></div>
 
  );
}

export default Logo;
