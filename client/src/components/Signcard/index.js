import React from "react";
import "./Signcard.css"

export function SignButton(props) {
 return (
     <div className={props.provider}> <a href={`/auth/${props.provider == "Facebook" ? "facebook" : "google"}/`}><i className={`fab fa-${props.provider == "Facebook" ? "facebook" : "google"}`}></i> &nbsp;  &nbsp;Log in with {props.provider}</a></div>
 
  )                                                                      
 
}


export function SignWrap(props){

    return(
        <div className="wrap">
       {props.children}
       </div>
    )
}

export function InputWrap(props){

    return(
        <div className="inputWrap">{props.children}</div>
    )
}

export function Input(props){

    return(
        <input className="input" {...props}/>
    )
}

export function SubButton() {
    return (
        <div className="subButton"> <a href="/api/sign/googlesign"><i class="fab fa-submit"></i><b>Submit</b></a></div>
    
     )                                                                      
    
   }
   