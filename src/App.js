import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

import Nav from './Nav/Nav';
import CreateListing from "./CreateListing/CreateListing";
import Listings from "./Listings/Listings";
import RegistrationForm from './RegistrationForm/RegistrationForm';
import Reserve from './Reserve/Reserve';
import SignIn from './SignIn/SignIn';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <nav><Nav /></nav>
        <main className='App'>

          <Route exact path='/' component={Listings} />
          <Route path='/create-listing' component={CreateListing} />
          <Route path='/registration-form' component={RegistrationForm} />
          <Route path='/reserve' component={Reserve} />
          <Route path='/sign-in' component={SignIn} />



        </main>
      </div>

    );
  }

}

