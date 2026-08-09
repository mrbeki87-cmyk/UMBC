import { courses } from '../../data/courses';
import { ArrowDown } from 'lucide-react';
import './LearningPath.css';

export function LearningPath() {
  return (
    <section className="section learning-path-section">
      <div className="container">
        <div className="learning-header">
          <h2 className="section-title">Explore Your Technology Journey</h2>
          <p className="section-subtitle">
            See how our specialized courses connect to build a comprehensive technical foundation.
          </p>
        </div>
        
        <div className="path-container">
          <div className="path-start">
            <span className="start-badge">START</span>
          </div>
          
          <div className="path-flow">
            {courses.map((course, index) => (
              <div key={course.id} className="path-step-wrapper">
                {index > 0 && (
                  <div className="path-connector">
                    <ArrowDown className="connector-icon" size={24} />
                  </div>
                )}
                <div className="path-step">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <h4 className="step-title">{course.title}</h4>
                    <p className="step-category">{course.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
