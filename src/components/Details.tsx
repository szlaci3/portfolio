const Details = () => {
  return (
    <section className="details" id="details">
      <div className="container">
        <div className="details-content">
          {/* ABOUT */}
          <div className="details-section">
            <h2 className="section-title">About me</h2>
            <p className="details-text">
              I enjoy building interfaces that feel simple and natural to use.  
              I'm especially interested in React-based applications, whether it's interactive
              dashboards, internal tools, or responsive mobile UIs, that handle real-world
              data and bring intuitive and visually appealing technology into the lives of users.
            </p>
            <p className="details-text">
              My background is originally in medical studies, which gave me discipline,
              curiosity, and a long-term interest in health tech. Today, I combine that mindset
              with strong frontend fundamentals to create clear and maintainable solutions.
            </p>
          </div>

          {/* SKILLS */}
          <div className="details-section">
            <h2 className="section-title">Skills</h2>
            <p className="details-text">
              My focus is modern frontend development with React. I enjoy working with
              component-driven architectures, robust state management, and well-organized codebases.
            </p>
            <ul className="skills-list">
              <li className="skill-tag">React</li>
              <li className="skill-tag">TypeScript</li>
              <li className="skill-tag">Redux</li>
              <li className="skill-tag">Zustand</li>
              <li className="skill-tag">Material UI</li>
              <li className="skill-tag">Tailwind</li>
              <li className="skill-tag">Ant Design</li>
              <li className="skill-tag">REST API</li>
              <li className="skill-tag">GraphQL</li>
              <li className="skill-tag">Responsive Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
