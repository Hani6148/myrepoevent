import React, { Component } from "react";
import { IoIosSearch, IoIosLogOut, IoIosNotifications } from "react-icons/io";
import logo from "../images/logo.png"
import { Dropdown } from 'semantic-ui-react'
import Axios from "axios"
import history from "../history"



class Nav extends Component {

    state = {

        invites: [],
        events:[]
    }

    componentDidMount() {
        setTimeout(() => {
            console.log("here starts the nav", this.props.current)
            Axios.get("/api/invite/" + this.props.current._id).then(res => {
                console.log("the invites I need", res.data)
                var invites = res.data.map(invite => {
                    return {
                        key: invite.event._id,
                        text: invite.event.name,
                        value: invite._id,
                        image: { avatar: true, src: invite.event.img },
                        onClick: (event, data) => {
                            history.push("/main/invite/" + data.value)

                        }
                    }

                })
                this.setState({ invites: invites })
            })

            Axios.get("/api/event/public/all").then(res => {
               console.log(res)
                var events = res.data.map(event => {
                    return {
                        key: event._id,
                        text: event.name,
                        value: event._id,
                        image: {avatar: true, src: event.img },
                        onClick: (event, data) => {
                            history.push("/main/publi/" + data.value)

                        }
                    }

                })
                this.setState({ events: events })
            })

        }, 1000);


    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg ">
                <a href="/main" id="logo">
                    <img src={logo} width="30" height="30" alt="logo" />
                </a>
                <a className="navbar-brand" id="brand" href="/main">Eventbook</a>
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


                        
                        <Dropdown
                            
                            className='icon'
                            floating
                            labeled
                            icon='world'
                            options={this.state.events}
                            search
                            text="Public Events"
                        />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" id="logoutButton" onClick={(e) => { e.preventDefault(); window.location = "/auth/google/logout" }}> <IoIosLogOut className="searchicon" /></button>
                    </form>
                </div>
            </nav>



        )
    }
}

export default Nav