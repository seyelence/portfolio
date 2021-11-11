import { Card } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import './Projects.css';

function Projects() {
  return (
    <section id="projects">
    <div className="box">
            <h1 className="title"> Projects </h1>
            <section class = "desc">
            Will update as I gain more experience and create new things. </section>
    <div className = "wrapper">
              <div className="card">
          <h1>Smart Game AI</h1>
          <p className = "proj-desc"> Java </p>
          <a href="https://github.com/seyelence/cs310/tree/main/pa3" rel="noreferrer">
          GitHub </a>
        </div>
      
        <div className="card">
        <h1>Portfolio </h1>
        <p className = "proj-desc"> ReactJS, HTML, CSS </p>
        <a href="https://github.com/seyelence/cs310/tree/main/pa3" rel="noreferrer">
        GitHub </a>
      </div>
      </div>
        </div>
      </section>
  );
}

export default Projects;