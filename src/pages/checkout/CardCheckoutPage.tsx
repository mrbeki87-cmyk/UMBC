import { useState, type FormEvent, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';
import { courses } from '../../data/courses';
import { CheckoutHeader } from '../../components/checkout/CheckoutHeader';
import { CheckoutFooter } from '../../components/checkout/CheckoutFooter';
import { CheckoutFormLayout } from '../../components/checkout/CheckoutFormLayout';
import './CardCheckoutPage.css';

const DEMO_CARD_NUMBER = '4938755453871103';
const DEMO_EXPIRY = '07/29';
const DEMO_CVV = '153';
const DEMO_CARDHOLDER_NAME = 'ABEL BINYAM DESALEGN';

export function CardCheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const courseSlug = queryParams.get('course');
  const course = courses.find(c => c.slug === courseSlug);

  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    name: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState('');

  useEffect(() => {
    document.title = 'Card Payment | Tech University';
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

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.cardNumber.trim()) newErrors.cardNumber = "Please enter your card number.";
    if (!formData.expiry.trim()) newErrors.expiry = "Please enter your expiration date.";
    if (!formData.cvv.trim()) newErrors.cvv = "Please enter your CVV.";
    if (!formData.name.trim()) newErrors.name = "Please enter the cardholder name.";
    
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setGeneralError('');
      return false;
    }
    
    // Demo validation
    const normalizedCard = formData.cardNumber.replace(/\s+/g, '');
    const normalizedName = formData.name.trim().toLowerCase();
    const demoName = DEMO_CARDHOLDER_NAME.toLowerCase();
    
    if (
      normalizedCard !== DEMO_CARD_NUMBER ||
      formData.expiry.trim() !== DEMO_EXPIRY ||
      formData.cvv.trim() !== DEMO_CVV ||
      normalizedName !== demoName
    ) {
      setGeneralError("Payment details could not be verified. Please check your card information and try again.");
      return false;
    }
    
    setGeneralError('');
    return true;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsProcessing(true);
    
    // Simulate payment processing delay
    setTimeout(() => {
      navigate(`/checkout/success?course=${course.slug}&method=card`);
    }, 1500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
    if (generalError) {
      setGeneralError('');
    }
  };

  return (
    <div className="checkout-layout">
      <CheckoutHeader />
      
      <main className="checkout-main">
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <CheckoutFormLayout course={course}>
            
            <form className="demo-checkout-form" onSubmit={handleSubmit}>
              
              <div className="form-group">
                <label className="form-label" htmlFor="cardNumber">Card number</label>
                <input 
                  type="text" 
                  id="cardNumber"
                  className={`form-input ${errors.cardNumber ? 'input-error' : ''}`}
                  placeholder="XXXX XXXX XXXX XXXX"
                  value={formData.cardNumber}
                  onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                  disabled={isProcessing}
                  maxLength={19}
                />
                {errors.cardNumber ? (
                  <span className="form-error">{errors.cardNumber}</span>
                ) : (
                  <span className="form-hint">All transactions are secured and encrypted.</span>
                )}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="expiry">Expiration date</label>
                  <input 
                    type="text" 
                    id="expiry"
                    className={`form-input ${errors.expiry ? 'input-error' : ''}`}
                    placeholder="MM/YY"
                    value={formData.expiry}
                    onChange={(e) => handleInputChange('expiry', e.target.value)}
                    disabled={isProcessing}
                    maxLength={5}
                  />
                  {errors.expiry ? (
                    <span className="form-error">{errors.expiry}</span>
                  ) : (
                    <span className="form-hint">MM/YY format</span>
                  )}
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="cvv">
                    CVV/CVC 
                    <HelpCircle size={14} className="form-label-icon" />
                  </label>
                  <input 
                    type="password" 
                    id="cvv"
                    className={`form-input ${errors.cvv ? 'input-error' : ''}`}
                    placeholder="•••"
                    value={formData.cvv}
                    onChange={(e) => handleInputChange('cvv', e.target.value)}
                    disabled={isProcessing}
                    maxLength={4}
                  />
                  {errors.cvv && <span className="form-error">{errors.cvv}</span>}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="name">Cardholder name</label>
                <input 
                  type="text" 
                  id="name"
                  className={`form-input ${errors.name ? 'input-error' : ''}`}
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  disabled={isProcessing}
                />
                {errors.name ? (
                  <span className="form-error">{errors.name}</span>
                ) : (
                  <span className="form-hint">A full name, as it appears on the card</span>
                )}
              </div>

              <label className="checkbox-group">
                <input type="checkbox" className="checkbox-input" disabled={isProcessing} />
                <span className="checkbox-label">Save for future payments</span>
              </label>

              {generalError && (
                <div className="form-error general-error" style={{ marginBottom: '1rem', padding: '0.75rem', backgroundColor: '#fee2e2', color: '#ef4444', borderRadius: '0.375rem', fontSize: '0.9rem', fontWeight: 500 }}>
                  {generalError}
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-primary checkout-submit-btn"
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : 'Confirm'}
              </button>
              
            </form>
            
          </CheckoutFormLayout>
        </div>
      </main>
      
      <CheckoutFooter />
    </div>
  );
}
