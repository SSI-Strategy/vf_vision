import { motion } from 'framer-motion';
import { TrendingUp, AlertCircle } from 'lucide-react';
import Slide from '../components/layout/Slide';
import Card from '../components/ui/Card';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import { fadeInUp, slideInLeft, slideInRight } from '../utils/constants';

const Slide2MarketImperative = () => {
  return (
    <Slide className="bg-gradient-to-br from-ssi-black to-ssi-midnight/50">
      <div className="max-w-7xl w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-ssi-sunrise/20 border border-ssi-sunrise/50 rounded-full px-6 py-2 mb-6">
              <AlertCircle className="w-5 h-5 text-ssi-sunrise" />
              <span className="text-ssi-sunrise font-semibold">The Market Context</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              The 10-Year Window
            </h2>
            <p className="text-xl text-ssi-stone max-w-3xl mx-auto">
              Two species are emerging: velocity-native vs. legacy organizations
            </p>
          </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Traditional Pharma */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
            className="h-full"
          >
            <Card className="h-full bg-ssi-stone/10 border-ssi-stone/30 flex flex-col min-h-[500px]">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-ssi-stone mb-2">
                  Traditional Pharma
                </h3>
                <p className="text-ssi-stone/70">People-heavy blueprints</p>
              </div>

              <div className="space-y-4 flex-grow">
                <div className="flex items-center justify-between p-4 bg-ssi-black/30 rounded-lg">
                  <span className="text-ssi-sand">Efficiency</span>
                  <span className="text-4xl font-bold text-ssi-stone">
                    <AnimatedCounter end={5} suffix="%" />
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-ssi-black/30 rounded-lg">
                  <span className="text-ssi-sand">Decision Model</span>
                  <span className="text-sm text-ssi-stone">Committee-based</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-ssi-black/30 rounded-lg">
                  <span className="text-ssi-sand">Change Cycle</span>
                  <span className="text-sm text-ssi-stone">Quarterly batches</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-ssi-black/30 rounded-lg">
                  <span className="text-ssi-sand">Growth</span>
                  <span className="text-sm text-ssi-stone">Linear (hourly billing)</span>
                </div>
              </div>

              <div className="mt-auto pt-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                <p className="text-sm text-red-300">
                  "Talent hemorrhaging to velocity organizations"
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Velocity-Native */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
            className="h-full"
          >
            <Card className="h-full bg-gradient-to-br from-ssi-ocean/20 to-ssi-turquoise/20 border-ssi-turquoise/50 relative overflow-hidden flex flex-col min-h-[500px]">
              <div className="absolute top-0 right-0 p-2">
                <TrendingUp className="w-8 h-8 text-ssi-turquoise" />
              </div>

              <div className="mb-6">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Velocity-Native
                </h3>
                <p className="text-ssi-turquoise">AI-enabled operations</p>
              </div>

              <div className="space-y-4 flex-grow">
                <div className="flex items-center justify-between p-4 bg-ssi-ocean/20 rounded-lg border border-ssi-ocean/30">
                  <span className="text-white">Efficiency</span>
                  <span className="text-4xl font-bold text-ssi-turquoise">
                    <AnimatedCounter end={50} suffix="%" />
                    <span className="text-lg">+</span>
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-ssi-ocean/20 rounded-lg border border-ssi-ocean/30">
                  <span className="text-white">Decision Model</span>
                  <span className="text-sm text-ssi-turquoise">Algorithmic flows</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-ssi-ocean/20 rounded-lg border border-ssi-ocean/30">
                  <span className="text-white">Change Cycle</span>
                  <span className="text-sm text-ssi-turquoise">Continuous</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-ssi-ocean/20 rounded-lg border border-ssi-ocean/30">
                  <span className="text-white">Growth</span>
                  <span className="text-sm text-ssi-turquoise">Exponential</span>
                </div>
              </div>

              <div className="mt-auto pt-6 p-4 bg-ssi-turquoise/20 border border-ssi-turquoise/50 rounded-lg">
                <p className="text-sm text-ssi-turquoise font-semibold">
                  "AI makes the gap exponential, not linear"
                </p>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-ssi-midnight/50 border border-ssi-ocean/30 rounded-xl p-6">
            <p className="text-ssi-sunrise text-lg font-semibold mb-2">
              The Opportunity
            </p>
            <p className="text-ssi-stone text-sm">
              First-mover advantage in AI-enabled consulting for life sciences —
              capture market share while traditional models still dominate
            </p>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default Slide2MarketImperative;
