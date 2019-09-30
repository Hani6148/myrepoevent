import React, { Component } from "react";

class VideoStr extends Component {

    render() {
        return ( 
            <div className="col-3 videostr" >
                <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/aVS4W7GZSq0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        )
    }
}

export default VideoStr;


