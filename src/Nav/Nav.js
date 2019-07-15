import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Content from "./Content";
import "./Nav.css";

export default class Nav extends Component {
    render() {
        return (

            localStorage.getItem('tokenKey') ? <>
                <ul className="NavList">
                    <li>< Link to="/" > Home</Link > |</li>
                    <li><Link to="/registration-form"> Register for an Account</Link> |</li>
                    <li><Link to="/sign-in"> Sign In</Link> |</li>
                    <li><Link to="/create-listing">Create Listing</Link></li>
                </ul></>
                :
                <>
                    <ul className="NavList">
                        <li><Link to="/create-listing">Create Listing</Link> |</li>
                        <li><Link to="/">Home</Link>
                        </li>
                    </ul>
                </>

        );
    }
}