import React from "react";
import './Projects.scss';
import  ProjectForm from './ProjectForm.js';
import ScrollToHashElement from '../ScrollToHashElement.tsx';

import projectData from '../assets/projects.json'
function Projects() {
    const creativeProjects = projectData.filter(proj => proj.type === 'creative')
    const softwareProjects = projectData.filter(proj => proj.type === 'software')
    return(
      <div className="background-sh-proj">
        <div className="stars-proj">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>



        <div className="content-wrapper">
          <div className="text-parent">
            <div className="title-project">Projects</div>
            <div className="subt-project" id="sfw-section">Software Development</div>
            <div className="sfw-proj">
              {softwareProjects.map((project, index) => (
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
            <ScrollToHashElement />
            <div className="subt-project" id="creative-section">Creative Work</div>
            <div className="sfw-proj">
              {creativeProjects.map((project, index) => (
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
      </div>
    )
  };
  
  export default Projects;