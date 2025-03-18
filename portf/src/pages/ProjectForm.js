import React from "react";
import './ProjectForm.css';
import RenderModel from '../RenderModel.tsx'; // Adjust the path as needed

function ProjectForm({title, imgUrl, body}){
  const isModel = imgUrl.includes('.glb')
    return(
      <div className="projectform">
        <div className="formParent">
          <div className="title">{title}</div>
          <div className="picture">
            {isModel ? <RenderModel modelPath={imgUrl}  /> :
            <img src={imgUrl} className='imgcss' alt=''></img>}
          </div>
          
        </div>
        <div className="body">{body}</div>
      </div>
    )
  };
  
  export default ProjectForm;