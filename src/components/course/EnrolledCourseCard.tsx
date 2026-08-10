import { ShieldCheck, Terminal, Globe, Cpu, Network, Check, BookOpen, FolderOpen, Infinity, Download, ShieldAlert } from 'lucide-react';
import type { Course } from '../../data/courses';
import './EnrolledCourseCard.css';

interface EnrolledCourseCardProps {
  course: Course;
}

export function EnrolledCourseCard({ course }: EnrolledCourseCardProps) {
  const getIcon = () => {
    switch (course.slug) {
      case 'programming': return <Terminal size={80} strokeWidth={1.5} />;
      case 'web-development': return <Globe size={80} strokeWidth={1.5} />;
      case 'computer-architecture': return <Cpu size={80} strokeWidth={1.5} />;
      case 'networking': return <Network size={80} strokeWidth={1.5} />;
      case 'cybersecurity': return <ShieldCheck size={80} strokeWidth={1.5} />;
      default: return <Terminal size={80} strokeWidth={1.5} />;
    }
  };

  return (
    <div className="enrolled-course-card">
      <div className="enrolled-card-main">
        {/* Left: Course Image (Simulated) */}
        <div className="enrolled-course-visual">
          <div className="enrolled-visual-bg"></div>
          <div className="enrolled-icon">
            {getIcon()}
          </div>
        </div>

        {/* Middle: Course Information */}
        <div className="enrolled-course-info">
          <div className="enrolled-badge">
            <Check size={14} strokeWidth={3} />
            <span>ENROLLED</span>
          </div>
          
          <h2 className="enrolled-course-title">{course.title}</h2>
          <div className="enrolled-course-category">
            <BookOpen size={16} /> {course.category}
          </div>
          
          <p className="enrolled-course-desc">{course.description}</p>
          
          <div className="enrolled-feature-indicators">
            <div className="feature-indicator">
              <BookOpen className="indicator-icon" size={24} />
              <div className="indicator-text">
                <strong>Comprehensive</strong>
                <span>Course Package</span>
              </div>
            </div>
            <div className="feature-indicator">
              <FolderOpen className="indicator-icon" size={24} />
              <div className="indicator-text">
                <strong>Complete Materials</strong>
                <span>Video, Docs & Resources</span>
              </div>
            </div>
            <div className="feature-indicator">
              <Infinity className="indicator-icon" size={24} />
              <div className="indicator-text">
                <strong>Lifetime Access</strong>
                <span>Yours to keep forever</span>
              </div>
            </div>
            <div className="feature-indicator">
              <ShieldCheck className="indicator-icon" size={24} />
              <div className="indicator-text">
                <strong>One-time Purchase</strong>
                <span>No recurring fees</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Course Package */}
        <div className="enrolled-course-package">
          <h3 className="package-title">Your Course Package</h3>
          
          <div className="package-file-card">
            <div className="file-header">
              <div className="file-icon-wrapper">
                <FolderOpen size={24} />
              </div>
              <div className="file-details">
                <span className="file-name">{course.slug}.zip</span>
                <span className="file-type">ZIP</span>
              </div>
            </div>
            <p className="file-desc">Complete course package including videos, notes, exercises, and resources.</p>
            
            {course.downloadFile ? (
              <a 
                href={(() => {
                  if (course.downloadFile.includes('drive.google.com/file/d/')) {
                    const match = course.downloadFile.match(/\/d\/([a-zA-Z0-9_-]+)/);
                    if (match && match[1]) {
                      return `https://drive.google.com/uc?export=download&id=${match[1]}`;
                    }
                  }
                  return course.downloadFile;
                })()} 
                download 
                target={course.downloadFile.includes('drive.google.com') ? "_blank" : undefined}
                rel={course.downloadFile.includes('drive.google.com') ? "noopener noreferrer" : undefined}
                className="btn btn-primary download-btn"
              >
                <Download size={18} />
                Download Course
              </a>
            ) : (
              <div className="btn btn-primary download-btn disabled-btn" style={{opacity: 0.7, pointerEvents: 'none'}}>
                Materials not available yet
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Bottom: Important Information Banner */}
      <div className="enrolled-important-banner">
        <ShieldAlert size={20} className="banner-icon" />
        <p><strong>Important:</strong> This course package is for your personal use only. Please do not share or distribute the materials.</p>
      </div>
    </div>
  );
}
