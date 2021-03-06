import React, { Component } from "react";
import Modal from "../components/modal";
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import ModalVid from "../components/modalvid"
import Axios from "axios"


class Timeline extends Component {
    state = {
        modal: "",
        modalvid: "",
        modalStyle: {},
        modalStylevid: {},
        modalsrc: "",
        modalsrcvid: "",
        selectedEvent: "",
        data: [],
        idfile: "",
        idfilevid: "",
        comments:[]
    }

    showModal = (e) => {
        e.preventDefault()
        var { src} = e.currentTarget
        var { id} = e.currentTarget
        Axios.get("/api/comment/getbyid/"+id).then(res=>{
            this.setState(prev => {
                return {
                    comments : res.data,
                    idfile: id,
                    modalsrc: src,
                    modal: "show",
                    modalStyle: { display: "inline-block", backgroundColor: 'rgba(52, 52, 52, 0.8)' }
                }
            })
        })
    }
    showModalvid = (e) => {
        e.preventDefault()
        var src = e.currentTarget.getAttribute("name")
        var id = e.currentTarget.getAttribute("id")
        Axios.get("/api/comment/getbyid/"+id).then(res=>{
            this.setState(prev => {
                return {
                    comments : res.data,
                    idfilevid: id,
                    modalsrcvid: src,
                    modalvid: "show",
                    modalStylevid: { display: "inline-block", backgroundColor: 'rgba(52, 52, 52, 0.8)' }
                }
            })
        })
    }
    hideModalvid = () => {
        this.setState(prev => {
            return {
                modalsrcvid: "",
                modalvid: "",
                idfilevid: "",
                modalsrcvid: "",
                modalStylevid: {}
            }
        })
    }
    hideModal = () => {
        this.setState(prev => {
            return {
                modalsrc: "",
                modal: "",
                modalStyle: {}
            }
        })
    }
    componentDidMount() {
        this.setState({ data: this.props.data })

    }
    getComments=()=>{
        Axios.get("/api/comment/getbyid/"+this.state.idfilevid).then(res=>{
            this.setState(prev => {
                return {
                    comments : res.data,
                }
                })
            })
    }
    getCommentsimg=()=>{
        Axios.get("/api/comment/getbyid/"+this.state.idfile).then(res=>{
            this.setState(prev => {
                return {
                    comments : res.data,
                }
                })
            })
    }

    render() {

        return (
            <div className="container" id="timelinediv">
                <h3 className="sectiontitle">Videos</h3>
                <div className="streamsection">
                    <div id="rowvideostream">
                        {this.state.data.map(ele => {
                            if (ele.type == "video") {
                                return (
                                    <div className="col-3 videostr" 
                                    key={ele._id}
                                    id={ele._id}
                                    name={ele.link}
                                    onClick={(e) => this.showModalvid(e)}>
                                        <Video style={{ height: "100px" }} >
                                            <source src={ele.link} />
                                        </Video>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
                <h3 className="sectiontitle">Images</h3>
                <div className="timelinesection">
                    <div className="row" id="rowtimeline">

                        {this.state.data.map(ele => {
                            if (ele.type == "image") {
                                return (
                                    <div className="col-4 d-table colimg "
                                        key={ele._id}
                                        >
                                        <div class="card card-body d-table-cell align-middle tm">
                                            <img className="mx-auto" src={ele.link} alt="" className="timelineimg"
                                            id={ele._id}
                                            onClick={(e) => this.showModal(e)}></img>
                                        </div>
                                        
                                    </div>
                                )
                            }
                        })}

                    </div>
                </div>
                <ModalVid showvid={this.state.modalvid} modalStylevid={this.state.modalStylevid} hidevid={this.hideModalvid} link={this.state.modalsrcvid} user={this.props.user} id={this.state.idfilevid} comments={this.state.comments} getComments={this.getComments}/>
                <Modal show={this.state.modal} modalStyle={this.state.modalStyle} hide={this.hideModal} src={this.state.modalsrc} user={this.props.user} id={this.state.idfile} comments={this.state.comments} getComments={this.getCommentsimg}/>
            </div>
        )
    }
}

export default Timeline;