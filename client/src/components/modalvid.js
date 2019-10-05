import React, { Component } from "react";
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { MdInsertComment, MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";




class ModalVid extends Component {
    state={
        user: {}
    }

    componentDidMount(){
        this.setState({user : this.props.user})
    }

    render() {
        return (

            <div className={`modal fade ${this.props.showvid}`} id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" ariaHidden="false" style={this.props.modalStylevid}>
                <div className="modalcontainer modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2"><MdNavigateBefore /></button>
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2"><MdNavigateNext /></button>

                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.props.hidevid()}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container" >
                                <div className="row">
                                    <div className="col-7 modalvideo">
                                        <Player
                                            fluid={false}
                                            height={300}
                                            width={"auto"}
                                            playsInline
                                            src={this.props.link}
                                        />
                                        <h1 className="likes"><FaHeart className="likesic" /><span className="likesicn">20</span><FaHeartBroken className="dislikesic" /><span className="dislikesicn">3</span></h1>
                                    </div>
                                    <div className="col-5">
                                        <div className="container" id="cmtdiv">
                                            <h3 className="sectiontitle">Comments</h3>
                                            <div className="commentsbox">
                                                <div className="row" id="comments">

                                                </div>
                                                <div className="row">
                                                    <div className="input-group mb-3">
                                                        <input type="text" className="form-control" placeholder="Comments..." aria-label="Comments" aria-describedby="button-addon2" />
                                                        <div className="input-group-append" />
                                                        <button className="btn btn-outline-secondary" type="button" id="button-addon2"><MdInsertComment /></button>
                                                        <button className="btn btn-outline-secondary" type="button" id="button-addon2"><FaHeart /></button>
                                                        <button className="btn btn-outline-secondary" type="button" id="button-addon2"><FaHeartBroken /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default ModalVid;