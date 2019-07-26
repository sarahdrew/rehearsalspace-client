import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import ListingListItem from "../ListingListItem/ListingListItem";

describe("ListingListItem class component", () => {
    it("renders without crashing", () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <BrowserRouter>
                <ListingListItem />
            </BrowserRouter >,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
})