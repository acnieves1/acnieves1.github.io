import { useState } from 'react'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projectsData';
import Footer from './components/Footer';
import './index.css';

function App() {
 return (
    <>{/* Invisible wrapper */}
      <div id="top"></div>
      <Navbar />

      <div className="portfolio-container">
        <Hero />
        {/* Projects */}
        <section id="projects" className="projects-grid">
          {/*go through all projects and generate a ProjectCard for each*/}
          {projects.map((projectData) => (
            <ProjectCard key={projectData.id} project={projectData} />
          ))} 
        </section>

        {/* Experience */}
        <section id="experience" style={{ padding: '4rem 0', marginTop: '4rem', borderTop: '1px solid var(--border-color)' }}>
            <h2>Experience</h2>
            <p style={{ color: 'var(--text-muted)' }}>coming soon...</p>
        </section>

        {/* Education */}
        <section id="education" style={{ padding: '4rem 0' }}>
            <h2>Education</h2>
            <p style={{ color: 'var(--text-muted)' }}>Academic background coming soon...</p>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
