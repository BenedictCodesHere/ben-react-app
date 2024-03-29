import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectNavbar.css';
const ProjectNavbar = () => {


  return (
    <div className="navbar row">
      <Link className="btn btn-block btn-project" to="/ben-react-app/projects/french-tutoring-website" key={1} ><i className="bi bi-award"></i>  French Tutoring Website  <i className="bi bi-award"></i></Link>
      <Link className="btn btn-block btn-project" to="/ben-react-app/projects/code-quiz" key={2}><i class="bi bi-clipboard2-check-fill"></i>  Code Quiz  <i class="bi bi-clipboard2-x-fill"></i></Link>
      <Link className="btn btn-block btn-project" to="/ben-react-app/projects/weather-dashboard" key={3}><i className="bi bi-cloud-drizzle"></i>   Weather Dashboard   <i className="bi bi-cloud-drizzle"></i></Link>
      <Link className="btn btn-block btn-project" to="/ben-react-app/projects/daily-planner" key={4}><i className="bi bi-journal-bookmark-fill"></i>  Daily Planner  <i className="bi bi-journal-bookmark-fill"></i></Link>
      <Link className="btn btn-block btn-project" to="/ben-react-app/projects/password-generator" key={5}><i className="bi bi-asterisk"></i>  Password Generator  <i className="bi bi-asterisk"></i></Link>
      <Link className="btn btn-block btn-project" to="/ben-react-app/projects/README-generator" key={6}><i className="bi bi-card-list"></i>  README Generator  <i className="bi bi-card-list"></i></Link>
    </div>
  );
};


export default ProjectNavbar;