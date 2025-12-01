import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Details from './components/Details';
import { GitHub } from './components/icons/GitHub';
import { LinkedIn } from './components/icons/LinkedIn';
import { Facebook } from './components/icons/Facebook';

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Details />

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
                <GitHub />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/slaci" className="contact-link" target="_blank" rel="noopener noreferrer">
                <LinkedIn />
                LinkedIn
              </a>
              <a href="https://www.facebook.com/szalai.laci" className="contact-link" target="_blank" rel="noopener noreferrer">
                <Facebook />
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
