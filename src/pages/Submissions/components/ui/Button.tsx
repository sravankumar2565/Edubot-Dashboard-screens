import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  icon,
}) => {
  const baseClasses = 'tw-font-medium tw-rounded-md tw-flex tw-items-center tw-justify-center';

  const variantClasses = {
    primary: 'tw-bg-edubot-primary tw-text-white',
    secondary: 'tw-bg-edubot-light tw-text-edubot-primary',
    outline: 'tw-border tw-border-edubot-primary tw-text-edubot-primary tw-bg-transparent',
  };

  const sizeClasses = {
    sm: 'tw-text-xs tw-py-1 tw-px-2',
    md: 'tw-text-sm tw-py-2 tw-px-3',
    lg: 'tw-text-base tw-py-2.5 tw-px-4',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {icon && <span className="tw-mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
