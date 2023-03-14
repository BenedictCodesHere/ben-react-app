import React, { useState } from "react";
import { Link } from "react-router-dom";
import French from '../assets/images/french-tutoring-website.png';
import CodeQuiz from '../assets/images/code-quiz.png';
import Weather from '../assets/images/weather-dashboard.png';
import DailyPlanner from '../assets/images/daily-planner.png';
import PasswordGen from '../assets/images/password-generator.png';
import READMEGen from '../assets/images/README-generator.png';
import ProjectNavbar from "./ProjectNavbar";
import './Project.css';
const ImageArray = [French, CodeQuiz, Weather, DailyPlanner, PasswordGen, READMEGen];

function Project(props) {


let ProjectImage;
switch(props.id){
    case 1:
        ProjectImage = ImageArray[0];
        break;
        case 2:
        ProjectImage = ImageArray[1];
        break;
        case 3:
        ProjectImage = ImageArray[2];
        break;
        case 4:
        ProjectImage = ImageArray[3];
        break;
        case 5:
        ProjectImage = ImageArray[4];
        break;
        case 6:
        ProjectImage = ImageArray[5];
        break;
}

console.log(ProjectImage);

return (<>

<ProjectNavbar />
<div className="container">
    <h2 className="project-title text-center">{props.title}</h2>
          <div className="card" style={{backgroundColor:"inherit"}}>
            <div className="img-container d-flex justify-content-center" style={{maxHeight: "35vh", width: "inherit"}}>
              <img style={{maxHeight:"inherit", height:"inherit", width:"inherit", maxWidth: "100vw"}} alt={props.alt} src={ProjectImage}></img>
            </div>
            <div className="card-body mx-4 p-6 mt-4 row text-center">
              
            
          
              <Link className="btn btn-dark" to={props.deployed}><i className="bi bi-rocket-takeoff"></i> </Link>
             
          
           
             <Link className="btn btn-dark" to={props.repo}><i className="bi bi-github" /></Link>
            </div>
            <div className="p-4 text-center" ><p>{props.description}</p></div>
            
            </div>
            
            <Link className="btn btn-primary arrow" to="/projects"><i className="bi bi-arrow-left"></i></Link>
            
            </div>
    </>
)
}

export default Project;