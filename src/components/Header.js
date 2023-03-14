import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
  return (
    <header className="header mt-5 row">
      
          
      <NavLink className="btn col-sm-4" to="/ben-react-app"><i className="bi bi-house-door"></i></NavLink>
      
      
      <NavLink className="btn col-sm-4" to="contact"><i className="bi bi-envelope-at"></i>  <i className="bi bi-github"></i>  <i className="bi bi-linkedin"></i></NavLink>
      
      
      <NavLink  className="btn col-sm-4" to="projects"><i className="bi bi-screwdriver"></i>  Projects  <i className="bi bi-rocket-takeoff"></i></NavLink>
      
      
    </header>
  );
};


export default Header;