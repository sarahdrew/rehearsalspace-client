import React, { Component } from 'react';
import ListingContext from '../contexts/ListingContext';
import ListingApiService from '../services/listing-api-service';
import { Section } from '../Utils/Utils';
// import ListingPage from '../ListingPage/ListingPage'
import LoadingPage from '../LoadingPage/LoadingPage';
import ListingListItem from '../ListingListItem/ListingListItem'
import './Listings.css'


export default class Listings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    static defaultProps = {
        onDeleteNotes: () => { }
    }

    static contextType = ListingContext

    handleClickDelete = e => {
        e.preventDefault();
        const listingId = this.props.id;
    }

    componentDidMount() {
        ListingApiService.getAllListings()
            .then(data => { console.log(data); this.context.setListings(data); this.setState({ loading: false }) })
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
            this.state.loading ? <LoadingPage /> :
                <>
                    <div className="explanation">
                        <h2>RehearsalSpace Listings</h2>
                        <h3>Find a space in your city to use for rehearsal!</h3>
                        <p>RehearsalSpace is a site for independent performers to find spaces in their city to practice their craft.</p>
                    </div>
                    <div>
                        <Section list className='ListingsListPage'>
                            {error ? <p> There was an error, try again</p>
                                : this.renderListings()}

                        </Section>
                    </div>
                </>

        )
    }
}
