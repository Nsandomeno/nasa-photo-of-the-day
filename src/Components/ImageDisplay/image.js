import React, {useState} from "react";
import styled from 'styled-components';

export function MainImg(props){

    const ImgDisplayDiv = styled.div`
        width: 80%;
        padding: 5px;
        display: flex;
        margin-left: 10%;
        align-items: center;
        justify-content: center;
        background: #0B3D91;
        box-shadow: 5px 10px #FC3D21;
        border-radius: 25px;
        
    `;

    const NasaPhoto = styled.img`
        width: 75%;
        height: 80%;
        text-align: center;
        border-radius: 50px;
        margin: 2.5%;


    
    `;



    return(
        // JSX HERE
        <ImgDisplayDiv>
            <NasaPhoto src={props.hdurl} />
        </ImgDisplayDiv>


    )
}