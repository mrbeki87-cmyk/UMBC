import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { Breadcrumb } from '../components/course/Breadcrumb';
import { CourseHero } from '../components/course/CourseHero';
import { PurchaseCard } from '../components/course/PurchaseCard';
import { CourseOutcomes } from '../components/course/CourseOutcomes';
import { CourseCurriculum } from '../components/course/CourseCurriculum';
import { CourseDetails } from '../components/course/CourseDetails';
import { CourseInstructor } from '../components/course/CourseInstructor';
import { RelatedCourses } from '../components/course/RelatedCourses';
import { ShieldAlert } from 'lucide-react';
import './CourseDetail.css';

export function CourseDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  const course = courses.find(c => c.slug === slug);

  useEffect(() => {
    if (course) {
      document.title = `${course.title} | Tech University`;
    } else {
      document.title = 'Course Not Found | Tech University';
    }
  }, [course]);

  if (!course) {
    return (
      <main className="course-not-found">
        <div className="container not-found-content">
          <ShieldAlert size={64} className="not-found-icon" />
          <h1 className="not-found-title">Course Not Found</h1>
          <p className="not-found-desc">Sorry, we couldn't find the course you're looking for.</p>
          <Link to="/" className="btn btn-primary">Explore Courses</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="course-detail-page">
      <Breadcrumb category={course.category} />
      <CourseHero course={course} />
      
      <div className="container course-body-container">
        <div className="course-body-grid">
          <div className="course-main-content">
            {/* On mobile, PurchaseCard appears here */}
            <div className="mobile-purchase-card">
              <PurchaseCard course={course} />
            </div>

            <CourseOutcomes outcomes={course.learningOutcomes} />
            <CourseCurriculum 
              curriculum={course.curriculum} 
              totalLessons={course.lessonsCount} 
              totalDuration={course.duration} 
            />
            <CourseDetails 
              description={course.description} 
              requirements={course.requirements} 
              audience={course.audience} 
            />
            <CourseInstructor instructor={course.instructor} />
            
            {/* Final CTA before related courses */}
            <div className="course-final-cta">
              <h2 className="section-title-sm">Start Building Your Technology Skills</h2>
              <p>Explore our focused technology courses and take the next step in your learning journey.</p>
              <Link to="/#courses" className="btn btn-primary">Explore Courses</Link>
            </div>

            <RelatedCourses currentCourseId={course.id} />
          </div>
          
          <div className="course-sidebar">
            {/* Sticky PurchaseCard on desktop */}
            <div className="desktop-purchase-card">
              <PurchaseCard course={course} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
