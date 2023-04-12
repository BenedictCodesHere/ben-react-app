import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
  const clickedButtonStyling = {color: "white", border: "1px solid white"};
  const [clickedButton, setClickedButton] = useState("");

  return (
    <header className="header mt-5 row justify-content-center w-100">
      
      <NavLink
        className="btn col-sm-4"
        to="/ben-react-app"
        style={clickedButton === "home" ? clickedButtonStyling : { color:"rgb(132, 248, 94)"}}
        onClick={() => setClickedButton("home")}
      >
        <i className="bi bi-house-door-fill"></i>
      </NavLink>
      
      <NavLink
        className="btn col-sm-4"
        to="/ben-react-app/contact"
        style={clickedButton === "contact" ? clickedButtonStyling : {}}
        onClick={() => setClickedButton("contact")}
      >
        <i className="bi bi-envelope-at"></i>  <i className="bi bi-github"></i>  <i className="bi bi-linkedin"></i>
      </NavLink>
      
      <NavLink
        className="btn col-sm-4"
        to="/ben-react-app/projects"
        style={clickedButton === "projects" ? clickedButtonStyling : {}}
        onClick={() => setClickedButton("projects")}
      >
        <i className="bi bi-rocket-takeoff"></i>  Projects  <i className="bi bi-rocket-takeoff"></i>
      </NavLink>

      <NavLink
        className="btn col-sm-4"
        to="/ben-react-app/skills"
        style={clickedButton === "skills" ? clickedButtonStyling : {}}
        onClick={() => setClickedButton("skills")}
      >
        <i className="bi bi-screwdriver"></i>  Skills  <i className="bi bi-screwdriver icon-flipped"></i>
      </NavLink>
      
    </header>
  );
};

export default Header;
