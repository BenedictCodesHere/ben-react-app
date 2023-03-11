import React from "react";
import { Link } from "react-router-dom";
import French from '../assets/images/french-tutoring-website.png';
import CodeQuiz from '../assets/images/code-quiz.png';
import Weather from '../assets/images/weather-dashboard.png';
import DailyPlanner from '../assets/images/daily-planner.png';
import PasswordGen from '../assets/images/password-generator.png';
import READMEGen from '../assets/images/README-generator.png';

const ImageArray = [French, CodeQuiz, Weather, DailyPlanner, PasswordGen, READMEGen]
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
    <h2 className="project-title">{props.title}</h2>
          <div className="card h-25 w-25">
            <div className="img-container" style={{height:"inherit", width: "inherit"}}>
              <img alt={props.alt} src={ProjectImage}></img>
            </div>
            <div className="card-body">
            <p>Link to deployed version:<Link to={props.deployed}>{props.deployed}</Link></p>
           
            <p>Link to repository: <Link to={props.repo}>{props.repo}</Link></p>
            </div>
            </div>
            <Link to="/projects">Back</Link>
    </>
)
}

export default Project;