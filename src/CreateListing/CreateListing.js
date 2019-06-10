import React, { Component } from 'react';
import config from "../config";
import ApiContext from "../ApiContext";

export default class CreateListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            size: 0,
            key: false
        }
    }

    updateListings(city, size, key) {
        this.setState({ city, size, key })
    }
    static defaultProps = {
        history: {
            push: () => { }
        }
    };
    static contextType = ApiContext;

    handleSubmit = event => {
        event.preventDefault();
        const listing = {
            city: event.target["city"].value,
            size: event.target["size"].value,
            key: event.target["key"].value
        };
        fetch(`${config.API_ENDPOINT}/listings`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(listing)
        })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(e => Promise.reject(e));
                }
                return response.json()
            })
            .then(listing => {
                this.context.addListing(listing);
                this.props.history.push(`/listings/${listing.id}`)
            })
            .catch(error => {
                console.error({ error })
            })
    }

    render() {
        return (
            <section className="create-listing">
                <h1>Offer your space</h1>
                <div>
                    <label for="city">City:</label>
                    <input placeholder='Chicago' type="text" name='city' id='city' />
                </div>
                <div>
                    <label for="size">Size:</label>
                </div>
                <div>
                    <p><input type="radio" name="size" value="1" /> 1 room
                                    <input type="radio" name="size" value="2" /> 2 rooms
                                        <input type="radio" name="size" value="3" /> 3+ rooms </p>
                </div>
                <div>
                    <label for="username">Key/passcode needed:</label>
                    <input type="radio" name='key' id='yes' />Yes
                                            <input type='radio' name='key' id='no' />No
            </div>

                <button type='submit'>List my space</button>
            </section>
        )
    }
}