import React from 'react';

interface InputFieldProps {
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  className?: string;
  name?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  icon,
  className = '',
  name,
}) => {
  return (
    <div className={`tw-flex tw-items-center tw-bg-white tw-rounded-md tw-border tw-border-gray-200 ${className}`}>
      {icon && <div className="tw-pl-2">{icon}</div>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className="tw-w-full tw-py-2 tw-px-2 tw-text-sm tw-text-edubot-primary tw-outline-none tw-bg-transparent"
      />
    </div>
  );
};

export default InputField;
