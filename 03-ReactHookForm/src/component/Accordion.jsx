import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Accordion = ({ title, buttons }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>

      <div
        onClick={toggleAccordion}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#f7f7f7',
          padding: '10px',
          cursor: 'pointer',
        }}
      >
         <span>{title}</span>
        {/* Icono Chevron con rotación */}
        <ChevronDown
          size={20}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        />
      </div>


      {isOpen && (
        <div
          style={{
            padding: '10px',
            backgroundColor: '#fff',
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
          }}
        >
          {buttons.map((buttonText, index) => (
            <button key={index} style={{ padding: '5px 10px' }}>
              {buttonText}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

