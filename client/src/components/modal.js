import React, { Component } from "react";
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { MdInsertComment, MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import Axios from "axios"


class Modal extends Component {
    state = {
        user: {},
        value: "",
    }

    componentDidMount() {
        this.setState({ user: this.props.user })
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }
    postComment = (e) => {
        e.preventDefault();
        Axios.post("/api/comment/create", {
            text: this.state.value,
            data: this.props.id,
            user: this.state.user._id
        }).then(res =>
            this.props.getComments()
        )
    }


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
                                        <img src={this.props.src} className="modalimg" />
                                        <h1 className="likes"><FaHeart className="likesic" /><span className="likesicn">20</span><FaHeartBroken className="dislikesic" /><span className="dislikesicn">3</span></h1>
                                    </div>
                                    <div className="col-5">
                                        <div className="container" id="cmtdiv">
                                            <div className="row">
                                                <h3 className="sectiontitle">Comments</h3>
                                            </div>

                                            <div className="row" id="commentsrow">
                                                <div className="container" id="commentscontainer">

                                                {this.props.comments.map(ele => {
                                                        return(
                                                            <div className="row" id="commentrow">
                                                            <div className="col-3" style={{ paddingRight: "0px" }}>

                                                                <img src={ele.user.photo} className="friendimg img-thumbnail rounded-circle" alt="..." />

                                                            </div>
                                                            <div className="col-9 d-table" style={{ paddingLeft: "0px" }}>
                                                                <div class="card card-body d-table-cell align-middle " style={{ border: "none" }}>
                                                                    <p className="comment">{ele.text}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        )
                                                    })}
                                                    
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-group mb-3">
                                                    <input type="text" 
                                                    className="form-control" 
                                                    placeholder="Comments..." 
                                                    aria-label="Comments" 
                                                    aria-describedby="button-addon2"
                                                    value={this.state.value}
                                                    onChange={this.handleChange} />
                                                    <div className="input-group-append" />
                                                    <button className="btn btn-outline-secondary" 
                                                    type="button" 
                                                    id="button-addon2"
                                                    onClick={this.postComment}
                                                    ><MdInsertComment /></button>
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


        )
    }
}

export default Modal;