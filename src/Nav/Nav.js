import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Content from "./Content";
// import "./Nav.css";

// example of how to have nav bar toggle: { localStorage.getItem('tokenKey') ? 
//'<Link to="/">Create Listing</Link> | <Link to="/logout">Logout</Link>' 
//: '<Link to="/register">Register</Link> | 
//<Link to="/login">Login</Link>'}

export default class Nav extends Component {
    render() {
        return (
            <>
                <Link to="/">Home</Link> |
                <Link to="/registration-form"> Register for an Account</Link> |
                <Link to="/sign-in"> Sign In</Link> |
                <Link to="/create-listing"> Create Listing </Link>
            </>
        );
    }
}