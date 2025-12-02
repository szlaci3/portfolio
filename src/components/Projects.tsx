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
    title: 'Regnology Reporting Hub',
    shortDesc: 'Fintech regulatory reporting software widely used by renowned financial institutions',
    longDesc: "The Reporting Hub is Regnology's cloud-first regulatory reporting platform, used by banks and financial institutions across the world to manage every stage of the reporting process. It operates on very large, granular datasets and provides high-precision validation, exception handling, and complex table-based data exploration for professional users. I worked as a Senior Software Engineer on the front-end team, building UI components and interaction patterns that support automated workflows, dynamic spreadsheets, and advanced oversight tools. \n\nWorking closely with product owners and back-end engineers, I delivered features that improve data quality, streamline exception resolution, and give users clearer visibility and control over their reports. The platform demands reliability — especially when handling millions of data points under strict regulatory rules. \n\nWith no dedicated designer, I self-taught design and UX principles to ensure that complex, high-density screens remained clear, consistent, and efficient for analysts who depend on speed and accuracy in their daily work. \n\nThis project represents my most recent experience in large-scale, high-precision front-end development within a regulated, mission-critical environment.",
    thumbnail: '/assets/Regnology.png',
    fullImage: '/assets/Regnology.png',
    // demoUrl: 'https://www.regnology.net/en/solutions/for-the-regulated/regnology-reporting-hub',
    demoUrl: 'https://www.regnology.net/en/solutions/regnology-platform',
    repoUrl: '',
    technologies: ['React', 'Node.js', 'Zustand', 'GraphQL', 'Redis', 'Material UI', 'Handsontable', 'TypeScript', 'Vitest', 'Playwright', 'React Testing Library'],
    type: "real"
  },
  {
    id: 2,
    title: 'Quizlet - Interactive Quiz Application',
    shortDesc: 'A fast-paced trivia app with dual-choice mechanics and external API integration',
    longDesc: "Quizlet is an interactive quiz application with two trivia questions in each round, allowing the user to choose which question to answer, creating an engaging and strategic quiz experience.\n\nThe application manages async state flows using Redux thunks to fetch questions from the Open Trivia Database API. The UI leverages Styled Components for a polished, component-based design system, while implementing answer shuffling algorithms and real-time scoring.\n\nOne of the key technical challenges was safely handling HTML entities in questions and answers from the external API. I implemented sanitize-html to prevent XSS vulnerabilities while preserving proper text rendering. Another challenge was architecting clean Redux state management patterns with TypeScript, particularly typing async thunks and ensuring type safety across the component tree while maintaining good separation of concerns between UI logic and state management.\n\nI built this application to showcase my expertise in React hooks, Redux state management, TypeScript integration, external API consumption, and security best practices in a single-page application.",
    thumbnail: '/assets/Quizlet.png',
    fullImage: '/assets/Quizlet.png',
    demoUrl: 'https://quizlet-jj2e.onrender.com',
    repoUrl: 'https://github.com/szlaci3/quizlet',
    technologies: ['React', 'Redux Toolkit', 'TypeScript', 'Styled Components'],
    type: "poc"
  },
  {
    id: 3,
    title: 'Enterprise HR Management Application',
    shortDesc: 'A comprehensive HR web application featuring data visualization, employee management, and contract handling with virtual table optimization',
    longDesc: "This is a full-featured enterprise Human Resources management application designed to handle employee data, contracts, and company analytics. The application provides real-time dashboards with statistics on active employees, pending contracts, and workforce metrics, enabling HR teams to make data-driven decisions.\n\nThe application is built on Ant Design Pro framework with UmiJS for routing and build optimization, implementing complex features like multi-tab employee detail forms, chart visualizations using @ant-design/charts (insurance costs, employment statistics, department gender breakdowns), and a sophisticated table system. The architecture uses DVA (Redux wrapper) for state management and React hooks for component logic, with service layers handling API integration.\n\nOne of the key technical challenges was implementing virtual scrolling tables for optimal performance with large employee datasets while maintaining fixed headers and dual-axis scrolling functionality. I debugged and corrected buggy Ant Design Pro Table behaviors, particularly around cell rendering lifecycles and scroll synchronization. Another significant challenge was architecting the complex multi-step employee detail forms with proper validation, dynamic field dependencies (department selection affecting position options), and state synchronization across tabs while maintaining data integrity during add/edit operations.\n\nI built this software with enterprise React patterns, Ant Design Pro ecosystem, UmiJS framework, complex form validation, data visualization, TypeScript, and performance optimization for large datasets.",
    thumbnail: '/assets/AntHill.png',
    fullImage: '/assets/AntHill.png',
    demoUrl: 'https://szlaci3-hr.netlify.app/dist',
    repoUrl: 'https://github.com/szlaci3/anthill',
    technologies: ['React', 'Data Tables', 'Ant Design', 'TypeScript'],
    type: "poc"
  },
  {
    id: 4,
    title: 'Smart Anki - Spaced Repetition Flashcard System',
    shortDesc: 'A sophisticated flashcard application with intelligent scheduling and multi-sided card support',
    longDesc: "Smart Anki is a spaced repetition learning application that implements an adaptive review system with customizable rating intervals, allowing users to efficiently memorize information through scientifically-backed study techniques.\n\nThe application features a smart card selection algorithm that prioritizes cards based on due dates and review history, implementing a cold-start pattern with fallback cards to ensure instant UI responsiveness while API data loads. The system supports multi-sided flashcards (beyond traditional front/back), progressive reveal mechanics, and dynamic interval calculations based on user confidence ratings.\n\nOne of the key technical challenges was building the intelligent card scheduling algorithm that calculates optimal review intervals—ranging from 10 minutes for difficult cards to exponentially increasing day intervals for mastered content—while maintaining type safety across the async data flow between the REST API and React components.\n\nIn this project I showcased my proficiency in React hooks, TypeScript type transformations (API string types to runtime numbers), axios-based API integration, URL-based deep linking for specific cards, and implementing complex UX patterns like progressive disclosure and adaptive scheduling algorithms.",
    thumbnail: '/assets/SmartAnki.png',
    fullImage: '/assets/SmartAnki.png',
    demoUrl: 'https://smart-anki.onrender.com',
    repoUrl: 'https://github.com/szlaci3/smart-anki-2',
    technologies: ['React', 'TypeScript', 'Redis', 'REST API'],
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
                  <a href={project.demoUrl} className="project-link website-link" target="_blank" rel="noopener noreferrer">
                    <ExternalLink />
                    {project.type === "real" ? "Learn more on the company's website" : "Visit Website"}
                  </a>
                  {expandedProject === project.id && project.type !== "real" && (
                    <a href={project.repoUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      <GitHub />
                      View Repository
                    </a>
                  )}
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
