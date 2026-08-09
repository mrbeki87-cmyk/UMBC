import { courses } from '../../data/courses';
import { CourseCard } from '../home/CourseCard';
import './RelatedCourses.css';

interface RelatedCoursesProps {
  currentCourseId: string;
}

export function RelatedCourses({ currentCourseId }: RelatedCoursesProps) {
  // Filter out the current course and take up to 3
  const relatedCourses = courses
    .filter(course => course.id !== currentCourseId)
    .slice(0, 3);

  if (relatedCourses.length === 0) return null;

  return (
    <div className="related-courses">
      <h2 className="section-title-sm">Explore More Courses</h2>
      <div className="related-grid">
        {relatedCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
