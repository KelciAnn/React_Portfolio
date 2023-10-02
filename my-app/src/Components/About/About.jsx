import React from "react";
import profilePic from '../Imgs/profile_pic.jpg';
import './style.css';

const About = () =>{
    return(
        < >
            
            <div id="about_section">
             
             <div id="about_me">
             <h1 id="header_tag"><div id="circle_animation"></div>About Kelci Fowler </h1>
             <p>
                An overly enthusiastic and diven fullstack developer. 
                Working best in Front-end React development along with 
                MongoDB back-end. Expanding into Python development. In love 
                with problem solving and technology inovations.
            </p>
             </div>
      

            <img src={profilePic} alt="Me" id="profile_pic"/>
 
           
            </div>
          

        </>
        
    )
}
export default About;
