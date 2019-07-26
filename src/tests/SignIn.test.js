import React from "react";
import ReactDOM from "react-dom";
import LoginForm from '../SignIn/SignIn';

describe("LoginForm class component", () => {
    it("renders without crashing", () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <LoginForm />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
})