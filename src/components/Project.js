import React from "react";
import { Link } from "react-router-dom";
function Project(props) {
//     Project:

// Must be a reusable component that ingests JSON data as props and renders a single instance for each project

// Must utilize Router props to properly render the right project based on user selection

// Must render the following info:

// Project title
return (<>
    <h2 className="project-title">{props.title}</h2>
          <div className="card">
            <div className="img-container">
              <img alt={props.alt} src={props.image} />
            </div>
            <p>Link to deployed version:<Link to={props.deployed}>{props.deployed}</Link></p>
           
            <p>Link to repository: <Link to={props.repo}>{props.repo}</Link></p>
            </div>
    </>
)
}

export default Project;