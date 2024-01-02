import React from 'react';
import './Pravi.css';
import myVideo from './slike/video.mp4'; // Poskrbite, da je pot pravilna

function Home() {
    return (
      <div className="home-container">
        <div className="video-container">
          <video className="background-video" autoPlay loop muted playsInline>
            <source src={myVideo} type="video/mp4" />
            Vaš brskalnik ne podpira HTML5 video.
          </video>
          <div className="video-overlay">
            <h1>Dobrodošli pri Blaž Cesar s.p.</h1>
            <h2>Ponosni na naše delo, zagotavljamo najboljše storitve polaganja tal in sten že več kot desetletje.</h2>
          </div>
        </div>
        
      </div>
    );
  }
  
  export default Home;

