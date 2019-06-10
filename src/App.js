import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Nav from './Nav/Nav';
import CreateListing from "./CreateListing/CreateListing";
import Listings from "./Listings/Listings";
import RegistrationForm from './RegistrationForm/RegistrationForm';
import Reserve from './Reserve/Reserve';
import SignIn from './SignIn/SignIn';
//import ApiContext from "../ApiContext";
import config from "./config";



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      listing: [],
    }
  }

  compononentDidMount() {
    this.loadData();
  }


  loadData() {
    fetch(`${config.API_ENDPOINT}/folders`)
      .then(res => {

        return res;
      })
      .then(res => res.json())
      .then(folders => {

        this.setState({ folders })

      })

      .catch(error => {
        console.error({ error });
      });
  }

  // handleAddListing = listing => {
  //     this.setState({
  //       listings: [...this.state.listing, folder]
  //     });
  //   };

  render() {
    return (
      <div className="App" >
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

