import React, { Component } from 'react';
import ListingContext from '../contexts/ListingContext';
import ListingApiService from '../services/listing-api-service';
import { Section } from '../Utils/Utils';
// import ListingPage from '../ListingPage/ListingPage'
import ListingListItem from '../ListingListItem/ListingListItem'


export default class Listings extends Component {
    static contextType = ListingContext

    // bookedListing() {
    //     render() {
    //         return
    //         <p>You've booked it</p>
    //     }
    // }



    componentDidMount() {
        ListingApiService.getAllListings()
            .then(data => { console.log(data); this.context.setListings(data); })
            .catch(e => console.error(e))

    }

    renderListings() {
        const { listings = [] } = this.context
        return listings.map(listing =>
            <ListingListItem
                key={listing.id}
                listing={listing} />
        )
    }
    render() {
        const { error } = this.context
        return (
            <>
                <h2>RehearsalSpace Listings</h2>
                <h3>Find a space in your city to use for rehearsal!</h3>
                <p>RehearsalSpace is a site for independent performers to find spaces in their city to practice their craft.</p>
                <Section list className='ListingsListPage'>
                    {error ? <p> There was an error, try again</p>
                        : this.renderListings()}

                </Section>
            </>

        )
    }
}
