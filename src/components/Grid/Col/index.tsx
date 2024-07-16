import React from 'react';
import type { ColProps, Span } from '../types';

const Col: React.FC<ColProps> = ({span = {xs: 24}, className = '', children}) => {
  // Function to create class string
  const createClassString = (span: Span) => {
    return Object.entries(span)
      .map(([key, value]) => `col-${key}-${value}`)
      .join(' ');
  };

  const classString = createClassString(span);

  return (
    <div className={`col ${classString} ${className}`}>
      {children}
    </div>
  );
};

export default Col;
