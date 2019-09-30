import React, { Component } from "react";


class Event extends Component {

    render() {
        return (
            <div className="card mb-3 eventcard"  id="">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="https://picsum.photos/200" className="card-img" alt="..." />
                            </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Bootcamp graduation</h5>
                                <p className="card-text">
                                    Organizors : hani, susan ,abdel ,dawid , jenny, iji
                                    <br/>
                                    Participants : hani, susan ,abdel ,dawid , jenny, iji
                                    <br/>
                                    Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate.
                                </p>
                                <p className="card-text"><small className="text-muted">Created 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        }
        
        export default Event;
        
        
        
