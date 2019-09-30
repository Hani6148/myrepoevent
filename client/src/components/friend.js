import React, { Component } from "react";

class Friend extends Component {

    render() {
        return ( 
            <div className="col-4" id="">
                <img src="https://picsum.photos/200" className="friendimg img-thumbnail rounded-circle" alt="..." />
                <h1 className="friendname">name</h1>
            </div>
        )
    }
}

export default Friend;