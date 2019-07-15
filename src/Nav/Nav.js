import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Content from "./Content";
// import "./Nav.css";

export default class Nav extends Component {
    render() {
        return (

            localStorage.getItem('tokenKey') ? <>
                < Link to="/" > Home</Link > |
    <Link to="/registration-form"> Register for an Account</Link> |
    <Link to="/sign-in"> Sign In</Link> | <Link to="/create-listing">Create Listing</Link>
            </> : <><Link to="/create-listing">Create Listing</Link> |
            <Link to="/">Home</Link></>

        );
    }
}