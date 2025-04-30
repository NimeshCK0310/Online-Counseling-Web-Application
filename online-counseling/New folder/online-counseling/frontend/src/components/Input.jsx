import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Input = forwardRef(({
  label,
  error,
  type = 'text',
  className = '',
  fullWidth = false,
  animated = true,
  ...props
}, ref) => {
  const baseStyles = 'rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white';
  const sizes = 'px-4 py-2';
  const errorStyles = error ? 'border-red-500 focus:ring-red-500' : '';
  
  const inputStyles = `
    ${baseStyles}
    ${sizes}
    ${errorStyles}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  const inputContent = (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        className={inputStyles}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );

  if (!animated) return inputContent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {inputContent}
    </motion.div>
  );
});

Input.displayName = 'Input';

export default Input; 