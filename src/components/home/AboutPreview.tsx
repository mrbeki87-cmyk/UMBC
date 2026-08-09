import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { siteConfig } from '../../config';
import './AboutPreview.css';

export function AboutPreview() {
  return (
    <section className="section about-preview">
      <div className="container">
        <div className="about-content">
          <div className="about-icon-wrapper">
            <Shield size={48} className="about-icon" />
          </div>
          <h2 className="section-title">Focused on the Future of Technology</h2>
          <p className="about-text">
            {siteConfig.universityName} is a modern academic institution dedicated to practical education in Programming, Web Development, Computer Architecture, Networking, and Cybersecurity. Our mission is to bridge the gap between theoretical knowledge and real-world application.
          </p>
          <Link to="/about" className="btn btn-outline-dark">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
