import { useEffect } from 'react';
import { courses } from '../data/courses';
import { EnrolledCourseCard } from '../components/course/EnrolledCourseCard';
import './StudentCoursesPage.css';

export function StudentCoursesPage() {
  useEffect(() => {
    document.title = 'My Courses | Tech University';
  }, []);

  // For the MVP, we are hardcoding the Cybersecurity course
  const course = courses.find(c => c.slug === 'cybersecurity');

  return (
    <main className="student-courses-page">
      <div className="container">
        <header className="student-dashboard-header">
          <h1 className="dashboard-title">My Courses</h1>
          <p className="dashboard-subtitle">
            Welcome back! Here are your enrolled courses.
            <br />
            Download your course materials and start learning.
          </p>
        </header>

        <div className="enrolled-courses-list">
          {course ? (
            <EnrolledCourseCard course={course} />
          ) : (
            <div className="course-unavailable">
              <p>Course information unavailable.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
