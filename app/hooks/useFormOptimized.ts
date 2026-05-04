// app/hooks/useFormOptimized.ts
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

  // Mémoriser les valeurs pour éviter les re-rendus inutiles
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

// Composant de champ de formulaire optimisé
export const OptimizedInput = memo(({ 
  name, 
  value, 
  onChange, 
  onBlur, 
  label, 
  type = 'text',
  error,
  ...props 
}: any) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        name={name}
        type={type}
        value={value || ''}
        onChange={(e) => onChange(name, e.target.value)}
        onBlur={() => onBlur(name)}
        className={`w-full px-4 py-2 rounded-lg border ${
          error ? 'border-red-500' : 'border-gray-300'
        } focus:outline-none focus:ring-2 focus:ring-primary`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
});

OptimizedInput.displayName = 'OptimizedInput';
