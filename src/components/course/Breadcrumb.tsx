import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './Breadcrumb.css';

interface BreadcrumbProps {
  category: string;
}

export function Breadcrumb({ category }: BreadcrumbProps) {
  return (
    <div className="breadcrumb-container">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <ChevronRight size={14} className="breadcrumb-separator" />
          <Link to="/#courses" className="breadcrumb-link">Courses</Link>
          <ChevronRight size={14} className="breadcrumb-separator" />
          <span className="breadcrumb-current">{category}</span>
        </nav>
      </div>
    </div>
  );
}
