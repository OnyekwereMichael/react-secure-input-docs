import * as React from 'react';

interface Option {
  label: string;
  value: string;
}

export interface SelectInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  inputClassName?: string;
  labelClassName?: string;
  wrapperClassName?: string;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  inputClassName = '',
  labelClassName = '',
  wrapperClassName = '',
}) => {
  return (
    <div className={`relative ${wrapperClassName}`}>
      <label className={`block text-sm font-medium text-gray-700 mb-1 ${labelClassName}`}>
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                   focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${inputClassName}`}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}; 