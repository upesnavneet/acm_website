import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

import Particles from '../Background1/Particles/Particles';
import Home from './home';
import Navbar from './Navbar';
import './App.css';
import About from './About';
import Robot from './Robot';
import Initiatives from './Initiatives';
import './index.css';

const FadeSection = ({ children, className, id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      className={className}
      id={id}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
};

function App() {
  return (
    <>
      <div className="app-scroll-wrapper">
        <Navbar />

        <main className="scroll-content">
          
          <FadeSection className="particles-section">
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
          </FadeSection>

          <FadeSection className="about-section" id="about">
            <About />
          </FadeSection>

          <FadeSection className="initiatives-section" id="initiatives">
            <Initiatives />
          </FadeSection>

          <FadeSection className="robot-section" id="robot">
            <Robot />
          </FadeSection>
        </main>
      </div>
    </>
  );
}

export default App;
