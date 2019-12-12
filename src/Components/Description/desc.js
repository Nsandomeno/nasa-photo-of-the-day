import React, {useState} from "react";
import styled from "styled-components";


export function Description(props){

    const DescDiv = styled.div`
        width: 60%;
        margin-top: 2.5%;
        margin-bottom: 2.5%;
        margin-left: 20%;
        margin-right: 20%;
        background: grey;
        border-radius: 40px;   
        box-shadow: 5px 10px #0B3D91; 
    `;

    const DescPara = styled.p`
        padding: 5%;
        color: #0B3D91;
        text-align: center;
        font-size: 1.2rem;

    
    `;


    return(
        // JSX HERE
        <DescDiv>
            <DescPara>{props.desc}</DescPara>
        </DescDiv>
    )
}
