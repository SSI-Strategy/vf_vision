import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={`bg-ssi-midnight/30 backdrop-blur-sm border border-ssi-ocean/20 rounded-xl p-6 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
