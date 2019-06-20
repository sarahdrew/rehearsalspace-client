import React, { Component } from 'react'
import ListingsListContext from './ListingsListContext';

export default class ListingsListProvider extends Component {
    state = {
        ListingsList: [],
        error: null,
    };

    setListingsList = ListingsList => {

        this.setState({ ListingsList })
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    render() {
        const value = {
            ListingsList: this.state.ListingsList,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setListingsList: this.setListingsList,
        }
        return (
            <ListingsListContext.Provider value={value}>
                {this.props.children}
            </ListingsListContext.Provider>
        )
    }
}
