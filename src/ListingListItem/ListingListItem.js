import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NiceDate } from '../Utils/Utils'

export default class ListingistItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            booked: false,
        }
    }

    bookedListing(event) {
        event.preventDefault();
        console.log(this)
        this.setState({ booked: true })
        this.props.history.push(`/booked-listing/`)
    }
    render() {
        const { listing } = this.props
        return (
            <Link to={`/listings/${listing.id}`} className='ListingListItem'>
                <header className='ListingListItem__header'>
                    <h2 className='ListingListItem__heading'>
                        {listing.location}
                    </h2>
                    <p> Number of rooms available for rehearsal: {listing.size}</p>
                    <p> Description: {listing.description}</p>



                    <button className="button-container" onClick={this.bookedListing}>
                        Book it!
         </button>
                </header>

            </Link>
        )
    }
}



function ListingDate({ listing }) {
    return (
        <span className='ListingListItem__date'>
            <NiceDate
                date={listing.date_created}
            />
        </span>
    )
}




