import React from "react";
import './Projects.css';

function Projects() {
  return (
    <section id="projects">
    <div className="box">
            <h1 className="subtitle"> PROJECTS </h1>
            <section class = "desc">
             </section>
    <div className = "wrapper">
              <div className="card">
          <h1>Smart Game AI</h1>
          <p className = "proj-desc"> Java </p>
          <a href="https://github.com/seyelence/cs310/tree/main/pa3" rel="noreferrer">
          Source Code </a>
        </div>
      
        <div className="card">
        <h1>Portfolio </h1>
        <p className = "proj-desc"> ReactJS, HTML, CSS </p>
        <a href="https://github.com/seyelence/portfolio" rel="noreferrer">
        Source Code </a>
      </div>
      </div>
        </div>
      </section>
  );
}

export default Projects;