import React from "react";
import Project from '../components/Project';
import projects from '../projects.json';
import ProjectNavbar from "../components/ProjectNavbar";
import { Routes, Route } from "react-router-dom";
function ProjectGallery() {

    return (<>
    <div className="container">
      <div className="row">
        <div className="col-sm-2 col-md-2 col-lg-2"></div><div className="col-sm-8 col-md-8 col-lg-8"><h1 className="text-center mb-5">Project Gallery</h1></div>
        <div className="col-sm-2 col-md-2 col-lg-2"></div>
        </div>
      
    
      <ProjectNavbar></ProjectNavbar>
    </div>
  </>
);
    
};

export default ProjectGallery;