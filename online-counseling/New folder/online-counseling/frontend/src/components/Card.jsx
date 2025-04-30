import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  hover = true,
  animated = true,
  ...props
}) => {
  const baseStyles = 'bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden';
  const hoverStyles = hover ? 'hover:shadow-xl transition-shadow duration-300' : '';
  
  const cardStyles = `
    ${baseStyles}
    ${hoverStyles}
    ${className}
  `;

  const cardContent = (
    <div className={cardStyles} {...props}>
      {children}
    </div>
  );

  if (!animated) return cardContent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5 } : {}}
    >
      {cardContent}
    </motion.div>
  );
};

export const CardHeader = ({ children, className = '' }) => (
  <div className={`px-6 py-4 border-b border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);

export const CardBody = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={`px-6 py-4 border-t border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);

export default Card; 