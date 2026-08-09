import { siteConfig } from '../../config';
import './CheckoutFooter.css';

export function CheckoutFooter() {
  return (
    <footer className="checkout-footer">
      <div className="container checkout-footer-container">
        <p className="checkout-copyright">
          &copy; {new Date().getFullYear()} {siteConfig.universityName}. All rights reserved.
        </p>
        <div className="checkout-footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Support</a>
        </div>
      </div>
    </footer>
  );
}
