import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hasShadow?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hasShadow = true 
}) => {
  return (
    <div 
      className={`
        tw-bg-white tw-rounded-sm 
        ${hasShadow ? 'tw-shadow-card' : ''} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;