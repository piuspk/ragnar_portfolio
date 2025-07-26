import React from 'react';
import './About.css';
import aboutImage from './bg.jpeg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hello👋, I'm Piyush Kumar, a Software Engineer at Bharat Electronics Limited and a recent Computer Science graduate from the Indian Institute of Technology Ropar 🎓.
            <br />
            I have strong foundations in Data Structures and Algorithms, Problem Solving, Web Development, and Machine Learning.
            <br />
            Outside of tech, I’m passionate about photography, editing, and graphic design.
          </p>

          <div class="circular--portrait"> <img src={aboutImage} /> </div>
        </div>
      </div>
    </section>
  );
};

export default About;
