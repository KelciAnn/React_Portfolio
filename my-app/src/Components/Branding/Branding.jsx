import React from "react";
import confluence from "../Imgs/branding/confluence.png";
import python from "../Imgs/branding/python.png";
import database from "../Imgs/branding/database.png";
import google from "../Imgs/branding/google-plus.png";
import slack from "../Imgs/branding/slack.png";
import react from "../Imgs/branding/react.png";
import javascript from "../Imgs/branding/javascript.png";
import nodejs from "../Imgs/branding/nodejs.png";
import github from "../Imgs/branding/github.png";
import "./style.css";

const Branding = () => {
  return (
    <>
      <div id="tech_header">
        <h1>Technologies</h1>
      </div>

      <div className="brand_background">
        <img src={react} alt="React" className="icon-color" />
        <img src={database} alt="MongoDB" className="icon-color" />
        <img src={javascript} alt="JavaScript" className="icon-color" />
        <img src={google} alt="G-Suites" className="icon-color" />
        <img src={nodejs} alt="Node JS" className="icon-color" />
        <img src={python} alt="Python" className="icon-color" />
        <img src={confluence} alt="Confluence" className="icon-color" />
        <img src={slack} alt="Slack" className="icon-color" />
        <img src={github} alt="github" className="icon-color" />
      </div>
    </>
  );
};
export default Branding;
