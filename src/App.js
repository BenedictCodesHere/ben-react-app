import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap';
import Contact from './pages/Contact';
import ProjectGallery from './pages/ProjectGallery';
import Project from './components/Project';
import Header from "./components/Header";
import projects from './projects.json';
import Home from './pages/Home';
import Skills from './pages/Skills';
import './App.css';

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
  description={project.description}
  />
  ));


  console.log(ProjectsArray);



  return (<>
    <div className='container'>
        <div className="row">
          <div className='col-sm-2 col-md-4 col-lg-4'></div>
                <div className='col-sm-8 col-md-4 col-lg-4'>
                  <Router>
                    <Header />
                        <Routes>
                          <Route path="/ben-react-app" element={<Home />}/>
                          <Route path="/ben-react-app/contact" element={<Contact />} />
                          <Route path="/ben-react-app/projects" element={<ProjectGallery />} />
                          <Route path="/ben-react-app/skills" element={<Skills />} />
                        </Routes>
                  </Router>
                </div>
          <div className='col-sm-2 col-md-4 col-lg-4'></div>
          </div>
      </div>
      
      </>
  );
}





export default App;