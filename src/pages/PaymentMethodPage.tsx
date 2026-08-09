import { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';
import { CheckoutHeader } from '../components/checkout/CheckoutHeader';
import { CheckoutFooter } from '../components/checkout/CheckoutFooter';
import { PaymentMethodOption } from '../components/checkout/PaymentMethodOption';
import { OrderSummary } from '../components/checkout/OrderSummary';
import { Lock, ArrowLeft } from 'lucide-react';
import './PaymentMethodPage.css';

// Mock payment methods data
const paymentMethods = [
  {
    id: "card",
    name: "Credit or debit card",
    logos: (
      <>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="Mastercard" className="payment-logo" />
      </>
    )
  },
  {
    id: "paypal",
    name: "PayPal",
    logos: <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="payment-logo" />
  },
  {
    id: "apple-pay",
    name: "Apple Pay",
    logos: <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="Apple Pay" className="payment-logo" />
  }
];

export function PaymentMethodPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const courseSlug = queryParams.get('course');
  
  const course = courses.find(c => c.slug === courseSlug);
  
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Secure Checkout | Tech University';
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

  const handlePayment = () => {
    if (selectedMethod) {
      // Navigate to placeholder for PART 4
      navigate(`/checkout/${selectedMethod}?course=${course.slug}`);
    }
  };

  const getButtonText = () => {
    if (!selectedMethod) return "Select a payment method";
    const method = paymentMethods.find(m => m.id === selectedMethod);
    return `Pay with ${method?.name}`;
  };

  return (
    <div className="checkout-layout">
      <CheckoutHeader />
      
      <main className="checkout-main">
        <div className="container checkout-container">
          
          <div className="checkout-back-link">
            <Link to={`/courses/${course.slug}`}>
              <ArrowLeft size={16} /> Back to course
            </Link>
          </div>
          
          <div className="checkout-grid">
            
            <div className="payment-methods-section">
              <h1 className="checkout-page-title">Payment methods</h1>
              
              <div className="security-notice">
                <Lock size={16} className="security-notice-icon" />
                <p>All transactions are secured, processed and authorized by external payment providers.</p>
              </div>
              
              <div className="payment-methods-container">
                {paymentMethods.map(method => (
                  <PaymentMethodOption
                    key={method.id}
                    id={method.id}
                    name={method.name}
                    logos={method.logos}
                    isSelected={selectedMethod === method.id}
                    onSelect={setSelectedMethod}
                  />
                ))}
              </div>
              
              {/* Payment button (Desktop) */}
              <div className="checkout-action desktop-only">
                <button 
                  className="btn btn-primary checkout-pay-btn"
                  disabled={!selectedMethod}
                  onClick={handlePayment}
                >
                  {getButtonText()}
                </button>
                {!selectedMethod && (
                  <p className="checkout-action-hint">Please select a payment method to continue.</p>
                )}
              </div>
            </div>
            
            <div className="order-summary-section">
              <OrderSummary course={course} />
            </div>
            
            {/* Payment button (Mobile) */}
            <div className="checkout-action mobile-only">
              <button 
                className="btn btn-primary checkout-pay-btn"
                disabled={!selectedMethod}
                onClick={handlePayment}
              >
                {getButtonText()}
              </button>
              {!selectedMethod && (
                <p className="checkout-action-hint">Please select a payment method to continue.</p>
              )}
            </div>
            
          </div>
        </div>
      </main>
      
      <CheckoutFooter />
    </div>
  );
}
