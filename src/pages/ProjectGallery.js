import React, { useState } from "react";
import Project from '../components/Project';
import projects from '../projects.json';
import ProjectNavbar from "../components/ProjectNavbar";
import { Routes, Route } from "react-router-dom";
import ProjectImg from "../components/ProjectImg";
import French from '../assets/images/french-tutoring-website.png';
import CodeQuiz from '../assets/images/code-quiz.png';
import Weather from '../assets/images/weather-dashboard.png';
import DailyPlanner from '../assets/images/daily-planner.png';
import PasswordGen from '../assets/images/password-generator.png';
import READMEGen from '../assets/images/README-generator.png';

function ProjectGallery() {

const ImageArray = [French, CodeQuiz, Weather, DailyPlanner, PasswordGen, READMEGen];
  // You have to set the project image variable as one of the imported images, not the path
  const [ProjectImage, setProjectImage] = useState(ImageArray[0]);
  const [title, setTitle] = useState()
  const handleBtnClick = (projectImage) => {
    setProjectImage(projectImage);
  };

    return (<>
    <div className="container">
      <div className="row">
        <div className="col-sm-2 col-md-2 col-lg-2"></div><div className="col-sm-8 col-md-8 col-lg-8"><h1 className="text-center mb-5">Project Gallery</h1></div>
        <div className="col-sm-2 col-md-2 col-lg-2"></div>
        </div>
      
    
      <ProjectNavbar ImageArray={ImageArray} handleBtnClick={handleBtnClick}></ProjectNavbar>
      
      <ProjectImg ProjectImage={ProjectImage} />
    </div>
  </>
);
    
};

export default ProjectGallery;