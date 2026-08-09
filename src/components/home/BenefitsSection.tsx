import { CheckCircle2, Target, GraduationCap, Building } from 'lucide-react';
import './BenefitsSection.css';

const benefits = [
  {
    icon: <CheckCircle2 size={32} />,
    title: "Practical Learning",
    description: "Focus on skills that can actually be applied in real-world scenarios."
  },
  {
    icon: <Target size={32} />,
    title: "Focused Curriculum",
    description: "Learn the essential technologies without unnecessary complexity."
  },
  {
    icon: <GraduationCap size={32} />,
    title: "Technology-Focused Education",
    description: "Study programming, web development, networking, architecture, and cybersecurity."
  },
  {
    icon: <Building size={32} />,
    title: "Career-Ready Skills",
    description: "Build a technical foundation for further education and professional opportunities."
  }
];

export function BenefitsSection() {
  return (
    <section className="section benefits-section">
      <div className="container">
        <div className="benefits-header">
          <h2 className="section-title">Learn Technology. Build Your Future.</h2>
        </div>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">
                {benefit.icon}
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-desc">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
