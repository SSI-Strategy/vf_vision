import { motion } from 'framer-motion';
import { Layers, ArrowRight, Clock, Target } from 'lucide-react';
import Slide from '../components/layout/Slide';
import Card from '../components/ui/Card';
import { fadeInUp, staggerChildren } from '../utils/constants';

const Slide3VelocityFoundry = () => {
  return (
    <Slide className="bg-gradient-to-br from-ssi-midnight via-ssi-black to-ssi-midnight">
      <div className="max-w-7xl w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-ssi-ocean/20 border border-ssi-ocean rounded-full px-6 py-2 mb-6">
            <Layers className="w-5 h-5 text-ssi-ocean" />
            <span className="text-ssi-ocean font-semibold">Strategic Vision</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Velocity Foundry
          </h2>
          <p className="text-xl text-ssi-turquoise max-w-3xl mx-auto">
            Transform from traditional consulting to a digital capability accelerator
          </p>
        </motion.div>

        {/* Transformation Flow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
          className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16"
        >
          <motion.div variants={fadeInUp}>
            <Card className="text-center p-8">
              <div className="text-4xl font-bold text-ssi-stone mb-2">From</div>
              <div className="text-lg text-ssi-stone/70">Traditional Consulting</div>
              <div className="mt-4 text-sm text-ssi-stone/50">
                People-heavy<br />
                Time-based billing<br />
                Slow delivery
              </div>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <ArrowRight className="w-12 h-12 text-ssi-ocean hidden md:block" />
            <div className="md:hidden text-ssi-ocean text-2xl">↓</div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="text-center p-8 bg-gradient-to-br from-ssi-ocean/20 to-ssi-turquoise/20 border-ssi-turquoise/50">
              <div className="text-4xl font-bold text-white mb-2">To</div>
              <div className="text-lg text-ssi-turquoise font-semibold">Digital Capability Accelerator</div>
              <div className="mt-4 text-sm text-white/80">
                AI-enabled<br />
                Outcome-based<br />
                Rapid solutions
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Core Propositions */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
          className="grid md:grid-cols-3 gap-6"
        >
          <motion.div variants={fadeInUp}>
            <Card className="h-full hover:border-ssi-ocean/50 transition-colors">
              <div className="flex justify-center mb-4">
                <div className="bg-ssi-ocean/20 p-3 rounded-xl">
                  <Clock className="w-8 h-8 text-ssi-ocean" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">
                Speed Revolution
              </h3>
              <p className="text-ssi-stone text-center">
                Build bespoke solutions in <span className="text-ssi-turquoise font-semibold">days/weeks</span> instead of months/years
              </p>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full hover:border-ssi-turquoise/50 transition-colors">
              <div className="flex justify-center mb-4">
                <div className="bg-ssi-turquoise/20 p-3 rounded-xl">
                  <Target className="w-8 h-8 text-ssi-turquoise" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">
                Outcome Focus
              </h3>
              <p className="text-ssi-stone text-center">
                Shift from <span className="line-through">selling time</span> to <span className="text-ssi-turquoise font-semibold">selling outcomes</span> through reusable assets
              </p>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full hover:border-ssi-sunrise/50 transition-colors">
              <div className="flex justify-center mb-4">
                <div className="bg-ssi-sunrise/20 p-3 rounded-xl">
                  <Layers className="w-8 h-8 text-ssi-sunrise" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">
                Platform Power
              </h3>
              <p className="text-ssi-stone text-center">
                Enable consultants to build <span className="text-ssi-sunrise font-semibold">enterprise applications</span> through conversation
              </p>
            </Card>
          </motion.div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-ssi-ocean/10 to-ssi-turquoise/10 border border-ssi-ocean/30 rounded-2xl p-8">
            <p className="text-2xl text-white font-light italic leading-relaxed">
              "We're transforming SSI Strategy from a consulting firm that{' '}
              <span className="text-ssi-stone">recommends</span> digital transformation<br />
              to one that <span className="text-ssi-turquoise font-semibold">delivers it</span> —{' '}
              <span className="text-ssi-sunrise font-semibold">instantly, repeatedly, and profitably</span>."
            </p>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default Slide3VelocityFoundry;
