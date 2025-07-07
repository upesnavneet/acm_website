import Particles from '../Background1/Particles/Particles';
import Home from './home';
import Navbar from './Navbar';
import './App.css';
import About from './About';
import Initiatives from './Initiatives';
import Robot from './Robot';
import './index.css';

function App() {
  return (
    <>
      <Navbar />

      <main className="scroll-content">

        <section className="particles-section">
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

        <section className="about-section" id="about">
          <About />
        </section>

        <section className="initiatives-section" id="initiatives">
          <Initiatives />
        </section>

        <section className="robot-section" id="robot">
          <Robot /> 
        </section>

      </main>
    </>
  );
}

export default App;
