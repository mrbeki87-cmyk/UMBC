import type { Course } from '../../data/courses';
import { Star, Clock, BookOpen, MonitorPlay, Infinity } from 'lucide-react';
import './CourseHero.css';

interface CourseHeroProps {
  course: Course;
}

export function CourseHero({ course }: CourseHeroProps) {
  return (
    <section className="course-hero">
      <div className="container">
        <div className="course-hero-content">
          <div className="hero-main-col animate-fade-in">
            <span className="course-category-badge">{course.category}</span>
            <h1 className="course-title">{course.title}</h1>
            <p className="course-description">{course.description}</p>
            
            <div className="course-meta-data">
              <div className="meta-item rating">
                <span className="stars">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </span>
                <span className="rating-score">4.8</span>
                <span className="rating-placeholder">(4.9 Rating)</span>
              </div>
              
              <div className="meta-pills">
                <span className="meta-pill">
                  <MonitorPlay size={16} /> {course.level}
                </span>
                <span className="meta-pill">
                  <BookOpen size={16} /> {course.lessonsCount}
                </span>
                <span className="meta-pill">
                  <Clock size={16} /> {course.duration}
                </span>
                <span className="meta-pill">
                  <Infinity size={16} /> Lifetime Access
                </span>
              </div>
            </div>
          </div>
          
          {/* Right column is reserved for the sticky PurchaseCard on desktop */}
          <div className="hero-sidebar-col">
            {/* PurchaseCard component will be injected via page layout */}
          </div>
        </div>
      </div>
    </section>
  );
}
