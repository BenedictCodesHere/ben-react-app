import React from "react";
import Avatar from '../assets/images/whos-this-long-haired-beauty.png';
function Home() {
    return (
        <>
        <img src=""></img>

        <div className="container">
            <div className="row d-flex justify-content-center text-center">
            <h1>Benedict McElroy</h1>
            <h2>Portfolio</h2>
            <img src={Avatar} style={{height: "200px", width: "230px"}} className="my-3"></img>
            <p>I am a front-end developer building projects with React, Bootstrap, Node, vanilla JavaScript, jQuery, and I am developing my own custom CSS stylesheets.</p>
            <br></br>
            <p> I have been publishing these projects to Github, and have collaborated with other developers to build a French Tutoring Website for a client. I am familiar with Git and Git workflow, and version control. I have worked in teams which use this technology, and am comfortable with team-based, project-driven and test-driven development.</p>
            </div>
        </div>
        </>
    )

}

export default Home;