import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Particles from '../Background1/Particles/Particles';
import Home from './home';
import Navbar from './Navbar';
import About from './About';
import Initiatives from './Initiatives';
import Robot from './Robot';

import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const horizontalRef = useRef();

  useEffect(() => {
    const sections = gsap.utils.toArray('.app-section');
    const container = horizontalRef.current;

    // Horizontal scroll within pinned section
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => `+=${container.scrollWidth}`,
        anticipatePin: 1,
      },
    });

    // Fade in/out per section
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            containerAnimation: ScrollTrigger.getById(container), // This links to the main scroll animation
            start: 'left center',
            end: 'right center',
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <Navbar />

      <div className="horizontal-scroll-section">
        <div className="horizontal-scroll-wrapper" ref={horizontalRef}>
          <section className="app-section particles-section">
            <Home />
            <Particles
              particleColors={['#00000000']}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </section>

          <section className="app-section about-section" id="about">
            <About />
          </section>

          <section className="app-section robot-section" id="robot">
            <Robot />
          </section>

          <section className="app-section initiatives-section" id="initiatives">
            <Initiatives />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
