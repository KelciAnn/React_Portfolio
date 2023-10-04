import React from "react";
import database from '../Imgs/database.png';
import python from '../Imgs/python.png';
import react from '../Imgs/react.png';
import './style.css';

const DevFocus = () =>{
    return(
        <>
          
          <div id="dev_focus">
            <h1>Development Focus</h1>
          </div>

          <div className="photos">
            <img src={react} alt="React logo" className="photo_width"/>
            <img src={database} alt="Database logo" className="photo_width"/>
            <img src={python} alt="Python Logo" className="photo_width"/>
          </div>

          <div className="dev_desc">
                <p>Front-end</p>
                <p>Back-end</p>
                <p>Python</p>
          </div>
        </>
    )
}
export default DevFocus;
