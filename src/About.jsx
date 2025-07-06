import React from 'react';
import Stack from '../Stack/Stack/Stack';
import './About.css';

const About = () => {
  return (
    <div className="about-container" data-scroll-section>
      <div className="stack-container">
        <Stack />
      </div>

      <div className="about-content">
        <h2 className="about-title">ABOUT US</h2>
        <h3 style={{ fontWeight: 800 }}>
          WE ARE <span className="glow-text">UPES ACM </span> STUDENT CHAPTER
        </h3>
        <p className="about-description">
          We work round-the-clock to hone the adroit programmer in our members through many events, workshops, fests, contests, and talks all year long. Our student body is headed by confident and proficient members who work seamlessly for this cause.
        </p>
        <button className="learn-more-btn">LEARN MORE ➤</button>
      </div>
    </div>
  );
};

export default About;
