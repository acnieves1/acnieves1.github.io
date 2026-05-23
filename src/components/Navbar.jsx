export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <a href="#top" className="nav-logo">
          AN.
        </a>

        {/* Navigation Links */}
        <div className="nav-links">
          <a href="#projects" className="nav-item">Projects</a>
          <a href="#experience" className="nav-item">Experience</a>
          <a href="#education" className="nav-item">Education</a>
        </div>

        {/* The Call to Action */}
        <a 
          href="/Ariana_Nieves_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-resume-btn"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}