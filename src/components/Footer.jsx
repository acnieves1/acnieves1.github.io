export default function Footer() {
  return (
    <footer id="contact" className="footer-section">
      <div className="footer-content">
        <div className="footer-info">
          <h2>Ariana Nieves</h2>
          <p>Aspiring Software Developer</p>
        </div>
        
        <div className="footer-contact">
          <a href="mailto:acnieves391@gmail.com" className="footer-link">acnieves391@gmail.com</a>
          <a href="tel:7187378528" className="footer-link">(718) 737-8528</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ariana Nieves. Built with React.</p>
      </div>
    </footer>
  );
}