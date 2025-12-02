import { useState } from 'react';
import { ChevronDown } from './icons/ChevronDown';
import { ExternalLink } from './icons/ExternalLink';
import { GitHub } from './icons/GitHub';

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
  type: "real" | "poc";
}

const projects: Project[] = [
  {
    id: 1,
    title: 'ShopHub - E-Commerce Platform',
    shortDesc: 'Modern e-commerce platform with seamless checkout and real-time inventory management',
    longDesc: 'A full-featured e-commerce platform built with React and Node.js, featuring advanced product filtering, secure payment integration with Stripe, real-time inventory tracking, and a responsive admin dashboard. The platform handles thousands of products with optimized performance and seamless user experience across all devices.',
    thumbnail: '/assets/Regnology.png',
    fullImage: '/assets/Regnology.png',
    demoUrl: 'https://shophub-demo.example.com',
    repoUrl: 'https://github.com/szlaci3/shophub',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Redux'],
    type: "real"
  },
  {
    id: 2,
    title: 'DataViz - Analytics Dashboard',
    shortDesc: 'Real-time analytics dashboard with interactive data visualizations and custom reporting',
    longDesc: 'A comprehensive analytics platform featuring real-time data visualization, customizable dashboards, and advanced filtering capabilities. Built with D3.js for interactive charts and graphs, the dashboard processes large datasets efficiently and provides actionable insights through intuitive visual representations. Includes export functionality and scheduled reporting.',
    thumbnail: '/assets/Daffodil.jpg',
    fullImage: '/assets/Daffodil.jpg',
    demoUrl: 'https://dataviz-demo.example.com',
    repoUrl: 'https://github.com/szlaci3/dataviz',
    technologies: ['Vue.js', 'D3.js', 'TypeScript', 'WebSocket', 'PostgreSQL'],
    type: "poc"
  },
  {
    id: 3,
    title: 'Pixel Perfect - Agency Website',
    shortDesc: 'Award-winning creative agency website with stunning animations and portfolio showcase',
    longDesc: 'A visually stunning website for a creative agency featuring smooth scroll animations, parallax effects, and an immersive portfolio gallery. Built with performance in mind, achieving perfect Lighthouse scores while maintaining rich visual experiences. Includes a custom CMS for easy content management and dynamic case study pages.',
    thumbnail: '/assets/x.png',
    fullImage: '/assets/x.png',
    demoUrl: 'https://pixelperfect-demo.example.com',
    repoUrl: 'https://github.com/szlaci3/pixelperfect',
    technologies: ['Next.js', 'GSAP', 'Tailwind CSS', 'Sanity CMS', 'Framer Motion'],
    type: "poc"
  },
  {
    id: 4,
    title: 'ConnectHub - Social Platform',
    shortDesc: 'Modern social media platform with real-time messaging and content sharing',
    longDesc: 'A feature-rich social media platform with real-time messaging, post sharing, likes, comments, and user profiles. Implements infinite scroll, image uploads with optimization, notification system, and privacy controls. Built with scalability in mind using microservices architecture and optimized for mobile-first experience.',
    thumbnail: '/assets/y.png',
    fullImage: '/assets/y.png',
    demoUrl: 'https://connecthub-demo.example.com',
    repoUrl: 'https://github.com/szlaci3/connecthub',
    technologies: ['React Native', 'GraphQL', 'Apollo', 'Firebase', 'Redis'],
    type: "poc"
  }
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProject = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
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
              {project.type === "real" && (
                <div className="project-badge">
                  Real software in production
                </div>
              )}
              <div className="project-thumbnail" onClick={() => toggleProject(project.id)}>
                <img src={project.thumbnail} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  {expandedProject !== project.id && <span className="expand-hint">Click to expand</span>}
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
                    <ChevronDown className="expand-icon" />
                  </button>
                </div>
                <p className="project-short-desc">{project.shortDesc}</p>
                <div className="project-links">
                  <a href={project.demoUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    <ExternalLink />
                    {project.type === "real" ? "Presentation (by my product leader)" : "Visit Website"}
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
                    {project.type !== "real" && (
                    <a href={project.repoUrl} className="project-link repo-link" target="_blank" rel="noopener noreferrer">
                      <GitHub />
                      View Repository
                    </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
