import { User } from 'lucide-react';
import './CourseInstructor.css';

interface InstructorProps {
  instructor: {
    name: string;
    role: string;
    bio: string;
    image?: string;
  };
}

export function CourseInstructor({ instructor }: InstructorProps) {
  return (
    <div className="course-instructor">
      <h2 className="section-title-sm">Instructor</h2>
      
      <div className="instructor-card">
        <div className="instructor-photo">
          {instructor.image ? (
            <img src={instructor.image} alt={instructor.name} />
          ) : (
            <div className="instructor-photo-placeholder">
              <User size={40} />
            </div>
          )}
        </div>
        
        <div className="instructor-info">
          <h3 className="instructor-name">{instructor.name}</h3>
          <p className="instructor-role">{instructor.role}</p>
          <p className="instructor-bio">{instructor.bio}</p>
        </div>
      </div>
    </div>
  );
}
