import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projectsData';
import './index.css';

function App() {
 return (
    <div className="portfolio-container">
      
      <section className="hero-section">
        <h1>Ariana Nieves</h1>
        <h2>Software Developer & Systems Engineer</h2>
      </section>

      <section className="projects-grid">
        {/*go through all projects and generate a ProjectCard for each*/}
        {projects.map((projectData) => (
          <ProjectCard key={projectData.id} project={projectData} />
        ))}
      </section>

    </div>
  );
}

export default App;
