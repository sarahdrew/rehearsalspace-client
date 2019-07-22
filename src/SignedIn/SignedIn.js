import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './SignedIn.css';

export default class SignedIn extends Component {
    render() {
        return (

            <div className="signed-in">
                <h2>Successfully signed in!</h2>
                <Link to="/">Check out rehearsal spaces</Link> |
                <Link to="/create-listing"> Offer up your rehearsal space by creating a listing </Link>

            </div>
        )
    }
}