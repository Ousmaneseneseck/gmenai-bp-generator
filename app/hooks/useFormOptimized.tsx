// app/hooks/useFormOptimized.tsx
import { useState, useCallback, useMemo, memo } from 'react';
import { useDebounce } from './useDebounce';

interface FormState {
  [key: string]: any;
}

export function useFormOptimized<T extends FormState>(initialState: T) {
  const [values, setValues] = useState<T>(initialState);
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});
  const debouncedValues = useDebounce(values, 300);

  const handleChange = useCallback((name: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleBlur = useCallback((name: keyof T) => {
    setTouched(prev => ({ ...prev, [name]: true }));
  }, []);

  const resetForm = useCallback(() => {
    setValues(initialState);
    setTouched({});
  }, [initialState]);

  const memoizedValues = useMemo(() => values, [values]);

  return {
    values: memoizedValues,
    debouncedValues,
    touched,
    handleChange,
    handleBlur,
    resetForm,
  };
}

interface OptimizedInputProps {
  name: string;
  value: any;
  onChange: (name: string, value: any) => void;
  onBlur: (name: string) => void;
  label?: string;
  type?: string;
  error?: string;
  placeholder?: string;
  required?: boolean;
}

export const OptimizedInput = memo(({ 
  name, 
  value, 
  onChange, 
  onBlur, 
  label, 
  type = 'text',
  error,
  placeholder,
  required
}: OptimizedInputProps) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        name={name}
        type={type}
        value={value || ''}
        onChange={(e) => onChange(name, e.target.value)}
        onBlur={() => onBlur(name)}
        placeholder={placeholder}
        className={`w-full px-4 py-2 rounded-lg border ${
          error ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
        } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
});

OptimizedInput.displayName = 'OptimizedInput';
