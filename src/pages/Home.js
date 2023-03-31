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
            <p>I am a front-end developer building projects with <strong>React, Bootstrap, Node, vanilla JavaScript, jQuery</strong>, and I am developing my own custom CSS stylesheets.</p>
            <br></br>
            <p> I have been publishing these projects to Github, and have collaborated with other developers to build a French Tutoring Website for a client. I have a comprehensive understanding of <strong>Git</strong> and <strong>Git workflow</strong>, and <strong>version control</strong>. I have worked in teams which use this technology, and am comfortable with team-based, project-driven and <strong>test-driven development</strong>, having written unit tests with <strong>Jest</strong>. I have worked with both <strong>OOP</strong> and <strong>functional programming</strong> paradigms.</p>
            <br></br>
            <p>Currently, I am working on upskilling my knowledge in <strong>back-end</strong> and <strong>cloud computing</strong>. I am learning <strong>MongoDB, SQL, Docker,</strong> and <strong>Kubernetes</strong>.</p>
            </div>
        </div>
        </>
    )

}

export default Home;