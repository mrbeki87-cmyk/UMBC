import { Link } from 'react-router-dom';
import { CreditCard } from 'lucide-react';
import './CheckoutPlaceholder.css';

export function CheckoutPlaceholder() {
  return (
    <main className="checkout-placeholder">
      <div className="container">
        <div className="placeholder-content">
          <div className="icon-circle">
            <CreditCard size={48} />
          </div>
          <h1 className="placeholder-title">Checkout Payment Method</h1>
          <p className="placeholder-text">
            This is a placeholder for the payment method selection screen. 
            The actual checkout functionality will be built in PART 3.
          </p>
          <div className="placeholder-actions">
            <Link to="/" className="btn btn-outline-dark">Return to Home</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
