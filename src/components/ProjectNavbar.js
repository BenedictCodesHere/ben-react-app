import React from 'react';
import { Link } from 'react-router-dom';



const ProjectNavbar = () => {
  return (
    <div className="navbar">
      <Link to="/projects/french-tutoring-website" >French Tutoring Website</Link>
      <Link to="/projects/code-quiz">Code Quiz</Link>
      <Link to="/projects/weather-dashboard">Weather Dashboard</Link>
      <Link to="/projects/daily-planner">Daily Planner</Link>
      <Link to="/projects/password-generator">Password Generator</Link>
      <Link to="/projects/README-generator">README Generator</Link>
    </div>
  );
};


export default ProjectNavbar;