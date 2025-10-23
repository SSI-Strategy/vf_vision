import { motion } from 'framer-motion';
import Slide from '../components/layout/Slide';

const Slide9Final = () => {
  return (
    <Slide className="bg-gradient-to-br from-ssi-black via-ssi-midnight to-ssi-black">
      <div className="max-w-5xl w-full flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-12"
          >
            <span className="text-transparent bg-gradient-to-r from-white via-ssi-turquoise to-ssi-ocean bg-clip-text">
              The Choice
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed font-light">
              SSI Strategy can continue selling time and delivering blueprints.
            </p>

            <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed font-light">
              Or it can build the platform that makes capability instant, repeatable, and compounding.
            </p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 3.0, duration: 1.0 }}
              className="text-xl md:text-2xl text-ssi-turquoise font-medium mt-12"
            >
              Where do we go from here?
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default Slide9Final;
