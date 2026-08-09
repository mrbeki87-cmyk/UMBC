import { Link } from 'react-router-dom';
import './CTASection.css';

export function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Your Technology Journey?</h2>
          <p className="cta-subtitle">
            Explore our specialized courses and start building the skills for your future.
          </p>
          <div className="cta-actions">
            <a href="#courses" className="btn btn-outline cta-btn">Explore Courses</a>
            <Link to="/signup" className="btn btn-primary cta-btn">Create Account</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
