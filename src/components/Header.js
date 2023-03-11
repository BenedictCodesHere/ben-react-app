import React from 'react';
import { NavLink } from 'react-router-dom';



const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="contact">Contact</NavLink>
      <NavLink to="projects">Project Gallery</NavLink>
    </header>
  );
};


export default Header;