import React from 'react';
import {TypeAnimation} from 'react-type-animation';
import { FaFileAlt, FaEnvelope, FaBriefcase } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="background-overlay"></div>
      
      <div className="main-info">
        <h1>Hello👋! I am Piyush</h1>
        <h6>CSE Undergraduate at IIT Ropar🎓</h6>
        <TypeAnimation
          className="typed-text"
          sequence={[
            "Web Developer",
            2000,
            "Graphic Designer",
            2000,
            "Photographer",
            2000,
            "Web Designer",
            2000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '1.5em', display: 'inline-block' }}
        />
        <br/>
        <span>
          <a href="#contact" className="btn-main-offer">
            <FaEnvelope style={{ marginRight: '8px' }} /> Contact
          </a>
          <a href="#project" className="btn-my-work">
            <FaBriefcase style={{ marginRight: '8px' }} /> My Work
          </a>
        </span>
        {/* <br/>
        <a href="#resume" className="btn-resume">
          <FaFileAlt style={{ marginRight: '8px' }} /> Resume
        </a> */}
      </div>
    </div>
  );
}

export default Header;
