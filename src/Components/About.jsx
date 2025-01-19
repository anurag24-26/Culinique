import React from "react";
import "../styles/AboutUs.css";
import knife from "../assets/knife.png"; // Replace with the path to your knife.png file

const About = () => {
  return (
    <div className="about-us-container">
      <div className="section about-us-section">
        <h1 className="animated-header">About Us</h1>
        <p className="animated-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices
          vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
        </p>
        <button className="animated-button">Know More</button>
      </div>
      <div class='knifeimage'><img src={knife} alt="Knife" className="knife-image" /></div>
      <div className="section history-section">
        <h1 className="animated-header">Our History</h1>
        <p className="animated-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices
          vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
        </p>
        <button className="animated-button">Know More</button>
      </div>
    </div>
  );
};

export default About;
