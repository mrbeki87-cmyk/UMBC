import { courses } from '../../data/courses';
import { CourseCard } from './CourseCard';
import './CoursesSection.css';

export function CoursesSection() {
  return (
    <section id="courses" className="section courses-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Explore Our Courses</h2>
          <p className="section-subtitle">
            Build the technical skills you need to succeed in today's digital world.
          </p>
        </div>
        
        <div className="courses-grid">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
