import React from 'react';
import "./BookedListing.css";

export default class BookedListing extends React.Component {
    render() {
        return (
            <div className="BookedListing">
                <h2>You've booked this listing!</h2>
                <p>
                    <button className="backhome" onclick={() =>
                        this.props.backHome()}>Back to home</button>
                </p>
            </div >
        )
    }

}