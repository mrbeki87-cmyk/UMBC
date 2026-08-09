import { useState } from 'react';
import type { CurriculumSection } from '../../data/courses';
import { ChevronDown, ChevronUp, PlayCircle } from 'lucide-react';
import './CourseCurriculum.css';

interface CourseCurriculumProps {
  curriculum: CurriculumSection[];
  totalLessons: string;
  totalDuration: string;
}

export function CourseCurriculum({ curriculum, totalLessons, totalDuration }: CourseCurriculumProps) {
  const [openSections, setOpenSections] = useState<number[]>([0]); // Open first section by default

  const toggleSection = (index: number) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter(i => i !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };

  const expandAll = () => setOpenSections(curriculum.map((_, i) => i));
  const collapseAll = () => setOpenSections([]);

  return (
    <div className="course-curriculum">
      <div className="curriculum-header">
        <h2 className="section-title-sm">Course Content</h2>
        <div className="curriculum-controls">
          <span className="curriculum-stats">
            {curriculum.length} sections • {totalLessons} • {totalDuration} total length
          </span>
          <div className="curriculum-actions">
            <button onClick={expandAll} className="btn-text">Expand all</button>
            <span className="divider">|</span>
            <button onClick={collapseAll} className="btn-text">Collapse all</button>
          </div>
        </div>
      </div>

      <div className="accordion-container">
        {curriculum.map((section, index) => {
          const isOpen = openSections.includes(index);
          return (
            <div key={index} className={`accordion-item ${isOpen ? 'open' : ''}`}>
              <button 
                className="accordion-header" 
                onClick={() => toggleSection(index)}
                aria-expanded={isOpen}
              >
                <div className="accordion-title-wrap">
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  <span className="accordion-title">{section.title}</span>
                </div>
                <span className="accordion-meta">{section.lessons.length} lectures</span>
              </button>
              
              {isOpen && (
                <div className="accordion-content">
                  <ul className="lesson-list">
                    {section.lessons.map((lesson, idx) => (
                      <li key={idx} className="lesson-item">
                        <div className="lesson-title-wrap">
                          <PlayCircle size={16} className="lesson-icon" />
                          <span className="lesson-title">{lesson.title}</span>
                        </div>
                        <span className="lesson-duration">{lesson.duration}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
