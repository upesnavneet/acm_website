const Section = ({ title, color = "#111" }) => {
  return (
    <section
      className="parallax-section"
      data-scroll-section
      style={{ background: color }}
    >
      <h1 data-scroll data-scroll-speed="2">{title}</h1>
    </section>
  );
};

export default Section;
