import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Target, CheckCircle2, Clock, Users, Heart, DollarSign, ArrowUp, ArrowDown } from 'lucide-react';
import Slide from '../components/layout/Slide';
import Card from '../components/ui/Card';
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
    { label: 'Time-to-value', icon: Clock, color: 'ocean', direction: 'down' },
    { label: 'Consultant productivity', icon: Users, color: 'turquoise', direction: 'up' },
    { label: 'Client satisfaction', icon: Heart, color: 'sunrise', direction: 'up' },
    { label: 'Margin improvement', icon: DollarSign, color: 'ocean', direction: 'up' }
  ];

  return (
    <Slide className="bg-gradient-to-br from-ssi-midnight via-ssi-black to-ssi-midnight">
      <div className="max-w-7xl w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-8"
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
          className="relative mb-8"
        >
          {/* Timeline line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ssi-ocean via-ssi-turquoise to-ssi-sunrise hidden lg:block" />

          <div className="grid md:grid-cols-3 gap-8">
            {phases.map((phase, index) => {
              const Icon = phase.icon;

              // Define color classes based on phase.color
              const colorClasses = {
                ocean: {
                  badge: 'bg-ssi-ocean',
                  card: 'bg-gradient-to-br from-ssi-ocean/10 to-transparent hover:border-ssi-ocean/50',
                  iconBg: 'bg-ssi-ocean/20',
                  icon: 'text-ssi-ocean',
                  text: 'text-ssi-ocean',
                  check: 'text-ssi-ocean'
                },
                turquoise: {
                  badge: 'bg-ssi-turquoise',
                  card: 'bg-gradient-to-br from-ssi-turquoise/10 to-transparent hover:border-ssi-turquoise/50',
                  iconBg: 'bg-ssi-turquoise/20',
                  icon: 'text-ssi-turquoise',
                  text: 'text-ssi-turquoise',
                  check: 'text-ssi-turquoise'
                },
                sunrise: {
                  badge: 'bg-ssi-sunrise',
                  card: 'bg-gradient-to-br from-ssi-sunrise/10 to-transparent hover:border-ssi-sunrise/50',
                  iconBg: 'bg-ssi-sunrise/20',
                  icon: 'text-ssi-sunrise',
                  text: 'text-ssi-sunrise',
                  check: 'text-ssi-sunrise'
                }
              }[phase.color];

              return (
                <motion.div
                  key={phase.number}
                  variants={fadeInUp}
                  custom={index}
                  className="relative"
                >
                  {/* Phase number badge */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-16 h-16 rounded-full ${colorClasses.badge} border-4 border-ssi-black flex items-center justify-center`}>
                      <span className="text-white font-bold text-xl">{phase.number}</span>
                    </div>
                  </div>

                  <Card className={`pt-12 mt-6 ${colorClasses.card}`}>
                    <div className="flex justify-center mb-4">
                      <div className={`${colorClasses.iconBg} p-3 rounded-xl`}>
                        <Icon className={`w-8 h-8 ${colorClasses.icon}`} />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 text-center">
                      Phase {phase.number}: {phase.title}
                    </h3>

                    <div className={`text-center mb-6 ${colorClasses.text} font-semibold`}>
                      {phase.duration}
                    </div>

                    <div className="space-y-3">
                      {phase.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-5 h-5 ${colorClasses.check} flex-shrink-0 mt-0.5`} />
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
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              const ArrowIcon = metric.direction === 'down' ? ArrowDown : ArrowUp;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className={`bg-gradient-to-br from-ssi-${metric.color}/10 to-ssi-${metric.color}/5 border border-ssi-${metric.color}/30 rounded-xl p-6 text-center`}
                >
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className={`bg-ssi-${metric.color}/20 p-3 rounded-xl`}>
                      <Icon className={`w-8 h-8 text-ssi-${metric.color}`} />
                    </div>
                    <motion.div
                      initial={{ y: metric.direction === 'down' ? -10 : 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                    >
                      <ArrowIcon className={`w-10 h-10 text-ssi-${metric.color}`} strokeWidth={3} />
                    </motion.div>
                  </div>
                  <div className="text-sm text-ssi-sand font-medium">{metric.label}</div>
                </motion.div>
              );
            })}
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
