import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
// import components

import {Heading} from "./Components/Heading/heading.js";
import {MainImg} from "./Components/ImageDisplay/image.js";
import {Description} from "./Components/Description/desc.js";

// API Key = NO2hZKcn7dhqaUlC2Ck7fa3CH1nNCUMu7WR2ebqo
// Example API Request = https://api.nasa.gov/planetary/apod?api_key=NO2hZKcn7dhqaUlC2Ck7fa3CH1nNCUMu7WR2ebqo

function App() {
  const [nasaData, setNasaData] = useState("");

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=NO2hZKcn7dhqaUlC2Ck7fa3CH1nNCUMu7WR2ebqo`)
      .then(function(response){
        //console.log(response);
        //const nasaData = response.data;
        setNasaData(response.data)
      })
      .catch(function(error){
        console.log("This is an error from the NASA API:", error);
      })
  },[])




  return (
    <div className="App">
      
        <Heading title={nasaData.title} date={nasaData.date} />
     
      
        <MainImg hdurl={nasaData.hdurl} />
      
     
        <Description desc={nasaData.explanation} />
    

    </div>
  
  );
}

export default App;
