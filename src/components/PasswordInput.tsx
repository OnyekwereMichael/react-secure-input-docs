import * as React from 'react';

export interface PasswordInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  showCopy?: boolean;
  strengthMeter?: boolean;
  placeholder?: string;
  validationRules?: Array<{
    name: string;
    validate: (value: string) => boolean;
    message: string;
  }>;
  strengthLevels?: Array<{
    name: string;
    minPassingRules: number;
  }>;
  inputClassName?: string;
  labelClassName?: string;
  wrapperClassName?: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  value,
  onChange,
  showCopy = false,
  strengthMeter = false,
  placeholder,
  validationRules = [],
  strengthLevels = [],
  inputClassName = '',
  labelClassName = '',
  wrapperClassName = '',
}) => {
  return (
    <div className={`relative ${wrapperClassName}`}>
      <label className={`block text-sm font-medium text-gray-700 mb-1 ${labelClassName}`}>
        {label}
      </label>
      <input
        type="password"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${inputClassName}`}
      />
    </div>
  );
}; 