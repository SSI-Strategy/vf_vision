import { motion } from 'framer-motion';
import { Clock, Zap, TrendingUp, AlertTriangle } from 'lucide-react';
import Slide from '../components/layout/Slide';
import Card from '../components/ui/Card';
import { fadeInUp, staggerChildren } from '../utils/constants';

const Slide8WhyNow = () => {
  return (
    <Slide className="bg-gradient-to-br from-ssi-black via-ssi-midnight to-ssi-black relative overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-ssi-sunrise rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-ssi-sunrise/20 border border-ssi-sunrise rounded-full px-6 py-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-ssi-sunrise" />
            <span className="text-ssi-sunrise font-semibold">Urgency</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-3">
            Why Now?
          </h2>
          <p className="text-2xl text-ssi-turquoise max-w-3xl mx-auto">
            The transformation window is closing
          </p>
        </motion.div>

        {/* Key Drivers */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid md:grid-cols-2 gap-4 mb-6"
        >
          <motion.div variants={fadeInUp} className="h-full">
            <Card className="h-full hover:border-ssi-ocean/50 bg-ssi-ocean/5 flex flex-col min-h-[140px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-ssi-ocean p-3 rounded-xl">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">AI Technology Maturity</h3>
              </div>
              <p className="text-ssi-sand">
                We've reached the inflection point. AI capabilities are production-ready, proven, and accessible.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp} className="h-full">
            <Card className="h-full hover:border-ssi-turquoise/50 bg-ssi-turquoise/5 flex flex-col min-h-[140px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-ssi-turquoise p-3 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Life Sciences Digitalization</h3>
              </div>
              <p className="text-ssi-sand">
                Post-pandemic acceleration continues. Digital workflows are no longer optional.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp} className="h-full">
            <Card className="h-full hover:border-ssi-stone/50 bg-ssi-stone/5 flex flex-col min-h-[140px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-ssi-stone p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Competitors Still Traditional</h3>
              </div>
              <p className="text-ssi-sand">
                Most consulting firms operate legacy models. The first-mover advantage is available—now.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp} className="h-full">
            <Card className="h-full hover:border-ssi-sunrise/50 bg-ssi-sunrise/5 flex flex-col min-h-[140px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-ssi-sunrise p-3 rounded-xl">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">The Widening Gap</h3>
              </div>
              <p className="text-ssi-sand">
                Velocity-native vs. legacy organizations. The gap is exponential and accelerating.
              </p>
            </Card>
          </motion.div>
        </motion.div>

        {/* The Gap Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-ssi-midnight/50 border border-ssi-sunrise/30 rounded-2xl p-4 mb-6"
        >
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            The 10x Threshold
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div>
              <div className="text-ssi-stone mb-4 font-semibold">Legacy Organizations</div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-ssi-sand text-sm">Drug design cycles</span>
                  <span className="text-ssi-stone">9-12 months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-ssi-sand text-sm">Protocol optimization</span>
                  <span className="text-ssi-stone">6 months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-ssi-sand text-sm">Regulatory prep</span>
                  <span className="text-ssi-stone">8 weeks</span>
                </div>
              </div>
            </div>

            <div>
              <div className="text-ssi-turquoise mb-4 font-semibold">Velocity-Native</div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-ssi-sand text-sm">Drug design cycles</span>
                  <span className="text-ssi-turquoise font-bold">3-6 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-ssi-sand text-sm">Protocol optimization</span>
                  <span className="text-ssi-turquoise font-bold">5 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-ssi-sand text-sm">Regulatory prep</span>
                  <span className="text-ssi-turquoise font-bold">48 hours</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-ssi-sunrise font-semibold text-lg">
            At 10x differential, catching up becomes mathematically impossible
          </div>
        </motion.div>

        {/* Final Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-ssi-ocean/10 via-ssi-turquoise/10 to-ssi-sunrise/10 border-2 border-ssi-ocean/50 rounded-3xl p-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
            >
              The transformation <span className="text-ssi-sunrise">isn't optional</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-xl md:text-2xl text-ssi-turquoise mb-6 font-light italic"
            >
              "The best time to achieve velocity was yesterday.<br />
              The second best time is Monday morning."
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="flex items-center justify-center gap-3 text-ssi-ocean"
            >
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-ssi-ocean"></div>
              <span className="text-sm font-semibold uppercase tracking-wider">Velocity Foundry</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-ssi-ocean"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="mt-6 text-center text-ssi-stone/50 text-sm"
        >
          Press ← to review or use progress dots to navigate
        </motion.div>
      </div>
    </Slide>
  );
};

export default Slide8WhyNow;
