import { motion } from 'framer-motion';
import { Shield, Lock, FileCheck, Users } from 'lucide-react';
import Slide from '../components/layout/Slide';
import Card from '../components/ui/Card';
import { fadeInUp, staggerChildren } from '../utils/constants';

const Slide6RiskMitigation = () => {
  return (
    <Slide className="bg-gradient-to-br from-ssi-black via-ssi-midnight/50 to-ssi-black">
      <div className="max-w-7xl w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-ssi-turquoise/20 border border-ssi-turquoise rounded-full px-6 py-2 mb-6">
            <Shield className="w-5 h-5 text-ssi-turquoise" />
            <span className="text-ssi-turquoise font-semibold">Risk Mitigation & Governance</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Built on Solid Foundation
          </h2>
          <p className="text-xl text-ssi-stone max-w-3xl mx-auto">
            Enterprise-grade platform with security, audit, and compliance at its core
          </p>
        </motion.div>

        {/* Layered Architecture Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-ssi-midnight/50 border border-ssi-ocean/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Master Service Platform Architecture
            </h3>

            <div className="space-y-4">
              {/* Layer 4 - Applications */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-r from-ssi-sunrise/20 to-ssi-sunrise/10 border border-ssi-sunrise/50 rounded-xl p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-ssi-sunrise p-3 rounded-lg">
                    <span className="text-white font-bold">L4</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white mb-1">Applications Layer</div>
                    <div className="text-sm text-ssi-sand">Custom solutions built through Velocity Forge</div>
                  </div>
                </div>
              </motion.div>

              {/* Layer 3 - Platform Services */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-r from-ssi-turquoise/20 to-ssi-turquoise/10 border border-ssi-turquoise/50 rounded-xl p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-ssi-turquoise p-3 rounded-lg">
                    <span className="text-white font-bold">L3</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white mb-1">Platform Services</div>
                    <div className="text-sm text-ssi-sand">Golden Paths, templates, reusable components</div>
                  </div>
                </div>
              </motion.div>

              {/* Layer 2 - Governance */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-ssi-ocean/20 to-ssi-ocean/10 border border-ssi-ocean/50 rounded-xl p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-ssi-ocean p-3 rounded-lg">
                    <span className="text-white font-bold">L2</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white mb-1">Governance & Compliance</div>
                    <div className="text-sm text-ssi-sand">Audit trails, validation, regulatory frameworks</div>
                  </div>
                </div>
              </motion.div>

              {/* Layer 1 - Security */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-ssi-midnight to-ssi-midnight/50 border-2 border-ssi-turquoise rounded-xl p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-ssi-turquoise p-3 rounded-lg">
                    <span className="text-white font-bold">L1</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white mb-1">Security Foundation</div>
                    <div className="text-sm text-ssi-sand">Enterprise security, encryption, access control</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <motion.div variants={fadeInUp}>
            <Card className="h-full hover:border-ssi-turquoise/50">
              <div className="flex justify-center mb-4">
                <div className="bg-ssi-turquoise/20 p-3 rounded-xl">
                  <Lock className="w-8 h-8 text-ssi-turquoise" />
                </div>
              </div>
              <h4 className="text-lg font-bold text-white mb-2 text-center">
                Enterprise Security
              </h4>
              <p className="text-sm text-ssi-stone text-center">
                Security and encryption <span className="text-ssi-turquoise">baked in</span> at foundation
              </p>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full hover:border-ssi-ocean/50">
              <div className="flex justify-center mb-4">
                <div className="bg-ssi-ocean/20 p-3 rounded-xl">
                  <FileCheck className="w-8 h-8 text-ssi-ocean" />
                </div>
              </div>
              <h4 className="text-lg font-bold text-white mb-2 text-center">
                Compliance Ready
              </h4>
              <p className="text-sm text-ssi-stone text-center">
                Audit trails and <span className="text-ssi-ocean">validation built-in</span>
              </p>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full hover:border-ssi-turquoise/50">
              <div className="flex justify-center mb-4">
                <div className="bg-ssi-turquoise/20 p-3 rounded-xl">
                  <Users className="w-8 h-8 text-ssi-turquoise" />
                </div>
              </div>
              <h4 className="text-lg font-bold text-white mb-2 text-center">
                Consultant Oversight
              </h4>
              <p className="text-sm text-ssi-stone text-center">
                Maintains <span className="text-ssi-turquoise">expert control</span> while accelerating delivery
              </p>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full hover:border-ssi-sunrise/50">
              <div className="flex justify-center mb-4">
                <div className="bg-ssi-sunrise/20 p-3 rounded-xl">
                  <Shield className="w-8 h-8 text-ssi-sunrise" />
                </div>
              </div>
              <h4 className="text-lg font-bold text-white mb-2 text-center">
                Reduced Dependencies
              </h4>
              <p className="text-sm text-ssi-stone text-center">
                <span className="text-ssi-sunrise">Codified knowledge</span> vs tribal knowledge
              </p>
            </Card>
          </motion.div>
        </motion.div>

        {/* Bottom Insight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 bg-ssi-ocean/10 border border-ssi-ocean/30 rounded-2xl p-6 text-center"
        >
          <p className="text-lg text-white">
            <span className="text-ssi-turquoise font-semibold">Compliance infrastructure enables speed</span>, not prevents it.<br />
            <span className="text-ssi-stone text-sm">Systems &gt; Heroic individuals</span>
          </p>
        </motion.div>
      </div>
    </Slide>
  );
};

export default Slide6RiskMitigation;
