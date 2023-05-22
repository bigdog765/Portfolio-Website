import React from "react";
import './ProjectForm.css';

function ProjectForm({title, imgUrl, body}){
    return(
      <div className="formParent">
        <div className="title">{title}</div>
        <div className="picture">
          <img src={imgUrl} className='imgcss' alt=''></img>
        </div>
        <div className="body">{body}</div>
      </div>
    )
  };
  
  export default ProjectForm;