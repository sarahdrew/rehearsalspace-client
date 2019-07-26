import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default class Nav extends Component {
    render() {
        return (

            <>
                <div className="Nav">
                    <img src={require('../small-microphone.png')} alt="rehearsalspae logo" />
                    <div className="nav-name">
                        REHEARSALSPACE
                    </div>
                    <div className="links">< Link to="/" > Home</Link > |
                        <Link to="/registration-form"> Register for an Account</Link> |
                        <Link to="/sign-in"> Sign In</Link> |
                        <Link to="/create-listing">Create Listing</Link></div>

                </div>
            </>




        );
    }
}