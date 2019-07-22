import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Content from "./Content";
import "./Nav.css";

export default class Nav extends Component {
    render() {
        return (

            localStorage.getItem('tokenKey') ? <>
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
                :
                <>
                    <div className="Nav">
                        <img src={require('../zoomed-in-icon.png')} alt="rehearsalspae logo" />
                        <div className="links"><Link to="/create-listing">Create Listing</Link> |
                            <Link to="/">Home</Link>
                        </div>
                    </div>

                </>

        );
    }
}