import { useState } from 'react';
import './App.css';

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  longDesc: string;
  thumbnail: string;
  fullImage: string;
  demoUrl: string;
  repoUrl: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'ShopHub - E-Commerce Platform',
    shortDesc: 'Modern e-commerce platform with seamless checkout and real-time inventory management',
    longDesc: 'A full-featured e-commerce platform built with React and Node.js, featuring advanced product filtering, secure payment integration with Stripe, real-time inventory tracking, and a responsive admin dashboard. The platform handles thousands of products with optimized performance and seamless user experience across all devices.',
    thumbnail: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
    fullImage: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=700&fit=crop',
    demoUrl: 'https://shophub-demo.example.com',
    repoUrl: 'https://github.com/szlaci3/shophub',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Redux']
  },
  {
    id: 2,
    title: 'DataViz - Analytics Dashboard',
    shortDesc: 'Real-time analytics dashboard with interactive data visualizations and custom reporting',
    longDesc: 'A comprehensive analytics platform featuring real-time data visualization, customizable dashboards, and advanced filtering capabilities. Built with D3.js for interactive charts and graphs, the dashboard processes large datasets efficiently and provides actionable insights through intuitive visual representations. Includes export functionality and scheduled reporting.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    fullImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=700&fit=crop',
    demoUrl: 'https://dataviz-demo.example.com',
    repoUrl: 'https://github.com/szlaci3/dataviz',
    technologies: ['Vue.js', 'D3.js', 'TypeScript', 'WebSocket', 'PostgreSQL']
  },
  {
    id: 3,
    title: 'Pixel Perfect - Agency Website',
    shortDesc: 'Award-winning creative agency website with stunning animations and portfolio showcase',
    longDesc: 'A visually stunning website for a creative agency featuring smooth scroll animations, parallax effects, and an immersive portfolio gallery. Built with performance in mind, achieving perfect Lighthouse scores while maintaining rich visual experiences. Includes a custom CMS for easy content management and dynamic case study pages.',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop',
    fullImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=700&fit=crop',
    demoUrl: 'https://pixelperfect-demo.example.com',
    repoUrl: 'https://github.com/szlaci3/pixelperfect',
    technologies: ['Next.js', 'GSAP', 'Tailwind CSS', 'Sanity CMS', 'Framer Motion']
  },
  {
    id: 4,
    title: 'ConnectHub - Social Platform',
    shortDesc: 'Modern social media platform with real-time messaging and content sharing',
    longDesc: 'A feature-rich social media platform with real-time messaging, post sharing, likes, comments, and user profiles. Implements infinite scroll, image uploads with optimization, notification system, and privacy controls. Built with scalability in mind using microservices architecture and optimized for mobile-first experience.',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop',
    fullImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=700&fit=crop',
    demoUrl: 'https://connecthub-demo.example.com',
    repoUrl: 'https://github.com/szlaci3/connecthub',
    technologies: ['React Native', 'GraphQL', 'Apollo', 'Firebase', 'Redis']
  }
];

function App() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProject = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <>
      {/* Hero Section */}
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
        
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">A selection of my recent work showcasing modern web development</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article 
                key={project.id} 
                className={`project-card ${expandedProject === project.id ? 'expanded' : ''}`}
                data-project={project.id}
              >
                <div className="project-thumbnail" onClick={() => toggleProject(project.id)}>
                  <img src={project.thumbnail} alt={project.title} loading="lazy" />
                  <div className="project-overlay">
                    <span className="expand-hint">Click to expand</span>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <button 
                      className="expand-btn" 
                      onClick={() => toggleProject(project.id)}
                      aria-label="Expand project details"
                    >
                      <svg className="expand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                  </div>
                  <p className="project-short-desc">{project.shortDesc}</p>
                  <div className="project-links">
                    <a href={project.demoUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Live Demo
                    </a>
                  </div>
                  
                  {/* Expanded Content */}
                  <div className="project-expanded">
                    <div className="project-full-image">
                      <img src={project.fullImage} alt={`${project.title} detailed view`} loading="lazy" />
                    </div>
                    <div className="project-details">
                      <h4>Project Overview</h4>
                      <p className="project-long-desc">{project.longDesc}</p>
                      <div className="project-tech">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                      <a href={project.repoUrl} className="project-link repo-link" target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View Repository
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-content">
            <h2 className="contact-title">Let's Work Together</h2>
            <p className="contact-description">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="contact-links">
              <a href="https://github.com/szlaci3" className="contact-link" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/slaci" className="contact-link" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://www.facebook.com/szalai.laci" className="contact-link" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 László Szalai. Crafted with passion and modern web technologies.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
