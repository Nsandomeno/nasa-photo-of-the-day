import React, {useState} from "react";

export function Heading(props){






    return (
        // JSX HERE
        <div className="headingDiv">
            <h1>NASA's Astronomy Photo of the Day: {props.title} </h1>
            <h4> {props.date} </h4>
        </div>
    )
}