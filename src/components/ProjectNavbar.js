import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectNavbar.css';


const ProjectNavbar = () => {
  return (
    <div className="navbar row">
      <Link className="btn  btn-outline-primary" to="/projects/french-tutoring-website" >French Tutoring Website</Link>
      <Link className="btn btn-block btn-outline-success" to="/projects/code-quiz">Code Quiz</Link>
      <Link className="btn  btn-block btn-outline-danger" to="/projects/weather-dashboard">Weather Dashboard</Link>
      <Link className="btn btn-block btn-outline-primary" to="/projects/daily-planner">Daily Planner</Link>
      <Link className="btn btn-block btn-outline-success" to="/projects/password-generator">Password Generator</Link>
      <Link className="btn  btn-block btn-outline-danger" to="/projects/README-generator">README Generator</Link>
    </div>
  );
};


export default ProjectNavbar;