import React from "react";
import './Projects.css';
import  ProjectForm from './ProjectForm.js';

import projectData from '../assets/projects.json'
function Projects() {
    
    return(
      <div className="background-sh">
        <div className="text-parent">
          <div className="title-project">Projects</div>
          <div className="subt-project">Software Development</div>
          <div className="sfw-proj">
            {projectData.map((project, index) => (
              <ProjectForm
                key={index}
                title={project.title}
                subtitle={project.subtitle}
                imgUrl={project.imgUrl}
                desc={project.desc}
                link={project.link}
              />
            ))}
          </div>
          
        </div>
      </div>
    )
  };
  
  export default Projects;