import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Target, CheckCircle2 } from 'lucide-react';
import Slide from '../components/layout/Slide';
import Card from '../components/ui/Card';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import { fadeInUp, staggerChildren } from '../utils/constants';

const Slide7InvestmentJourney = () => {
  const phases = [
    {
      number: '01',
      title: 'Foundation',
      duration: '6-9 months',
      color: 'ocean',
      icon: Rocket,
      items: [
        'Platform core development',
        '2-3 lighthouse client pilots',
        'Golden Paths library initiation',
        'Team enablement begins'
      ]
    },
    {
      number: '02',
      title: 'Scale',
      duration: '9-15 months',
      color: 'turquoise',
      icon: TrendingUp,
      items: [
        'Full consulting team adoption',
        'Expand client base',
        'Platform refinement',
        'IP library growth'
      ]
    },
    {
      number: '03',
      title: 'Productize',
      duration: '15-18 months',
      color: 'sunrise',
      icon: Target,
      items: [
        'Platform licensing to clients',
        'Ecosystem partnerships',
        'Market leadership position',
        'Recurring revenue dominance'
      ]
    }
  ];

  const metrics = [
    { label: 'Time-to-value reduction', value: 60, suffix: '%' },
    { label: 'Consultant productivity', value: 300, suffix: '%' },
    { label: 'Client NPS improvement', value: 45, suffix: ' pts' },
    { label: 'Margin improvement', value: 40, suffix: '%' }
  ];

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
            The Investment Journey
          </h2>
          <p className="text-xl text-ssi-stone max-w-3xl mx-auto">
            Three phases to transform SSI Strategy into a velocity-native organization
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="relative mb-16"
        >
          {/* Timeline line */}
          <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-ssi-ocean via-ssi-turquoise to-ssi-sunrise hidden lg:block" />

          <div className="grid md:grid-cols-3 gap-8">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={phase.number}
                  variants={fadeInUp}
                  custom={index}
                  className="relative"
                >
                  {/* Phase number badge */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-16 h-16 rounded-full bg-ssi-${phase.color} border-4 border-ssi-black flex items-center justify-center`}>
                      <span className="text-white font-bold text-xl">{phase.number}</span>
                    </div>
                  </div>

                  <Card className={`pt-12 mt-6 hover:border-ssi-${phase.color}/50 bg-gradient-to-br from-ssi-${phase.color}/10 to-transparent`}>
                    <div className="flex justify-center mb-4">
                      <div className={`bg-ssi-${phase.color}/20 p-3 rounded-xl`}>
                        <Icon className={`w-8 h-8 text-ssi-${phase.color}`} />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 text-center">
                      Phase {phase.number}: {phase.title}
                    </h3>

                    <div className={`text-center mb-6 text-ssi-${phase.color} font-semibold`}>
                      {phase.duration}
                    </div>

                    <div className="space-y-3">
                      {phase.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-5 h-5 text-ssi-${phase.color} flex-shrink-0 mt-0.5`} />
                          <span className="text-sm text-ssi-sand">{item}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-ssi-midnight/50 border border-ssi-ocean/30 rounded-2xl p-8"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Success Metrics
            <span className="block text-lg text-ssi-stone font-normal mt-2">
              Expected outcomes within 18 months
            </span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-gradient-to-br from-ssi-ocean/10 to-ssi-turquoise/10 border border-ssi-ocean/30 rounded-xl p-6 text-center"
              >
                <div className="text-5xl font-bold mb-3">
                  <span className="bg-gradient-to-r from-ssi-ocean to-ssi-turquoise bg-clip-text text-transparent">
                    <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                  </span>
                </div>
                <div className="text-sm text-ssi-sand">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 p-4 bg-ssi-turquoise/10 border border-ssi-turquoise/30 rounded-lg"
          >
            <p className="text-center text-ssi-turquoise text-sm">
              Each 90-day transformation cycle compounds into permanent advantage
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center text-ssi-stone text-sm italic"
        >
          "The returns aren't linear—they're exponential"
        </motion.div>
      </div>
    </Slide>
  );
};

export default Slide7InvestmentJourney;
