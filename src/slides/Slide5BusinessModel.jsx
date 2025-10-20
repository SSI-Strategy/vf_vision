import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Repeat, Package } from 'lucide-react';
import Slide from '../components/layout/Slide';
import Card from '../components/ui/Card';
import { fadeInUp, staggerChildren } from '../utils/constants';

const Slide5BusinessModel = () => {
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
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Business Model
            <span className="block text-transparent bg-gradient-to-r from-ssi-ocean via-ssi-turquoise to-ssi-sunrise bg-clip-text">
              Transformation
            </span>
          </h2>
          <p className="text-xl text-ssi-stone max-w-3xl mx-auto">
            From linear growth to exponential value creation
          </p>
        </motion.div>

        {/* Before/After Comparison */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Traditional Model */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-6">
              <div className="inline-block bg-ssi-stone/20 border border-ssi-stone/50 rounded-full px-6 py-2">
                <span className="text-ssi-stone font-semibold">Traditional Model</span>
              </div>
            </div>

            <Card className="bg-ssi-stone/10 border-ssi-stone/30">
              <h3 className="text-2xl font-bold text-ssi-stone mb-6 text-center">
                Linear Revenue
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-ssi-black/30 rounded-lg">
                  <DollarSign className="w-6 h-6 text-ssi-stone flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Hourly Billing</div>
                    <div className="text-sm text-ssi-stone/70">Selling time, not outcomes</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-ssi-black/30 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-ssi-stone flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Linear Growth</div>
                    <div className="text-sm text-ssi-stone/70">More hours = more revenue</div>
                  </div>
                </div>

                <div className="p-4 bg-ssi-black/50 rounded-lg border border-ssi-stone/30">
                  <div className="text-sm text-ssi-stone/70 mb-2">Revenue Cap</div>
                  <div className="text-3xl font-bold text-ssi-stone">
                    Limited by headcount
                  </div>
                </div>
              </div>

              {/* Linear graph visualization */}
              <div className="mt-6 h-24 flex items-end justify-between">
                {[20, 30, 40, 50, 60].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="w-full mx-1 bg-ssi-stone/50 rounded-t"
                  />
                ))}
              </div>
            </Card>
          </motion.div>

          {/* New Model */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-6">
              <div className="inline-block bg-gradient-to-r from-ssi-ocean to-ssi-turquoise rounded-full px-6 py-2">
                <span className="text-white font-semibold">Velocity Foundry Model</span>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-ssi-ocean/20 to-ssi-turquoise/10 border-ssi-turquoise">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Exponential Revenue
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-ssi-ocean/20 rounded-lg border border-ssi-ocean/30">
                  <Repeat className="w-6 h-6 text-ssi-turquoise flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Platform Licenses</div>
                    <div className="text-sm text-ssi-turquoise">Recurring revenue streams</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-ssi-ocean/20 rounded-lg border border-ssi-ocean/30">
                  <TrendingUp className="w-6 h-6 text-ssi-turquoise flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Higher Margin Services</div>
                    <div className="text-sm text-ssi-turquoise">AI-assisted delivery</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-ssi-ocean/20 rounded-lg border border-ssi-ocean/30">
                  <Package className="w-6 h-6 text-ssi-turquoise flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">IP Library Value</div>
                    <div className="text-sm text-ssi-turquoise">Assets appreciate over time</div>
                  </div>
                </div>

                <div className="p-4 bg-ssi-turquoise/20 rounded-lg border border-ssi-turquoise">
                  <div className="text-sm text-ssi-turquoise mb-2">Growth Pattern</div>
                  <div className="text-3xl font-bold text-white">
                    Exponential scaling
                  </div>
                </div>
              </div>

              {/* Exponential graph visualization */}
              <div className="mt-6 h-24 flex items-end justify-between">
                {[15, 25, 45, 70, 100].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="w-full mx-1 bg-gradient-to-t from-ssi-ocean to-ssi-turquoise rounded-t"
                  />
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Revenue Streams Breakdown */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid md:grid-cols-4 gap-6"
        >
          <motion.div variants={fadeInUp}>
            <Card className="text-center hover:border-ssi-ocean/50">
              <div className="text-4xl font-bold text-ssi-ocean mb-2">💼</div>
              <h4 className="font-semibold text-white mb-2">Services</h4>
              <p className="text-sm text-ssi-stone">Higher margin through AI efficiency</p>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="text-center hover:border-ssi-turquoise/50">
              <div className="text-4xl font-bold text-ssi-turquoise mb-2">🔄</div>
              <h4 className="font-semibold text-white mb-2">Platform Licenses</h4>
              <p className="text-sm text-ssi-stone">Recurring revenue streams</p>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="text-center hover:border-ssi-sunrise/50">
              <div className="text-4xl font-bold text-ssi-sunrise mb-2">📚</div>
              <h4 className="font-semibold text-white mb-2">IP Library</h4>
              <p className="text-sm text-ssi-stone">Asset value appreciation</p>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="text-center hover:border-ssi-turquoise/50">
              <div className="text-4xl font-bold text-ssi-turquoise mb-2">🔧</div>
              <h4 className="font-semibold text-white mb-2">Maintenance</h4>
              <p className="text-sm text-ssi-stone">Predictable revenue</p>
            </Card>
          </motion.div>
        </motion.div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 bg-gradient-to-r from-ssi-ocean/10 via-ssi-turquoise/10 to-ssi-sunrise/10 border border-ssi-ocean/30 rounded-2xl p-8 text-center"
        >
          <p className="text-2xl text-white font-light italic">
            Revenue multiplies as delivery costs <span className="text-ssi-turquoise font-semibold">decrease</span>.<br />
            Each client solution adds to a <span className="text-ssi-sunrise font-semibold">compounding asset base</span>.
          </p>
        </motion.div>
      </div>
    </Slide>
  );
};

export default Slide5BusinessModel;
