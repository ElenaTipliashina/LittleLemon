import React from "react";
import restaurant from './restaurant.jpg';

function Footer(){
    return(
        <div>
        <h2>Footer</h2>
        <p>Some more text goes here.</p>
        <img src={restaurant} alt="Image Footer" />
        </div>
    )
}

export default Footer