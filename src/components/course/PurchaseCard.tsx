import { Link } from 'react-router-dom';
import type { Course } from '../../data/courses';
import { Terminal, Globe, Cpu, Network, ShieldCheck, Check } from 'lucide-react';
import './PurchaseCard.css';

interface PurchaseCardProps {
  course: Course;
}

export function PurchaseCard({ course }: PurchaseCardProps) {
  const getIcon = () => {
    switch (course.slug) {
      case 'programming': return <Terminal size={64} />;
      case 'web-development': return <Globe size={64} />;
      case 'computer-architecture': return <Cpu size={64} />;
      case 'networking': return <Network size={64} />;
      case 'cybersecurity': return <ShieldCheck size={64} />;
      default: return <Terminal size={64} />;
    }
  };

  return (
    <div className="purchase-card-wrapper">
      <div className="purchase-card">
        <div className="purchase-visual">
          <div className="purchase-visual-bg"></div>
          <div className="purchase-icon">
            {getIcon()}
          </div>
        </div>
        
        <div className="purchase-content">
          <div className="purchase-price-section">
            {course.originalPrice && (
              <span className="purchase-original-price">${course.originalPrice}</span>
            )}
            <span className="purchase-price">${course.price}</span>
            <span className="purchase-type">One-time payment</span>
          </div>
          
          <Link to={`/checkout/payment-method?course=${course.slug}`} className="btn btn-primary btn-block enroll-btn">
            ENROLL NOW
          </Link>
          
          <div className="purchase-features">
            <h4 className="features-title">This course includes:</h4>
            <ul className="features-list">
              <li><Check size={16} className="feature-icon" /> Full course access</li>
              <li><Check size={16} className="feature-icon" /> Self-paced learning</li>
              <li><Check size={16} className="feature-icon" /> Course materials</li>
              <li><Check size={16} className="feature-icon" /> Lifetime access</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
