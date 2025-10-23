import { motion } from 'framer-motion';
import { Zap, RefreshCw, Shield } from 'lucide-react';
import Slide from '../components/layout/Slide';
import Card from '../components/ui/Card';
import { fadeInUp, staggerChildren, scaleIn } from '../utils/constants';

const Slide4CompetitiveAdvantage = () => {
  return (
    <Slide className="bg-gradient-to-br from-ssi-black via-ssi-midnight/30 to-ssi-black">
      <div className="max-w-7xl w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-8"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Three Pillars of
            <span className="block text-transparent bg-gradient-to-r from-ssi-ocean to-ssi-turquoise bg-clip-text">
              Competitive Advantage
            </span>
          </h2>
          <p className="text-xl text-ssi-stone max-w-3xl mx-auto">
            Building defensible moats through platform, compounding value, and industry IP
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          {/* Pillar 1: Velocity Forge Platform */}
          <motion.div variants={scaleIn} className="h-full">
            <Card className="h-full bg-gradient-to-br from-ssi-ocean/20 to-ssi-ocean/5 border-ssi-ocean hover:border-ssi-ocean/80 transition-all group flex flex-col min-h-[400px]">
              <div className="flex justify-center mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-ssi-ocean p-4 rounded-2xl"
                >
                  <Zap className="w-10 h-10 text-white" />
                </motion.div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Velocity Forge Platform
              </h3>

              <div className="space-y-3 flex-grow">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-ssi-ocean mt-2 flex-shrink-0"></div>
                  <p className="text-ssi-sand text-sm">
                    Non-technical consultants build enterprise apps <span className="text-ssi-turquoise font-semibold">through conversation</span>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-ssi-ocean mt-2 flex-shrink-0"></div>
                  <p className="text-ssi-sand text-sm">
                    AI-assisted development with <span className="text-ssi-turquoise font-semibold">Golden Paths</span>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-ssi-ocean mt-2 flex-shrink-0"></div>
                  <p className="text-ssi-sand text-sm">
                    Pre-built compliance frameworks <span className="text-ssi-turquoise font-semibold">baked in</span>
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-6 p-3 bg-ssi-ocean/10 rounded-lg border border-ssi-ocean/30">
                <p className="text-xs text-ssi-ocean font-semibold text-center">
                  Citizen Developer Revolution
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Pillar 2: Compound Value Effect */}
          <motion.div variants={scaleIn} className="h-full">
            <Card className="h-full bg-gradient-to-br from-ssi-turquoise/20 to-ssi-turquoise/5 border-ssi-turquoise hover:border-ssi-turquoise/80 transition-all group flex flex-col min-h-[400px]">
              <div className="flex justify-center mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-ssi-turquoise p-4 rounded-2xl"
                >
                  <RefreshCw className="w-10 h-10 text-white" />
                </motion.div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Compound Value Effect
              </h3>

              <div className="space-y-3 flex-grow">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-ssi-turquoise mt-2 flex-shrink-0"></div>
                  <p className="text-ssi-sand text-sm">
                    Each engagement <span className="text-ssi-turquoise font-semibold">strengthens the platform</span>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-ssi-turquoise mt-2 flex-shrink-0"></div>
                  <p className="text-ssi-sand text-sm">
                    Solutions become <span className="text-ssi-turquoise font-semibold">reusable assets</span> across clients
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-ssi-turquoise mt-2 flex-shrink-0"></div>
                  <p className="text-ssi-sand text-sm">
                    Network effects <span className="text-ssi-turquoise font-semibold">multiply value</span> exponentially
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-6 p-3 bg-ssi-turquoise/10 rounded-lg border border-ssi-turquoise/30">
                <p className="text-xs text-ssi-turquoise font-semibold text-center">
                  Platform Thinking at Scale
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Pillar 3: Industry-Specific IP */}
          <motion.div variants={scaleIn} className="h-full">
            <Card className="h-full bg-gradient-to-br from-ssi-sunrise/20 to-ssi-sunrise/5 border-ssi-sunrise hover:border-ssi-sunrise/80 transition-all group flex flex-col min-h-[400px]">
              <div className="flex justify-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-ssi-sunrise p-4 rounded-2xl"
                >
                  <Shield className="w-10 h-10 text-white" />
                </motion.div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Industry-Specific IP
              </h3>

              <div className="space-y-3 flex-grow">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-ssi-sunrise mt-2 flex-shrink-0"></div>
                  <p className="text-ssi-sand text-sm">
                    Deep <span className="text-ssi-sunrise font-semibold">life sciences patterns</span> and workflows
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-ssi-sunrise mt-2 flex-shrink-0"></div>
                  <p className="text-ssi-sand text-sm">
                    Compliance frameworks for <span className="text-ssi-sunrise font-semibold">GxP, FDA, EMA</span>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-ssi-sunrise mt-2 flex-shrink-0"></div>
                  <p className="text-ssi-sand text-sm">
                    <span className="text-ssi-sunrise font-semibold">Defensible moats</span> through specialized knowledge
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-6 p-3 bg-ssi-sunrise/10 rounded-lg border border-ssi-sunrise/30">
                <p className="text-xs text-ssi-sunrise font-semibold text-center">
                  Solve Forever Protocol
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Compound Growth Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-ssi-midnight/50 border border-ssi-ocean/30 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            The Compounding Effect
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-around gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-ssi-stone mb-2">Client 1</div>
              <div className="text-sm text-ssi-stone/70">Build from scratch</div>
              <div className="mt-2 text-2xl text-ssi-ocean">→ +1 solution</div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-ssi-ocean mb-2">Client 5</div>
              <div className="text-sm text-ssi-turquoise">Reuse 80% of components</div>
              <div className="mt-2 text-2xl text-ssi-turquoise">→ +5 solutions</div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-ssi-turquoise mb-2">Client 20</div>
              <div className="text-sm text-ssi-sunrise">Reuse 95% of components</div>
              <div className="mt-2 text-2xl text-ssi-sunrise">→ +50 solutions</div>
            </div>
          </div>
          <p className="text-center text-ssi-stone mt-8 text-sm italic">
            Every problem solved once becomes a platform capability forever
          </p>
        </motion.div>
      </div>
    </Slide>
  );
};

export default Slide4CompetitiveAdvantage;
