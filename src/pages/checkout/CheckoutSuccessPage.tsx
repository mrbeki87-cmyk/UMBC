import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { courses } from '../../data/courses';
import { CheckoutHeader } from '../../components/checkout/CheckoutHeader';
import { CheckoutFooter } from '../../components/checkout/CheckoutFooter';
import './CheckoutSuccessPage.css';

const methodNames: Record<string, string> = {
  'card': 'Credit or debit card',
  'paypal': 'PayPal',
  'apple-pay': 'Apple Pay'
};

export function CheckoutSuccessPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const courseSlug = queryParams.get('course');
  const methodId = queryParams.get('method') || 'card';
  const course = courses.find(c => c.slug === courseSlug);
  
  const methodName = methodNames[methodId] || 'Card';

  useEffect(() => {
    document.title = 'Payment Successful | Tech University';
  }, []);

  if (!course) {
    return (
      <div className="checkout-layout">
        <CheckoutHeader />
        <main className="checkout-error">
          <div className="container">
            <h2>Course information is missing.</h2>
            <p>We could not find the details of your recent transaction.</p>
            <Link to="/#courses" className="btn btn-primary mt-4">Browse Courses</Link>
          </div>
        </main>
        <CheckoutFooter />
      </div>
    );
  }

  return (
    <div className="checkout-layout">
      <CheckoutHeader />
      
      <main className="checkout-main">
        <div className="container">
          <div className="success-page-content">
            
            <div className="success-icon-wrapper">
              <Check size={40} strokeWidth={3} />
            </div>
            
            <h1 className="success-title">Payment Successful!</h1>
            <p className="success-subtitle">
              Congratulations! Your enrollment has been successfully completed. 
              You can now access your course materials.
            </p>
            
            <div className="success-details-card">
              <div className="success-detail-row">
                <span className="success-detail-label">Course</span>
                <span className="success-detail-value">{course.title}</span>
              </div>
              <div className="success-detail-row">
                <span className="success-detail-label">Amount</span>
                <span className="success-detail-value">${course.price.toFixed(2)}</span>
              </div>
              <div className="success-detail-row">
                <span className="success-detail-label">Payment method</span>
                <span className="success-detail-value">{methodName}</span>
              </div>
              <div className="success-detail-row">
                <span className="success-detail-label">Status</span>
                <span className="success-detail-value" style={{ color: '#10B981' }}>Successful</span>
              </div>
            </div>
            
            <div className="success-actions">
              <Link to="/student/courses" className="btn btn-primary">
                Go to My Courses
              </Link>
              <Link to="/" className="btn btn-outline">
                Back to Home
              </Link>
            </div>
            
          </div>
        </div>
      </main>
      
      <CheckoutFooter />
    </div>
  );
}
