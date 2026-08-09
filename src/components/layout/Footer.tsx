import { Link } from 'react-router-dom';
// Removed Shield import
import { siteConfig } from '../../config';
import './Footer.css';
import logoImg from '../../assets/logo.jpg';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={logoImg} alt="UMBC Logo" className="logo-image" style={{ height: '96px', objectFit: 'contain' }} />
            </Link>
            <p className="footer-description">
              A modern technology university focused on practical education in programming, web development, architecture, networking, and cybersecurity.
            </p>
          </div>

          <div className="footer-nav">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><a href="#courses">Courses</a></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-nav">
            <h4 className="footer-heading">Account</h4>
            <ul className="footer-links">
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
          </div>

          <div className="footer-nav">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li><a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a></li>
              <li><a href={`tel:${siteConfig.contactPhone}`}>{siteConfig.contactPhone}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {siteConfig.universityName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
