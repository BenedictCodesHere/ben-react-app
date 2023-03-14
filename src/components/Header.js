import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
  return (
    <header className="header mt-5 row">
      
          
      <NavLink className="btn" to="/ben-react-app">Home</NavLink>
      
      
      <NavLink className="btn" to="contact">Contact</NavLink>
      
      
      <NavLink  className="btn" to="projects">Project Gallery</NavLink>
      
      
    </header>
  );
};


export default Header;