export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      
      <div className="tech-stack">
        {project.tech.map((skill, index) => (
          <span key={index} className="badge">{skill}</span>
        ))}
      </div>

      {/*Conditional rendering based on the isLive flag */}
      {project.isLive ? (
        <a href={project.githubLink} target="_blank" className="btn-active">
          View on GitHub
        </a>
      ) : (
        <button disabled className="btn-disabled">
          Code Coming Soon
        </button>
      )}
    </div>
  );
}