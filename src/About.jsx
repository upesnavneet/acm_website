import React, { useRef, useEffect, useState } from 'react';
import Stack from '../Stack/Stack/Stack';
import './About.css';
import backgroundVideo from '../background.mp4';

const About = () => {
  const videoRef = useRef();
  const sectionRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="about-container" data-scroll-section>
      {/* Background Video */}
      <video
        className={`background-video ${visible ? 'fade-in' : 'fade-out'}`}
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
        ref={videoRef}
      />

      {/* Stack Component */}
      <div className="stack-container">
        <Stack />
      </div>

      {/* About Content */}
      <div className="about-content">
        <h2 className="about-title">ABOUT US</h2>

        <h3 className="about-heading">
          Welcome to <span className="highlighted">UPES ACM</span><br />
          Student Chapters
        </h3>

        <p className="about-description">
          We work round-the-clock to hone the adroit programmer in our members through
          many events, workshops, fests, contests, and talks all year long. Our student
          body is headed by confident and proficient members who work seamlessly for
          this cause.
        </p>

        <ul className="about-features">
          <li> Complete Holistic Development</li>
          <li> Guided Mentorship from Seniors</li>
          <li> Community Access, Coding classes, Projects etc.</li>
        </ul>

        <button className="learn-more-btn">LEARN MORE ➤</button>
      </div>
    </div>
  );
};

export default About;
