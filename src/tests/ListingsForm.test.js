import React from "react";
import ReactDOM from "react-dom";
import ListingsForm from "../ListingsForm/ListingsForm";

describe("ListingsForm class component", () => {
    it("renders without crashing", () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <ListingsForm />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
})