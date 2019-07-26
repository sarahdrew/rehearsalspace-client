import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListingContext from '../contexts/ListingContext';

export default class ListingistItem extends Component {

    static contextType = ListingContext;


    render() {
        const { listing } = this.props
        return (
            <div className="total-listing-item">
                <Link to={`/listings/${listing.id}`} className='ListingListItem'>
                    <div className="listing-content"><header className='ListingListItem__header'>
                        <h2 className='ListingListItem__heading'>
                            {listing.location}
                        </h2>
                    </header>
                        <div className="listing-item">
                            <p> This space has {listing.size} room(s).</p>
                            <p><b>Description:</b>  {listing.description}</p>
                            <p><b>Amenities:</b> {listing.amenities}</p>

                        </div>

                    </div>




                </Link>
            </div>
        )
    }
}




