import React from "react";
import Project from '../components/Project';
import projects from '../projects.json';
import ProjectNavbar from "../components/ProjectNavbar";
function ProjectGallery() {

    return (<><h1>Project Gallery</h1>
    <div className="container">
      <ProjectNavbar></ProjectNavbar>
      
    </div>
  </>
);
    
};

export default ProjectGallery;