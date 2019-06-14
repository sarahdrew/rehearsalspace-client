import React, { Component } from 'react';
import ListingsListContext from '../contexts/ListingsListContext';
import ListingApiService from '../services/listing-api-service';
import { Section } from '../Utils/Utils';
// import ListingPage from '../ListingPage/ListingPage'
import ListingListItem from '../ListingListItem/ListingListItem'


export default class Listings extends Component {
    static contextType = ListingsListContext

    // bookedListing() {
    //     render() {
    //         return
    //         <p>You've booked it</p>
    //     }
    // }



    componentDidMount() {
        this.context.clearError()
        ListingApiService.getAllListings()
            .then(data => { console.log(data); this.context.setListingsList(data); })
            .catch(this.context.setError)

    }

    renderListings() {
        const { ListingsList = [] } = this.context
        return ListingsList.map(listing =>
            <ListingListItem
                key={listing.id}
                listing={listing} />
        )
    }
    render() {
        const { error } = this.context
        return (
            <Section list className='ListingsListPage'>
                {error ? <p> There was an error, try again</p>
                    : this.renderListings()}

            </Section>

        )
    }
}
