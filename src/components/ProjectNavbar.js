import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectNavbar.css';
import { useState } from 'react';
const ProjectNavbar = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <div className="navbar row">
      <Link className="btn  btn-outline-primary" to="/projects/french-tutoring-website" key={1} >French Tutoring Website</Link>
      <Link className="btn btn-block btn-outline-success" to="/projects/code-quiz" key={2}>Code Quiz</Link>
      <Link className="btn  btn-block btn-outline-danger" to="/projects/weather-dashboard" key={3}>Weather Dashboard</Link>
      <Link className="btn btn-block btn-outline-primary" to="/projects/daily-planner" key={4}>Daily Planner</Link>
      <Link className="btn btn-block btn-outline-success" to="/projects/password-generator" key={5}>Password Generator</Link>
      <Link className="btn  btn-block btn-outline-danger" to="/projects/README-generator" key={6}>README Generator</Link>
    </div>
  );
};


export default ProjectNavbar;