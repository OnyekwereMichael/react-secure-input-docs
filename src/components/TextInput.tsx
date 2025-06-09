import * as React from 'react';

export interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  clearable?: boolean;
  inputClassName?: string;
  labelClassName?: string;
  wrapperClassName?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  clearable = false,
  inputClassName = '',
  labelClassName = '',
  wrapperClassName = '',
}) => {
  return (
    <div className={`relative ${wrapperClassName}`}>
      <label className={`block text-sm font-medium text-gray-700 mb-1 ${labelClassName}`}>
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${inputClassName}`}
        />
        {clearable && value && (
          <button
            type="button"
            onClick={() => onChange('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <span className="text-gray-400 hover:text-gray-500">×</span>
          </button>
        )}
      </div>
    </div>
  );
}; 