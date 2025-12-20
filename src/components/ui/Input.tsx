import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = ({
  label,
  error,
  className = '',
  id,
  ...props
}: InputProps) => {
  const inputId = id || props.name;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-white mb-2"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`w-full p-3 rounded-lg text-orange-900 border-2 ${
          error ? 'border-red-500' : 'border-transparent'
        } focus:outline-none focus:ring-2 focus:ring-orange-500 ${className}`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <p
          id={`${inputId}-error`}
          className="mt-1 text-sm text-red-600 font-semibold"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};
