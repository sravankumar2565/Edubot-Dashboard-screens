import React, { useState } from 'react';

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);

  const handleSelect = (option: DropdownOption) => {
    setSelectedValue(option.value);
    if (onChange) {
      onChange(option.value);
    }
    setIsOpen(false);
  };

  const selectedOption = options.find(option => option.value === selectedValue);

  return (
    <div className={`tw-relative ${className}`}>
      <div 
        className="tw-flex tw-items-center tw-justify-between tw-bg-white tw-rounded-md tw-border tw-border-gray-200 tw-py-3 tw-px-3 tw-cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="tw-text-sm tw-text-edubot-primary">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <img src="/images/img_icon.svg" alt="Dropdown" className="tw-h-1 tw-w-2" />
      </div>
      
      {isOpen && (
        <div className="tw-absolute tw-top-full tw-left-0 tw-w-full tw-bg-white tw-border tw-border-gray-200 tw-rounded-md tw-mt-1 tw-z-10">
          {options.map((option) => (
            <div
              key={option.value}
              className="tw-py-2 tw-px-3 tw-text-sm hover:tw-bg-gray-100 tw-cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
