import { TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const TextArea = ({
  label,
  error,
  className = '',
  id,
  ...props
}: TextAreaProps) => {
  const textareaId = id || props.name;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-white mb-2"
        >
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={`w-full p-3 rounded-lg text-orange-900 border-2 ${
          error ? 'border-red-500' : 'border-transparent'
        } focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none ${className}`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        {...props}
      />
      {error && (
        <p
          id={`${textareaId}-error`}
          className="mt-1 text-sm text-red-600 font-semibold"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};
