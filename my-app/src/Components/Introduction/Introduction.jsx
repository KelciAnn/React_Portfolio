import React from 'react';
import './style.css';
import github from '../Imgs/github.png';
import linkedin from '../Imgs/linkedin-logo.png';
import gmail from '../Imgs/gmail-logo.png';

const Introduction = () =>{
    return(

        <div className='container-fluid'>
            <div id='circle'></div>
            <h1 id='intro_h'>Hello, I am Kelci</h1>
            <p id='intro_p'>Highly Enthusiastic, Driven, Awesome Fullstack Developer</p>

            <div className='icons_link'>
               <a href="https://github.com/KelciAnn"><img src={github}alt="Github Icon" className='icons'/></a>
               <a href="https://www.linkedin.com/in/kelci-fowler/"><img src={linkedin}alt="Linkedin Icon" className='icons'/></a>
               <a href="fowlerkelci@gmail.com"><img src={gmail}alt="G-mail Icon" className='icons'/></a>
            </div>
        </div>
    )
}
export default Introduction;
