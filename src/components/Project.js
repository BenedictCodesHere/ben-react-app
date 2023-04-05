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
import ProjectImagePlaceholder from "./ProjectImagePlaceholder";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PlaceholderSVG from '../assets/images/placeholder.svg';

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
    
         
            
            <Link className="btn btn-primary arrow" to="/ben-react-app/projects"><i className="bi bi-arrow-left"></i></Link>
            
            </div>
    </>
)
}

export default Project;