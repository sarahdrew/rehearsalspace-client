import React from "react";


export default function ListingsForm(props) {
    const { className, ...otherProps } = props;
    return (
        <form
            className={["Listings-form", className].join(" ")}
            action="#"
            {...otherProps}
        />
    );
}
