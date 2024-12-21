import React, { useState } from 'react';

// Accordion Component
const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-300">
      <button
        className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="text-lg font-semibold">{title}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50">
          {children}
        </div>
      )}
    </div>
  );
};

// Accordion Container Component
const AccordionContainer = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <Accordion title="Section 1">
        <p>This is the content for section 1.</p>
      </Accordion>
      <Accordion title="Section 2">
        <p>This is the content for section 2.</p>
      </Accordion>
      <Accordion title="Section 3">
        <p>This is the content for section 3.</p>
      </Accordion>
    </div>
  );
};

export default AccordionContainer;
