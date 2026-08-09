import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { courses } from '../../data/courses';
import { CheckoutHeader } from '../../components/checkout/CheckoutHeader';
import { CheckoutFooter } from '../../components/checkout/CheckoutFooter';
import { CheckoutFormLayout } from '../../components/checkout/CheckoutFormLayout';
import './CardCheckoutPage.css';

export function ApplePayCheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const courseSlug = queryParams.get('course');
  const course = courses.find(c => c.slug === courseSlug);

  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    document.title = 'Apple Pay Checkout | Tech University';
  }, []);

  if (!course) {
    return (
      <div className="checkout-layout">
        <CheckoutHeader />
        <main className="checkout-error">
          <div className="container">
            <h2>Course information is missing.</h2>
            <p>Please return to the course page and try again.</p>
            <Link to="/#courses" className="btn btn-primary mt-4">Browse Courses</Link>
          </div>
        </main>
        <CheckoutFooter />
      </div>
    );
  }

  const handleApplePaySubmit = () => {
    setIsProcessing(true);
    // Simulate Apple Pay processing
    setTimeout(() => {
      navigate(`/checkout/success?course=${course.slug}&method=apple-pay`);
    }, 1500);
  };

  return (
    <div className="checkout-layout">
      <CheckoutHeader />
      
      <main className="checkout-main">
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <CheckoutFormLayout course={course}>
            
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" 
                alt="Apple Pay" 
                style={{ height: '40px', marginBottom: '1.5rem' }} 
              />
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-gray-900)' }}>Apple Pay Checkout</h2>
              <p style={{ color: 'var(--color-gray-600)', marginBottom: '2rem' }}>
                Continue with the simulated Apple Pay payment. No real payment credentials will be requested.
              </p>
              
              <button 
                onClick={handleApplePaySubmit}
                className="btn btn-primary checkout-submit-btn"
                disabled={isProcessing}
                style={{ maxWidth: '300px', margin: '0 auto', background: '#000', color: '#fff', borderColor: '#000' }}
              >
                {isProcessing ? 'Processing...' : 'Continue'}
              </button>
            </div>
            
          </CheckoutFormLayout>
        </div>
      </main>
      
      <CheckoutFooter />
    </div>
  );
}
