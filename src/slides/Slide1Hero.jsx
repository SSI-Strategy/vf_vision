import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import Slide from '../components/layout/Slide';
import { fadeInUp, staggerChildren } from '../utils/constants';

const Slide1Hero = () => {
  return (
    <Slide className="bg-gradient-to-br from-ssi-black via-ssi-midnight to-ssi-black relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-ssi-ocean rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <motion.div
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center relative z-10 py-4"
      >
        <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
          <div className="bg-gradient-to-r from-ssi-ocean to-ssi-turquoise p-4 rounded-2xl">
            <Zap className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-ssi-turquoise to-ssi-ocean bg-clip-text text-transparent"
        >
          Velocity Foundry
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-2xl md:text-3xl text-ssi-sand mb-8"
        >
          A Transformation Proposal for SSI Strategy
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="text-xl text-ssi-stone max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          <p className="mb-6">
            What if we combined SSI Strategy's{' '}
            <span className="text-white font-medium">people and governance expertise</span>
          </p>
          <p className="text-2xl text-ssi-turquoise font-semibold">
            with <span className="text-white">instant tech delivery</span> — building bespoke solutions in days, not months?
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-4 text-ssi-ocean"
        >
          <span className="text-lg font-medium">Explore the vision</span>
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-6 h-6" />
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-16 text-sm text-ssi-stone/70"
        >
          Use arrow keys or swipe to navigate
        </motion.div>
      </motion.div>
    </Slide>
  );
};

export default Slide1Hero;
