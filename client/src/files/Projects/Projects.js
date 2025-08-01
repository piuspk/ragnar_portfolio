import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="project" className="projects-section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-container">
          <div className="project">
            <h3>Snehita Well-Being</h3>
            <p>
              This project is built using the MERN stack and aims to address
              mental health issues among IIT Ropar students by providing a
              platform with various features including blogs, fun quizzes,
              appointments, a homepage, team page, etc. .
            </p>
            <div className="buttons-container">
              <a
                href="https://github.com/piuspk/SnehitaWellBeing"
                className="btn-github"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://snehita-well-being.vercel.app/"
                className="btn-website"
              >
                <FaExternalLinkAlt /> Website
              </a>
            </div>
          </div>
          <div className="project">
            <h3>Tracker-X</h3>
            <p>
              TrackerX is a comprehensive project management platform,
              centralizing and enhancing software project workflows. It offers
              real-time tracking, progress monitoring, and promotes team
              collaboration. With its layered architecture and automated tools.
            </p>
            <div className="buttons-container">
              <a
                href="https://github.com/piuspk/SE_Project-Management-Software"
                className="btn-github"
              >
                <FaGithub /> GitHub
              </a>
              {/* <a href="#" className="btn-website">
                <FaExternalLinkAlt /> Website
              </a> */}
            </div>
          </div>
          <div className="project">
            <h3> RISC-V Simulator Architecture Project</h3>
            <p>
              The RISC-V Simulator Architecture Project focused on creating a
              simulator for running programs based on the RISC-V-32I Instruction
              Set Architecture (ISA).
            </p>
            <div className="buttons-container">
              <a
                href="https://github.com/Anshul091/RISCV-5-architecture"
                className="btn-github"
              >
                <FaGithub /> GitHub
              </a>
              {/* <a href="#" className="btn-website">
                <FaExternalLinkAlt /> Website
              </a> */}
            </div>
          </div>
          <div className="project">
            <h3>Sorting Visualizer </h3>
            <p>
              The website provided an interactive and educational experience for
              users to understand sorting algorithms such as Quick Sort, Bubble
              Sort, Merge Sort, and more.
            </p>
            <div className="buttons-container">
              <a
                href="https://github.com/piuspk/sorting_visualiszer"
                className="btn-github"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://piuspk.github.io/sorting_visualiszer/"
                className="btn-website"
              >
                <FaExternalLinkAlt /> Website
              </a>
            </div>
          </div>
          <div className="project">
            <h3>Rule-Based Quiz Generator - BTP Project, IIT Ropar </h3>
            <p>
              Developed an intelligent quiz generation system using Python, Flask, and algorithmic templates to create unique, concept-focused questions on digital logic topics. Features include distractor generation, difficulty weighting, dynamic image creation, and performance analytics. Deployed with a responsive frontend and tested by 60+ IIT Ropar students, receiving 96% positive feedback on quality and user experience.


            </p>
            <div className="buttons-container">
              <a
                href="https://github.com/Rajkholwal/BTP-PROJECT"
                className="btn-github"
              >
                <FaGithub /> GitHub
              </a>
              {/* <a
                href="https://piuspk.github.io/sorting_visualiszer/"
                className="btn-website"
              >
                <FaExternalLinkAlt /> Website
              </a> */}
            </div>
          </div>




        </div>
      </div>
    </section>
  );
};

export default Projects;
