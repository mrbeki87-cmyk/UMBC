import './CourseDetails.css';

interface CourseDetailsProps {
  description: string;
  requirements: string[];
  audience: string[];
}

export function CourseDetails({ description, requirements, audience }: CourseDetailsProps) {
  return (
    <div className="course-details-section">
      <div className="detail-block">
        <h2 className="section-title-sm">About This Course</h2>
        <p className="detail-description">{description}</p>
      </div>

      <div className="detail-block">
        <h2 className="section-title-sm">Requirements</h2>
        <ul className="bullet-list">
          {requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      <div className="detail-block">
        <h2 className="section-title-sm">Who This Course Is For</h2>
        <ul className="bullet-list">
          {audience.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
