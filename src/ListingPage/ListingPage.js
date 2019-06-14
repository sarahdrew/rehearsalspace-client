import React, { Component } from 'react';
import ListingContext from '../contexts/ListingContext';
import ListingApiService from '../services/listing-api-service';
import { NiceDate, Hyph, Section } from '../Utils/Utils';

export default class ListingPage extends Component {
    static defaultProps = {
        match: { params: {} },
    }

    static contextType = ListingContext

    componentDidMount() {
        const { listingId } = this.props.match.params
        this.context.clearError()
        console.log(`componentdidmount listingId: `, listingId)
        ListingApiService.getListing(listingId)
            .then(this.context.setListing)
            .catch(this.context.setError)
    }

    componentWillUnmount() {
        this.context.clearListing()
    }

    renderListing() {
        const { listing } = this.context
        return <>
            <h2>{listing.location}</h2>
            <p>{listing.size}
                <Hyph />
                <ListingDescription listing={listing} />
                <NiceDate date={listing.date_created} />
            </p>
        </>

    }

    render() {
        const { error, listing } = this.context
        let content
        if (error) {
            content = (error.error === `Listing doesn't exist`)
                ? <p> Listing not found</p>
                : <p>There was an error </p>
        } else if (!listing.id) {
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
