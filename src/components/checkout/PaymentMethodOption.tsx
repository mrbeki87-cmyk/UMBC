import type { ReactNode } from 'react';
import './PaymentMethodOption.css';

interface PaymentMethodOptionProps {
  id: string;
  name: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
  logos: ReactNode;
}

export function PaymentMethodOption({ id, name, isSelected, onSelect, logos }: PaymentMethodOptionProps) {
  return (
    <div 
      className={`payment-method-option ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(id)}
      role="radio"
      aria-checked={isSelected}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(id);
        }
      }}
    >
      <div className="payment-method-radio">
        <div className="radio-inner"></div>
      </div>
      
      <div className="payment-method-logos">
        {logos}
      </div>
      
      <div className="payment-method-name">
        {name}
      </div>
    </div>
  );
}
