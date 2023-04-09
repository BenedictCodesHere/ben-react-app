import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
  return (
    <header className="header mt-5 row w-100">
      
          
      <NavLink className="btn col-sm-4" to="/ben-react-app"><i className="bi bi-house-door"></i></NavLink>
      
      
      <NavLink className="btn col-sm-4" to="/ben-react-app/contact"><i className="bi bi-envelope-at"></i>  <i className="bi bi-github"></i>  <i className="bi bi-linkedin"></i></NavLink>
      
      
      <NavLink  className="btn col-sm-4" to="/ben-react-app/projects"><i className="bi bi-rocket-takeoff"></i>  Projects  <i className="bi bi-rocket-takeoff"></i></NavLink>

      <NavLink  className="btn col-sm-4" to="/ben-react-app/skills"><i className="bi bi-screwdriver"></i>  Skills  <i id="rotated" className="bi bi-screwdriver flip-h"></i>  </NavLink>
      
      
    </header>
  );
};


export default Header;