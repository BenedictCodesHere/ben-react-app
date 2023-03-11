import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap';
import Contact from './pages/Contact';
import ProjectGallery from './pages/ProjectGallery';
import Project from './components/Project';
import Header from "./components/Header";
import projects from './projects.json';
import Home from './pages/Home';
function App() {
 
  
const ProjectsArray = projects.map((project) => (
   <Project 
  id={project.id}
  key={project.id}
  title={project.title}
  image={project.image}
  alt={project.alt}
  repo={project.repo}
  deployed={project.deployed}
  />
  ));


  console.log(ProjectsArray);



  return (
    <Router>
      <div className='container'>
        <div className="row">
          <Header />
          <Routes>
             <Route path="/" element={<Home />}/>
             <Route path="/contact" element={<Contact />} />
             <Route path="/projects" element={<ProjectGallery />} />
             <Route path="/projects/french-tutoring-website" element={ProjectsArray[0]} />
             <Route path="/projects/code-quiz" element={ProjectsArray[1]} />
             <Route path="/projects/weather-dashboard" element={ProjectsArray[2]} />
             <Route path="/projects/daily-planner" element={ProjectsArray[3]} />
             <Route path="/projects/password-generator" element={ProjectsArray[4]} />
             <Route path="/projects/README-generator" element={ProjectsArray[5]} />
          </Routes>
          </div>
      </div>
    </Router>
  );
}





export default App;