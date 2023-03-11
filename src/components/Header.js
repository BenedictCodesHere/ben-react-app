import React from 'react';
import { NavLink } from 'react-router-dom';



const Header = () => {
  return (
    <header className="header">
      <div className='container'>
        <div className='row'>
          <div className='col-sm-2 col-md-2 col-lg-2'>
      <NavLink to="/">Home</NavLink>
      </div>
      <div className='col-sm-2 col-md-2 col-lg-2'>
      <NavLink to="contact">Contact</NavLink>
      </div>
      <div className='col-sm-2 col-md-2 col-lg-2'>
      <NavLink to="projects">Project Gallery</NavLink>
      </div>
      </div>
      </div>
    </header>
  );
};


export default Header;