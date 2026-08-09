import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Lock } from 'lucide-react';
import { OrderSummary } from './OrderSummary';
import type { Course } from '../../data/courses';
import './CheckoutFormLayout.css';

interface CheckoutFormLayoutProps {
  course: Course;
  children: ReactNode;
}

export function CheckoutFormLayout({ course, children }: CheckoutFormLayoutProps) {
  return (
    <div className="checkout-form-layout">
      <div className="checkout-left-column">
        <Link to={`/checkout/payment-method?course=${course.slug}`} className="checkout-change-method">
          <ChevronLeft size={20} />
          Change the payment method
        </Link>

        <div className="checkout-card">
          <div className="checkout-security-banner">
            <Lock size={20} />
            <p>All transactions are secured, processed and authorized by external payment providers</p>
          </div>

          <div className="checkout-form-content">
            {children}
          </div>
        </div>
      </div>

      <div className="checkout-right-column">
        <OrderSummary course={course} />
      </div>
    </div>
  );
}
