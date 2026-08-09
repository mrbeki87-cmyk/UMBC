import { Link } from 'react-router-dom';
import { Network } from 'lucide-react';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Tech Education Reimagined
          </div>
          <h1 className="hero-title">
            BUILD YOUR <span className="text-gold">FUTURE</span> IN TECHNOLOGY
          </h1>
          <p className="hero-subtitle">
            Master the essential skills of programming, web development, computer architecture, networking, and cybersecurity through focused, practical education.
          </p>
          <div className="hero-actions">
            <a href="#courses" className="btn btn-primary hero-btn">Explore Courses</a>
            <Link to="/signup" className="btn btn-outline-dark hero-btn">Get Started</Link>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="visual-abstract">
            <div className="abstract-glow"></div>
            <div className="abstract-grid"></div>
            <div className="abstract-icon-wrapper">
              <Network size={80} className="abstract-icon" />
            </div>
            <div className="data-lines">
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
