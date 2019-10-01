import React, { Component } from "react";


class Event extends Component {

    render() {
        return (
            <div className="card mb-3 eventcard"  id="">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={this.props.event.img} className="card-img" alt="..." />
                            </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{this.props.event.name}</h5>
                                <p className="card-text">
                                    Organizors : hani, susan ,abdel ,dawid , jenny, iji
                                    <br/>
                                    Participants : hani, susan ,abdel ,dawid , jenny, iji
                                    <br/>
                                    Description : {this.props.event.description}
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
        
        
        
