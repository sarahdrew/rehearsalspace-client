import React from "react";
import ReactDOM from "react-dom";
import Listings from "../Listings/Listings";
import ListingContext from '../contexts/ListingContext';

describe("Listings class component", () => {
    it("renders without crashing", () => {
        const div = document.createElement('div');

        ReactDOM.render(

            <ListingContext.Provider value={{ error: "" }}><Listings /></ListingContext.Provider>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
})