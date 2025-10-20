import { motion } from 'framer-motion';

const Slide = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`min-w-full h-full flex items-center justify-center px-8 md:px-16 lg:px-24 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default Slide;
