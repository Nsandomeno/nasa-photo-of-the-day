import React, {useState} from "react";
import "../../../src/App.css";

export function MainImg(props){




    return(
        // JSX HERE
        <div className="mainImgDiv">
            <img src={props.hdurl} />
        </div>


    )
}