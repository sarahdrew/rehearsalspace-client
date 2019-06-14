import React, { Component } from 'react'

export const nullListing = {
    location: '',
    size: '',
    description: ''
}

const ListingContext = React.createContext({
    listing: nullListing,
    size: '',
    description: '',
    error: null,
    setError: () => { },
    clearError: () => { },
    setListing: () => { },
    clearListing: () => { },

})

export default ListingContext

export class ListingProvider extends Component {
    state = {
        listing: nullListing,
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



    clearListing = () => {
        this.setListing(nullListing)

    }


    render() {
        const value = {
            listing: this.state.listing,

            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setListing: this.setListing,

            clearListing: this.clearListing,
            addListing: this.addListing,
        }
        return (
            <ListingContext.Provider value={value}>
                {this.props.children}
            </ListingContext.Provider>
        )
    }
}
