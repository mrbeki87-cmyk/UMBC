import { BookOpen, Laptop, Briefcase, Clock } from 'lucide-react';
import './TrustStrip.css';

const trustItems = [
  {
    icon: <BookOpen size={24} />,
    title: "5 Specialized Courses",
    description: "Focused technical education"
  },
  {
    icon: <Laptop size={24} />,
    title: "Practical Learning",
    description: "Hands-on technology education"
  },
  {
    icon: <Briefcase size={24} />,
    title: "Career-Focused Skills",
    description: "Build a technical foundation"
  },
  {
    icon: <Clock size={24} />,
    title: "Learn at Your Pace",
    description: "Flexible digital learning"
  }
];

export function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="container">
        <div className="trust-grid">
          {trustItems.map((item, index) => (
            <div key={index} className="trust-item">
              <div className="trust-icon">
                {item.icon}
              </div>
              <div className="trust-text">
                <h4 className="trust-title">{item.title}</h4>
                <p className="trust-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
