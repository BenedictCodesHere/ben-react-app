import React from "react";

function ProjectGallery() {
    return (
        <div className="container" id="projects">
            
            <h2>Projects</h2>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="card text-white bg-success mb-3">
                        <img src="images/Portfolio-page.png" className="card-img-top" alt="A screenshot of a portfolio project" id="portfolio-page" />
                        <div className="card-body">
                          <a className="stretched-link" href="https://benedictcodeshere.github.io/Portfolio-Page/" target="_blank"></a>
                          <h5 className="card-title">Flexbox Portfolio Page</h5>
                          <p className="card-text">HTML, CSS</p>
                          
                        </div>
                      </div>
                </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                      <div className="card text-white bg-success mb-3">
                        <img src="images/seo-page.png" className="card-img-top fixed-height" alt="A screenshot of a portfolio project" id="seo-page" />
                        <div className="card-body">
                          <a className="stretched-link" href="https://benedictcodeshere.github.io/Refactoring-HTML-for-Accessibility/" target="_blank"></a>
                          <h5 className="card-title">SEO Page</h5>
                          <p className="card-text">HTML, CSS</p>
                          
                        </div>
                      </div>
                    </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                      <div className="card text-white bg-success mb-3">
                        <img src="images/study-guide.png" className="card-img-top fixed-height" alt="A screenshot of a portfolio project" id="study-guide" />
                        <div className="card-body">
                          <a className="stretched-link" href="https://benedictcodeshere.github.io/prework-study-guide/" target="_blank"></a> 
                          <h5 className="card-title">Study Guide</h5>
                          <p className="card-text">HTML, CSS, Javascript</p>
                          
                        </div>
                      </div>
                  </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                      <div className="card text-white bg-success mb-3">
                        <img src="images/02-run-buddy.jpg" className="card-img-top fixed-height" alt="A screenshot of a portfolio project" id="project-4" />
                        <div className="card-body">
                          <h5 className="card-title">Project 4 (TBC)</h5>
                          <p className="card-text">TBC</p>
                          
                        </div>
                      </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                      <div className="card text-white bg-success mb-3">
                        <img src="images/02-portfolio-1.jpg" className="card-img-top fixed-height" alt="A screenshot of a portfolio project" id="project-5" />
                        <div className="card-body">
                          <h5 className="card-title">Project 5 (TBC)</h5>
                          <p className="card-text">TBC</p>
                          
                        </div>
                      </div>
                      
                </div>
              
             
              </div>
              
        
      </div>
    );
    
};

export default ProjectGallery;