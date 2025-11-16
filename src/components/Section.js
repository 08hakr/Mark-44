const Section = ({ children, id }) => {
  return (
    <section id={id}>
      {children}
      <style jsx>{`
        section {
          height: 100vh;
          scroll-snap-align: start;
          position: relative;
          overflow-y: auto;
        }
      `}</style>
    </section>
  );
};

export default Section;