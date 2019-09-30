import React, { Component } from "react";
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { MdInsertComment,MdNavigateNext,MdNavigateBefore } from "react-icons/md";

class Modal extends Component {

    render() {
        return (

            <div className={`modal fade ${this.props.show}`} id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" ariaHidden="false" style={this.props.modalStyle}>
                <div className="modalcontainer modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2"><MdNavigateBefore /></button>
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2"><MdNavigateNext /></button>
                            
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.props.hide()}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container" >
                                <div className="row">
                                    <div className="col-7">
                                        <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" className="modalimg" />
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
                                                        <button className="btn btn-outline-secondary" type="button" id="button-addon2"><FaHeartBroken  /></button>                                                        
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

export default Modal;