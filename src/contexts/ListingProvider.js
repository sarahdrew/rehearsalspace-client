import React, { Component } from 'react';
import ListingContext from './ListingContext'

export class ListingProvider extends Component {

    state = {

        error: null,
    };


    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    setListing = listing => {
        this.setState({ listing })
    }



    render() {

        return (
            <ListingContext.Provider>
                {this.props.children}
            </ListingContext.Provider>
        )
    }
}
