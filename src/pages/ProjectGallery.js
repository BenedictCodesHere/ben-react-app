import React, { useState } from "react";
import Project from '../components/Project';
import projects from '../projects.json';
import ProjectNavbar from "../components/ProjectNavbar";
import { Link } from "react-router-dom";
import ProjectImg from "../components/ProjectImg";
import French from '../assets/images/french-tutoring-website.png';
import CodeQuiz from '../assets/images/code-quiz.png';
import Weather from '../assets/images/weather-dashboard.png';
import DailyPlanner from '../assets/images/daily-planner.png';
import PasswordGen from '../assets/images/password-generator.png';
import READMEGen from '../assets/images/README-generator.png';
import ProjectTitle from "../components/ProjectTitle";

function ProjectGallery() {

const ImageArray = [French, CodeQuiz, Weather, DailyPlanner, PasswordGen, READMEGen];
  // You have to set the project image variable as one of the imported images, not the path
  const [ProjectImage, setProjectImage] = useState(ImageArray[0]);
  const [Project, setProject] = useState(projects[0]);

  const handleBtnClick = (Project, ProjectImage) => {
    setProject(Project);
    setProjectImage(ProjectImage);
  };

    return (<>
    <div className="container">
     
      <div className="row">
        <div className="col-sm-2 col-md-2 col-lg-2"></div><div className="col-sm-8 col-md-8 col-lg-8"><h1 className="text-center mb-5">Project Gallery</h1></div>
        <div className="col-sm-2 col-md-2 col-lg-2"></div>
        </div>
      
    <div className="row">
      <ProjectNavbar ImageArray={ImageArray} handleBtnClick={handleBtnClick}></ProjectNavbar>
      </div>
      <ProjectTitle title={Project.title} />
      <ProjectImg ProjectImage={ProjectImage} style={{maxWidth: "80vw"}}/>
      <div className="card" style={{backgroundColor:"inherit"}}>
            <div className="img-container d-flex justify-content-center" style={{maxHeight: "35vh", width: "inherit"}}>
            </div>
            <div className="card-body mx-4 p-6 mt-4 row text-center">
              <Link className="btn btn-dark" to={Project.deployed}><i className="bi bi-rocket-takeoff"></i> </Link>
             <Link className="btn btn-dark" to={Project.repo}><i className="bi bi-github" /></Link>
            </div>
            <div className="p-4 text-center" ><p>{Project.description}</p></div>
            </div>
    </div>
  </>
);
    
};

export default ProjectGallery;