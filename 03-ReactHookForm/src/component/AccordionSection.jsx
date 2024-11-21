import React from 'react';
import { ChevronDown } from 'lucide-react';

export function AccordionSection({ title, children, isOpen, onToggle }) {
  return (
    <div className="accordion-section">
      <button className="accordion-header" onClick={onToggle}>
        <h2 className="accordion-title">{title}</h2>
        <ChevronDown className={`accordion-icon ${isOpen ? 'open' : ''}`} />
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
}
