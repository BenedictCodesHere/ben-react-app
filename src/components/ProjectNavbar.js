import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectNavbar.css';
import projects from '../projects.json';
const ProjectNavbar = ({handleBtnClick, ImageArray}) => {


  return (
    <div className="navbar row">
{projects.map((project) => (
  <button onClick={() => handleBtnClick(project, ImageArray[project.id - 1])} className={project.navbarClassName}  key={project.id} ><i className={project.navbarIconClass}></i>  {project.title}  <i className={project.navbarIconClass}></i></button>
))};  
    </div>
  );
};


export default ProjectNavbar;