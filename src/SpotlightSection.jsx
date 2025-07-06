import React from "react";
import SpotlightCard from "../src/components/SpotlightCard/SpotlightCard/SpotlightCard"
import "./SpotlightSection.css";

const SpotlightSection = () => {
  return (
    <section className="spotlight-section" data-scroll-section>
      <h2 className="spotlight-heading">Our Core Values</h2>
      <div className="spotlight-cards-container">
        <SpotlightCard>
          <h3>21 Days Of Code</h3>
          <p>We launched 21 Days of Code to promote the environment for competitive programming and instil coding as second nature and a daily habit for 21 regular days. Every year, we witness active programmers come along with the spirit to learn, code and practice.</p>
        </SpotlightCard>
        <SpotlightCard>
          <h3>CODE ANYTIME</h3>
          <p>TCode Anytime is our round-the-year initiative to encourage free-spirited coding among beginners to amplify their passion for programming.</p>
        </SpotlightCard>
        <SpotlightCard>
          <h3>SPY-C</h3>
          <p>SPY-C is an initiative to build the core foundation of programming and aid students in overcoming their dread of programming by perfecting their knowledge of the C language through the help of their seniors.</p>
        </SpotlightCard>
        <SpotlightCard>
          <h3>Hour Of Code</h3>
          <p>The CSR team puts their words to action, and brings smiles across the faces of the underprivileged society. The team parts education in the most exciting manner and makes the activities as interactive and intriguing as possible.</p>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default SpotlightSection;
