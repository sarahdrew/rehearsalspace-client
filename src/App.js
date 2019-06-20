import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Nav from './Nav/Nav';
import CreateListing from "./CreateListing/CreateListing";
import Listings from "./Listings/Listings";
import RegistrationForm from './RegistrationForm/RegistrationForm';
import Reserve from './Reserve/Reserve';
import SignIn from './SignIn/SignIn';
import config from "./config";
import ListingPage from './ListingPage/ListingPage'
//import ListingListItem from './ListingListItem/ListingListItem'
import ListingContext from './contexts/ListingContext';
import BookedListing from './BookedListing/BookedListing';
import './App.css'


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      listings: [],
      listing: '',
      booked: false,
      setListing: (listing) => {
        this.setState({ listing: listing });
      },
      setListings: (listings) => {
        this.setState({ listings: listings })
      },
      bookedListing: (listing) => {
        this.setState({ booked: true })
      }
    }


  }

  compononentDidMount() {
    this.loadData();

  }

  bookedListing(event) {
    //console.log(`booked it was clicked, yeehaw mama!`)
    event.preventDefault();
    // console.log(`this.props in Listing List Item`, this.props)
    this.props.setState({ booked: true })
    this.props.history.push(`/booked-listing/`)
  }


  loadData() {
    fetch(`${config.API_ENDPOINT}/listings`)
      .then(res => {

        return res;
      })
      .then(res => res.json())
      .then(responseJson => {
        // console.log(`in App.js responseJson to put on the page: `, responseJson)
        return responseJson
      })
      .then(responseJson => {
        // console.log(`App response json in listings: `, { listings: responseJson })
        this.setState({ listings: responseJson })

      })

      .catch(error => {
        console.error({ error });
      });
  }


  render() {
    return (
      <div className="App" >

        <ListingContext.Provider value={this.state} >
          <nav><Nav /></nav>
          <main className='App'>

            <Route exact path='/' component={Listings} />
            <Route exact path='/listings' component={Listings} />
            <Route path={'/listings/:listingId'} component={ListingPage} />
            <Route path='/create-listing' component={CreateListing} />
            <Route path='/registration-form' component={RegistrationForm} />
            <Route path='/reserve' component={Reserve} />
            <Route path='/sign-in' component={SignIn} />
            <Route path='/booked-listing' component={BookedListing} />



          </main>
        </ListingContext.Provider>

      </div>

    );
  }

}
