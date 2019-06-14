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
import ListingPage from './ListingPage/ListingPage'
//import ListingListItem from './ListingListItem/ListingListItem'
import ListingsListProvider from './contexts/ListingsListProvider';
import BookedListing from './BookedListing/BookedListing';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      listings: [],

    }
  }

  compononentDidMount() {
    this.loadData();
    this.backHome();
  }

  backHome() {
    console.log(`back home pushed`)
    console.log(`booked listing props`, this.props)
    this.props.history.push(`/api/listings/`)
  }


  loadData() {
    fetch(`${config.API_ENDPOINT}/listings`)
      .then(res => {

        return res;
      })
      .then(res => res.json())
      .then(responseJson => {
        console.log(`in App.js responseJson to put on the page: `, responseJson)
        return responseJson
      })
      .then(responseJson => {
        console.log(`App response json in listings: `, { listings: responseJson })
        this.setState({ listings: responseJson })

      })

      .catch(error => {
        console.error({ error });
      });
  }


  render() {
    return (
      <div className="App" >
        <ListingsListProvider>
          <nav><Nav /></nav>
          <main className='App'>

            <Route exact path='/' component={Listings} />
            <Route exact path='/listings' component={Listings} />
            {/* <Route path={'/listings/:listingId'} component={ListingPage} /> */}
            <Route path='/create-listing' component={CreateListing} />
            <Route path='/registration-form' component={RegistrationForm} />
            <Route path='/reserve' component={Reserve} />
            <Route path='/sign-in' component={SignIn} />
            <Route path='/bookedListing' component={BookedListing} />



          </main>
        </ListingsListProvider>
      </div>

    );
  }

}

