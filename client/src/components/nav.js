import React, { Component } from "react";
import { IoIosSearch, IoIosLogOut, IoIosNotifications } from "react-icons/io";
import logo from "../images/logo.png"
import { Dropdown } from 'semantic-ui-react'
import Axios from "axios"


class Nav extends Component {

    state={
        
        invites:[]
    }

    componentDidMount(){
        setTimeout(() => {
            console.log("here starts the nav",this.props.current)
            Axios.get("/api/invite/"+this.props.current._id).then(res => {
                console.log("the invites I need",res.data)
                var invites=res.data.map(invite=>{
                    return{
                        key:invite.event._id,
                        text:invite.event.name,
                        value:invite._id,
                        image: { avatar: true, src: invite.event.img},
                    }
                 
                })
                this.setState({invites:invites})
              })
        }, 1000);
      

    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg ">
                <a href="/" id="logo">
                    <img src={logo} width="30" height="30" alt="logo" />
                </a>
                <a className="navbar-brand" id="brand" href="/">Eventbook</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">

                    <form className="form-inline" id="searchForm">
                        <Dropdown

                            icon='add user'
                            floating

                            button
                            className='icon'
                        >
                            <Dropdown.Menu>
                                <Dropdown.Header content='Invitations' />
                                {this.state.invites.map((option) => (
                                    <Dropdown.Item key={option.value} {...option} />
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>

                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" id="searchButton"> <IoIosSearch className="searchicon" /></button>

                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" id="logoutButton" onClick={(e) => { e.preventDefault(); window.location = "/auth/google/logout" }}> <IoIosLogOut className="searchicon" /></button>
                    </form>
                </div>
            </nav>



        )
    }
}

export default Nav