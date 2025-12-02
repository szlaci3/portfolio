const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="greeting">Hi, I'm</span>
            <span className="name">László Szalai</span>
          </h1>
          <p className="hero-tagline">Front-End Developer crafting beautiful, performant web experiences</p>
          <p className="hero-description">
            I transform ideas into elegant digital solutions with modern technologies, 
            pixel-perfect design, and seamless user interactions.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </div>
      
      <a href="#projects" >
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </a>
    </section>
  );
};

export default Hero;
