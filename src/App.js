import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap';
import Home from './pages/Home'
import Contact from './pages/Contact';
import ProjectGallery from './pages/ProjectGallery';
import Project from './pages/Project';
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <div className='container'>
        <div className="row">
          <Header />
          <Routes>
             <Route path="/" element={<Home name={"Drew"} title={"web developer"}/>} />
             <Route path="/contact" element={<Contact/>} />
             <Route path="/ProjectGallery" element={<ProjectGallery />} />
          </Routes>
          </div>
      </div>
    </Router>
  );
}





export default App;