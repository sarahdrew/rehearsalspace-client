import React, { Component } from 'react';

export default class CreateListing extends Component {
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