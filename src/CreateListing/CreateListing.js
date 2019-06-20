import React, { Component } from 'react';
import config from "../config";
import ApiContext from "../ApiContext";
import ListingsForm from '../ListingsForm/ListingsForm';

export default class CreateListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            size: '',
            description: ''
        }
    }

    updateListings(city, size, description) {
        this.setState({ city, size, description })
    }
    static defaultProps = {
        history: {
            push: () => { }
        }
    };
    static contextType = ApiContext;


    addListing = listing => {
        this.setState({
            listings: [...this.state.listing, listing]
        });
    };

    handleSubmit = event => {
        // console.log(`handling the submit`)
        event.preventDefault();
        const listing = {
            location: event.target["location"].value,
            size: event.target["size"].value,
            description: event.target["description"].value
        };

        console.log(`config.API_ENDPOINT: `, config.API_ENDPOINT)
        fetch(`${config.API_ENDPOINT}/api/listings`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
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
                this.props.history.push(`/api/listings/`)
            })
            .catch(error => {
                console.error({ error })
            })
    }

    render() {
        return (
            <section className="create-listing">
                <h1>Offer your space</h1>
                <ListingsForm onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label htmlFor="location">Location:</label>
                        <input placeholder='Chicago'
                            type="text"
                            name='location'
                            id='location'
                            onChange={event => this.updateListings(event.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="size">Size:</label>
                        <p><input type="radio" name="size" value="1" /> 1 room
                                    <input type="radio"
                                name="size"
                                value="2"
                                onChange={event => this.updateListings(event.target.value)} /> 2 rooms
                                        <input type="radio" name="size" value="3"
                                onChange={event => this.updateListings(event.target.value)} /> 3+ rooms </p>
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <input type="text" name='description' id='description' placeholder="A gorgeous classroom equipped with chairs, electrical outlets and bathroom down the hall"
                            onChange={event => this.updateListings(event.target.value)} />
                    </div>

                    <button type='submit'>List my space</button>
                </ListingsForm>
            </section>
        )
    }
}