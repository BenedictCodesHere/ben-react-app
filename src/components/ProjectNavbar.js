import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectNavbar.css';
const ProjectNavbar = () => {


  return (
    <div className="navbar row">
      <Link className="btn btn-block" to="/projects/french-tutoring-website" key={1} ><i class="bi bi-award"></i>  French Tutoring Website  <i class="bi bi-award"></i></Link>
      <Link className="btn btn-block" to="/projects/code-quiz" key={2}><i class="bi bi-clipboard2-check-fill"></i>  Code Quiz  <i class="bi bi-clipboard2-x-fill"></i></Link>
      <Link className="btn  btn-block" to="/projects/weather-dashboard" key={3}><i class="bi bi-cloud-drizzle"></i>   Weather Dashboard   <i class="bi bi-cloud-drizzle"></i></Link>
      <Link className="btn btn-block " to="/projects/daily-planner" key={4}><i class="bi bi-journal-bookmark-fill"></i>  Daily Planner  <i class="bi bi-journal-bookmark-fill"></i></Link>
      <Link className="btn btn-block " to="/projects/password-generator" key={5}><i class="bi bi-asterisk"></i>  Password Generator  <i class="bi bi-asterisk"></i></Link>
      <Link className="btn  btn-block " to="/projects/README-generator" key={6}><i class="bi bi-card-list"></i>  README Generator  <i class="bi bi-card-list"></i></Link>
    </div>
  );
};


export default ProjectNavbar;