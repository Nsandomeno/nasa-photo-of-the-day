import React, {useState} from "react";
import "../../App.css";

export function Heading(props){






    return (
        // JSX HERE
        <div className="headingDiv">
            <h1>NASA's Astronomy Photo of the Day: {props.title} </h1>
            <div className="drop-down"><h4> {props.date} </h4></div>
        </div>
    )
}