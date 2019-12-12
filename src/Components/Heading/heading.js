import React, {useState} from "react";
import styled from 'styled-components';


export function Heading(props){
    
    const HeadDiv = styled.div`
        margin-bottom: 2.5%;
        text-align: center;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #a7adba;
    `;

    const HeadTitle = styled.h1`
        margin-top: 2.5%;
        margin-bottom: 2.5%;
        color: #FC3D21;
    `;

    const HeadDate = styled.h4`
        margin-bottom: 2.5%;
        color:  #0B3D91;
        
    
    `;






    return (
        // JSX HERE
        <HeadDiv>
            <HeadTitle>NASA's Astronomy Photo of the Day: {props.title} </HeadTitle>
            <div className="drop-down"><HeadDate> {props.date} </HeadDate></div>
        </HeadDiv>
    )
}