import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Nav from './Nav/Nav';
import CreateListing from "./CreateListing/CreateListing";
import Listings from "./Listings/Listings";
import RegistrationForm from './RegistrationForm/RegistrationForm';
import SignIn from './SignIn/SignIn';
import ListingPage from './ListingPage/ListingPage'
import ListingContext from './contexts/ListingContext';
import SignedIn from './SignedIn/SignedIn'
import './App.css'


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      listings: [],
      listing: '',
      setListing: (listing) => {
        this.setState({ listing: listing });
      },
      setListings: (listings) => {
        this.setState({ listings: listings })
      },

    }
  }


  handleDeleteListing = listingId => {
    this.setState({
      listings: this.state.listings.filter(listing => listing.id !== listingId)
    })
  }

  render() {


    return (
      <div className="App" >
        <html lang="en">

          <ListingContext.Provider value={this.state} >
            <head>
              <style>
                @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
</style>

            </head>
            <nav><Nav /></nav>
            <main className='App'>

              <Route exact path='/' component={Listings} />
              <Route exact path='/listings' component={Listings} />
              <Route path={'/listings/:listingId'} component={ListingPage} />
              <Route path='/create-listing' component={CreateListing} />
              <Route path='/registration-form' component={RegistrationForm} />
              <Route path='/sign-in' component={SignIn} />
              <Route path='/signed-in' component={SignedIn} />



            </main>
          </ListingContext.Provider>
        </html>
      </div>
    )


  }

}

