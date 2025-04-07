import React from "react";
import './ProjectForm.css';
import RenderModel from '../RenderModel.tsx'; // Adjust the path as needed

function ProjectForm({title, imgUrl, subtitle, desc, link}){
  const isModel = imgUrl.includes('.glb')
    return(
      <div className="projectform">
        <div className="title-picture">
          <div className="title">{title}</div>
          <div className="subtitle">{subtitle}</div>
          <div className="picture">
            {isModel ? <RenderModel modelPaths={[imgUrl]} height={500} width={500} scale={0.5} yOffset={-2.25} /> :
            <img src={imgUrl} className='imgcss' alt=''></img>}
          </div>
          
        </div>
        <div className="project-body">
          <div className="project-link">
            <a href={link} target="_blank" rel="noopener noreferrer">
            {link}</a>
          </div>
          <br></br>
          <div className="project-desc">{desc}</div>
          
        </div>
      </div>
    )
  };
  
  export default ProjectForm;