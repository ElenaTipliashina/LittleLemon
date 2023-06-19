import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mainfood from './mainfood.jpg';
import greeksalad from './greeksalad.jpg';

function Main() {
  return (
    <main>
      <div className="main-container">
        <div className="section section-1">
          <div className="column-1">
            <h1 className="section-title">Little Lemon</h1>
            <h2 className="section-subtitle">Chicago</h2>
            <p className="section-text">Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link to="/reserve">
                <button className="section-button">Reserve a table</button>
            </Link>
            
          </div>
          
          <div className="section1-img">
            <img src={mainfood}  alt="Section 1 Image" />
          </div>
       </div>

       
   
</div>

    </main>
  );
}


 
export default Main;
