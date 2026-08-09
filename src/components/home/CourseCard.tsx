import { Link } from 'react-router-dom';
import type { Course } from '../../data/courses';
import { Terminal, Globe, Cpu, Network, ShieldCheck, ArrowRight } from 'lucide-react';
import './CourseCard.css';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  // Return the correct abstract icon based on the slug
  const getIcon = () => {
    switch (course.slug) {
      case 'programming': return <Terminal size={32} />;
      case 'web-development': return <Globe size={32} />;
      case 'computer-architecture': return <Cpu size={32} />;
      case 'networking': return <Network size={32} />;
      case 'cybersecurity': return <ShieldCheck size={32} />;
      default: return <Terminal size={32} />;
    }
  };

  return (
    <div className="course-card">
      <div className="course-visual">
        <div className="course-icon-bg">
          {getIcon()}
        </div>
      </div>
      <div className="course-content">
        <div className="course-meta">
          <span className="course-category">{course.category}</span>
          <div className="course-price-container">
            {course.originalPrice && (
              <span className="course-original-price">${course.originalPrice}</span>
            )}
            <span className="course-price">${course.price}</span>
          </div>
        </div>
        <h3 className="course-title">{course.title}</h3>
        <p className="course-desc">{course.description}</p>
        <Link to={`/courses/${course.slug}`} className="course-cta">
          View Course <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
