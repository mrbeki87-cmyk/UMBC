import { CheckCircle2 } from 'lucide-react';
import './CourseOutcomes.css';

interface CourseOutcomesProps {
  outcomes: string[];
}

export function CourseOutcomes({ outcomes }: CourseOutcomesProps) {
  if (!outcomes || outcomes.length === 0) return null;

  return (
    <div className="course-outcomes">
      <h2 className="section-title-sm">What You'll Learn</h2>
      <div className="outcomes-grid">
        {outcomes.map((outcome, index) => (
          <div key={index} className="outcome-item">
            <CheckCircle2 size={20} className="outcome-icon" />
            <span className="outcome-text">{outcome}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
