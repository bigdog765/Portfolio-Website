import React from "react";
import './Projects.css';
import  ProjectForm from './ProjectForm.js';
import pic from '../assets/dalle-code.png';
function Projects() {
    
    return(
      <div className="background-sh">
        <div className="text-parent">
          <div className="title-project">PROJECTS</div>
          <div className="subh-1">SOFTWARE RELATED PROJECTS
            <ProjectForm title="Recipe Selection Screen using Spoonacular's API"
            imgUrl= {pic}
            body= 'test body'/>
          </div>
        </div>
      </div>
    )
  };
  
  export default Projects;