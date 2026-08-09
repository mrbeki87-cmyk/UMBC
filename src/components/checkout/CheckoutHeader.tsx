import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import './CheckoutHeader.css';

export function CheckoutHeader() {
  return (
    <header className="checkout-header">
      <div className="container checkout-header-container">
        <Link to="/" className="checkout-logo">
          <img src="/logo.jpg" alt="UMBC Logo" className="logo-image" style={{ height: '72px', objectFit: 'contain' }} />
        </Link>
        
        <div className="checkout-security-badge">
          <Shield size={14} className="security-icon" />
          <span className="security-text">Secure Checkout</span>
        </div>
        
        <div className="checkout-progress">
          <span className="progress-step active">1 Payment Method</span>
          <span className="progress-divider"></span>
          <span className="progress-step">2 Payment</span>
        </div>
      </div>
    </header>
  );
}
