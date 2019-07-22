import React, { Component } from 'react';
import config from "../config";
import ApiContext from "../ApiContext";
import ListingsForm from '../ListingsForm/ListingsForm';
import TokenService from '../services/token-service';
import './CreateListing.css';

export default class CreateListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            size: '',
            description: '',
            outlets: false,
            microphone: false,
            stage: false,
            bathroom: false,
            open: false
        }
    }

    updateListings(city, size, description) {
        this.setState({ city, size, description })
    }
    // toggleOutlets(outlets) {
    //     this.setState({ outlets: true })
    // }
    // toggleMicrophone(microphone) {
    //     this.setState({ microphone: true })
    // }
    // toggleStage(stage) {
    //     this.setState({ stage: true })
    // }
    // toggleBathroom(bathroom) {
    //     this.setState({ bathroom: true })
    // }
    // toggleOpen(open) {
    //     this.setState({ open: true })
    // }


    static defaultProps = {
        history: {
            push: () => { }
        }
    };
    static contextType = ApiContext;


    addListing = listing => {
        console.log(listing)
        this.setState({
            listings: [...this.state.listing, listing]
        });
    };

    handleSubmit = event => {
        console.log(`handling the submit`)
        event.preventDefault();
        const listing = {
            location: event.target["location"].value,
            size: event.target["size"].value,
            description: event.target["description"].value,
            amenities: {
                outlets: event.target.outlets.checked,
                microphone: event.target.microphone.checked,
                stage: event.target.stage.checked,
                bathroom: event.target.bathroom.checked,
                open: event.target.open.checked
            }


        };

        console.log(`config.API_ENDPOINT: `, config.API_ENDPOINT)
        fetch(`${config.API_ENDPOINT}/api/listings`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `bearer ${TokenService.getAuthToken()}`
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
                <p>You can create your listing as a signed in user. Enter in your information on your space below and see if it matches the needs of a performer in your communitiy!</p>
                <ListingsForm onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label htmlFor="location">Location:</label>
                        <input placeholder='Chicago'
                            type="text"
                            name='location'
                            id='location'
                            onChange={event => this.updateListings(event.target.value)} />
                    </div>
                    <div className="field">
                        <label htmlFor="size">Size:</label>
                        <p><input type="radio" name="size" value="1" /> 1 room
                                    <input type="radio"
                                name="size"
                                value="2"
                                onChange={event => this.updateListings(event.target.value)} /> 2 rooms
                                        <input type="radio" name="size" value="3"
                                onChange={event => this.updateListings(event.target.value)} /> 3+ rooms </p>
                    </div>
                    <div className="field">
                        <label htmlFor="description">Description:</label>
                        <input type="text" name='description' id='description' placeholder="A gorgeous classroom equipped with chairs, electrical outlets and bathroom down the hall"
                            onChange={event => this.updateListings(event.target.value)} />
                    </div>
                    <div className="amenities-list">

                        <label htmlFor="amenities">Amenities:</label>
                        <input type='checkbox' name='outlets' /> outlets
                        <input type='checkbox' name='microphone' /> microphone
                        <input type='checkbox' name='stage' />stage
                        <input type='checkbox' name='bathroom' />bathroom



                    </div>

                    <button type='submit'>List my space</button>
                </ListingsForm>
            </section>
        )
    }
}