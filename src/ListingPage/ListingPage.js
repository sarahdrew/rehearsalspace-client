import React, { Component } from 'react';
import ListingContext from '../contexts/ListingContext';
import ListingApiService from '../services/listing-api-service';
import { Section } from '../Utils/Utils';

export default class ListingPage extends Component {
    static defaultProps = {
        match: { params: {} },
    }


    static contextType = ListingContext

    componentDidMount() {
        const { listingId } = this.props.match.params
        console.log(`componentdidmount listingId: `, listingId)
        ListingApiService.getListing(listingId)
            .then(listing => this.context.setListing(listing))
            .catch(error => console.error(error))
    }

    // componentWillUnmount() {
    //     this.context.clearListing()
    // }

    renderListing() {
        const { listing } = this.context
        console.log(`renderListing this context`, this.context)
        return <>
            <h2>{listing.location}</h2>
            <p>This space has {listing.size} room(s).</p>
            <p>Description of the space:
                <ListingDescription listing={listing} />

            </p>
            <button className="button-container" onClick={this.bookedListing}>
                Book it!
         </button>
        </>

    }
    render() {
        console.log(`listingPage this: `, this);
        console.log(`listingPage context: `, this.context)
        const { listing } = this.context

        let content
        // if (error) {
        //     content = (error.error === `Listing doesn't exist`)
        //         ? <p> Listing not found</p>
        //         : <p>There was an error </p>
        // } 
        if (listing === undefined) {
            content = <div className='loading' />
        } else {
            content = this.renderListing()
        }
        return (
            <Section className='ListingPage'> {content} </Section>)
    }


}


function ListingDescription({ listing }) {
    return (
        <p className='ListingPage__description'>
            {listing.description}
        </p>
    )
}
