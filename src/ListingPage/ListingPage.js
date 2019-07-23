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

        ListingApiService.getListing(listingId)
            .then(listing => this.context.setListing(listing))
            .catch(error => console.error(error))
    }


    renderListing() {
        const { listing } = this.context

        return <>
            <h2>{listing.location}</h2>
            <p>This space has {listing.size} room(s).</p>
            <p><b>Description of the space:</b>
                <ListingDescription listing={listing} />

            </p>
            <p> <b>Amenities of the space: </b>{listing.amenities}</p>

        </>

    }
    render() {

        const { listing } = this.context

        let content
        if (listing === undefined) {
            content = <div className='loading' />
        } else {
            content = this.renderListing()
        }
        return (
            <div className="listing-page">
                <Section className='ListingPage'> {content} </Section>
            </div>
        )
    }


}


function ListingDescription({ listing }) {
    return (
        <p className='ListingPage__description'>
            {listing.description}
        </p>
    )
}
