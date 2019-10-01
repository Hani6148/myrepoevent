import React, { Component } from "react";
import { IoIosSearch,IoIosLogOut } from "react-icons/io";
import logo from "../images/logo.png"

class Nav extends Component {
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
                    <form className="form-inline"  id="searchForm">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" id="searchButton"> <IoIosSearch className="searchicon" /></button>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" id="logoutButton" onClick ={(e)=>{e.preventDefault(); window.location ="/auth/google/logout"}}> <IoIosLogOut className="searchicon" /></button>
                    </form>
                </div>
            </nav>



        )
    }
}

export default Nav