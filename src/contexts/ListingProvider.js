import React, { Component } from 'react';
import ListingContext from './ListingContext'

export class ListingProvider extends Component {

    state = {
        // listing: nullListing,
        error: null,
    };

    // const nullListing = {
    //     location: '',
    //     size: '',
    //     description: ''
    // }
    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    setListing = listing => {
        // console.log(`testing listing setListing `)
        this.setState({ listing })
    }



    // clearListing = () => {
    //     this.setListing(nullListing)

    // }


    render() {

        return (
            <ListingContext.Provider>
                {this.props.children}
            </ListingContext.Provider>
        )
    }
}
