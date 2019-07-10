import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class SignedIn extends Component {
    render() {
        return (

            <>
                <Link to="/">Home</Link> |
                <Link to="/create-listing"> Create Listing </Link>
                <h2>Successfully signed in!</h2>

            </>
        )
    }
}