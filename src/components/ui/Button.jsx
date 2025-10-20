import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-ssi-ocean to-ssi-turquoise hover:shadow-lg hover:shadow-ssi-ocean/50',
    secondary: 'bg-ssi-midnight border-2 border-ssi-ocean hover:bg-ssi-ocean/10',
    outline: 'border-2 border-ssi-ocean text-ssi-ocean hover:bg-ssi-ocean hover:text-white',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
