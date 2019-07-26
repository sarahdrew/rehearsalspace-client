import React from "react";
import ReactDOM from "react-dom";
import CreateListing from "../CreateListing/CreateListing";

describe("CreateListing class component", () => {
    it("renders without crashing", () => {
        const div = document.createElement('div');

        ReactDOM.render(

            <CreateListing />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
})