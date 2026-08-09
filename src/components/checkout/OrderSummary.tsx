import type { Course } from '../../data/courses';
import { Terminal, Globe, Cpu, Network, ShieldCheck } from 'lucide-react';
import './OrderSummary.css';

interface OrderSummaryProps {
  course: Course;
}

export function OrderSummary({ course }: OrderSummaryProps) {
  const paymentFee = 0;
  const total = course.price + paymentFee;

  const getIcon = () => {
    switch (course.slug) {
      case 'programming': return <Terminal size={24} />;
      case 'web-development': return <Globe size={24} />;
      case 'computer-architecture': return <Cpu size={24} />;
      case 'networking': return <Network size={24} />;
      case 'cybersecurity': return <ShieldCheck size={24} />;
      default: return <Terminal size={24} />;
    }
  };

  return (
    <div className="order-summary-card">
      <div className="order-summary-header">
        <h2 className="summary-title">Cart total</h2>
        <span className="summary-subtitle">(1 course)</span>
      </div>

      <div className="summary-course-info">
        <div className="summary-course-icon-bg">
          {getIcon()}
        </div>
        <div className="summary-course-details">
          <h3 className="summary-course-title">{course.title}</h3>
          <span className="summary-course-category">{course.category}</span>
          <span className="summary-course-type">One-time purchase</span>
        </div>
      </div>

      <div className="summary-pricing">
        <div className="pricing-row">
          <span>{course.title}</span>
          <span>${course.price.toFixed(2)}</span>
        </div>
        <div className="pricing-row">
          <span>Payment fee</span>
          <span>${paymentFee.toFixed(2)}</span>
        </div>
        <div className="pricing-row total-row">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
