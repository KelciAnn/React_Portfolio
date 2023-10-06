import React from "react";
import mdFile from "../Imgs/md_file.png";
import "./style.css";

const Projects = () => {
  return (
    <div>
      <div className="project_contain">
        <h1 id="project_header">Project Gallery</h1>
        <p id="project_para">Check out my work!</p>
      </div>

      <div className="projects_ss project_wh">
        <div>
          <a
            href="https://github.com/KelciAnn/fullTasck#readme"
            className="project_links"
          >
            <img src={mdFile} alt="Read Me Icon" className="project_imgs" />
          </a>

          <p className="project_paras">Front-End</p>
        </div>

        <div>
          <a
            href="https://github.com/KelciAnn/AzEntertainment/tree/main#readme"
            className="project_links"
          >
           
            <img src={mdFile} alt="Read Me Icon" className="project_imgs" />
          </a>
          <p className="project_paras">Fullstack App</p>
        </div>

        <div>
          <a
            href="https://github.com/KelciAnn/VanLife#readme"
            className="project_links"
          >
            <img src={mdFile} alt="Read Me Icon" className="project_imgs" />
          </a>
          <p className="project_paras">Responsive Web Page</p>
        </div>
      </div>
    </div>
  );
};
export default Projects;
