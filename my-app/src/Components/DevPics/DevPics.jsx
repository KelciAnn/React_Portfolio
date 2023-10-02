import React from "react";
import codingScreen from '../Imgs/coding_screen.jpg';
import binary from '../Imgs/binary_code.jpg';
import computerCode from '../Imgs/computer_code.jpg';
import FrontEnd from '../Imgs/UI_frontend_backend.jpg';
import './style.css';

const DevPics = () =>{
    return(
        <div id="dev_container">
            <img src={codingScreen} alt="Screen of Code" id='right_img'className='pictures' />
            <img src={binary} alt="Binary Code" id='left_img' className='pictures'/>
            <img src={computerCode} alt="Screen of Code" id='top_img'className='pictures'/>
            <img src={FrontEnd} alt="Coding Description" id='bottom_img'className='pictures'/>
        </div>
    )
}
export default DevPics;
