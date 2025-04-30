import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  fullWidth = false,
  animated = true,
  as,
  to,
  href,
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-secondary-200 text-secondary-900 hover:bg-secondary-300 focus:ring-secondary-500',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
    ghost: 'text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const buttonStyles = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `;

  // Create the appropriate element based on 'as' prop
  const renderContent = () => {
    if (as === Link && to) {
      return (
        <Link
          to={to}
          className={buttonStyles}
          ref={ref}
          {...props}
        >
          {children}
        </Link>
      );
    } else if (as === 'a' || href) {
      return (
        <a
          href={href}
          className={buttonStyles}
          ref={ref}
          {...props}
        >
          {children}
        </a>
      );
    } else {
      return (
        <button
          type={type}
          className={buttonStyles}
          onClick={onClick}
          disabled={disabled}
          ref={ref}
          {...props}
        >
          {children}
        </button>
      );
    }
  };

  const buttonContent = renderContent();

  if (!animated) return buttonContent;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {buttonContent}
    </motion.div>
  );
});

Button.displayName = 'Button';

export default Button; 