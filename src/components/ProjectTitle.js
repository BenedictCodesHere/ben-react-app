import React from "react";
import "./style.css";

function ProjectTitle(props) {
  return <h1 className="project-title">{props.children}</h1>;
}

export default ProjectTitle;