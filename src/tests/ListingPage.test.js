import React from "react";
import ReactDOM from "react-dom";
import ListingPage from "../ListingPage/ListingPage";
import ListingContext from "../contexts/ListingContext";

beforeEach(() => {
    jest.resetModules();
});






describe("ListingPage class component", () => {
    it("renders without crashing", () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <ListingContext.Provider value={{ listing: { location: "Test Location", size: 3, description: "Test", amenities: "test" } }}>
                <ListingPage />
            </ListingContext.Provider>

            ,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
})