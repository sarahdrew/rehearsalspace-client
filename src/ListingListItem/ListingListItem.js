import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import { NiceDate } from '../Utils/Utils'
import ListingContext from '../contexts/ListingContext';

export default class ListingistItem extends Component {

    static contextType = ListingContext;


    render() {
        const { listing } = this.props
        return (
            <Link to={`/listings/${listing.id}`} className='ListingListItem'>
                <header className='ListingListItem__header'>
                    <h2 className='ListingListItem__heading'>
                        {listing.location}
                    </h2>
                    <p> This space has {listing.size} room(s).</p>
                    <p> Description: {listing.description}</p>

                </header>

            </Link>
        )
    }
}



// function ListingDate({ listing }) {
//     return (
//         <span className='ListingListItem__date'>
//             <NiceDate
//                 date={listing.date_created}
//             />
//         </span>
//     )
// }




