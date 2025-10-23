import { motion } from 'framer-motion';
import { BookOpen, Lightbulb, Target, TrendingUp, AlertCircle, MessageSquare } from 'lucide-react';

const typeIcons = {
  intro: MessageSquare,
  theory: BookOpen,
  concept: Lightbulb,
  example: Target,
  insight: TrendingUp,
  strategy: Target,
  urgency: AlertCircle,
  metrics: TrendingUp,
  vision: Lightbulb,
  navigation: MessageSquare,
  context: BookOpen,
  opportunity: Target
};

const typeColors = {
  intro: 'ocean',
  theory: 'turquoise',
  concept: 'ocean',
  example: 'turquoise',
  insight: 'sunrise',
  strategy: 'ocean',
  urgency: 'sunrise',
  metrics: 'turquoise',
  vision: 'sunrise',
  navigation: 'ocean',
  context: 'turquoise',
  opportunity: 'ocean'
};

const ContextCard = ({ context, onNext, onSkip, isLast, currentStep, totalSteps }) => {
  if (!context) return null;

  const Icon = typeIcons[context.type] || MessageSquare;
  const color = typeColors[context.type] || 'ocean';

  const borderColorClass = {
    ocean: 'border-ssi-ocean',
    turquoise: 'border-ssi-turquoise',
    sunrise: 'border-ssi-sunrise'
  }[color];

  const iconBgClass = {
    ocean: 'bg-ssi-ocean',
    turquoise: 'bg-ssi-turquoise',
    sunrise: 'bg-ssi-sunrise'
  }[color];

  const accentColorClass = {
    ocean: 'text-ssi-ocean',
    turquoise: 'text-ssi-turquoise',
    sunrise: 'text-ssi-sunrise'
  }[color];

  const buttonGradientClass = {
    ocean: 'bg-gradient-to-r from-ssi-ocean to-ssi-turquoise',
    turquoise: 'bg-gradient-to-r from-ssi-turquoise to-ssi-ocean',
    sunrise: 'bg-gradient-to-r from-ssi-sunrise to-ssi-turquoise'
  }[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.95 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`bg-gradient-to-br from-ssi-midnight to-ssi-black border-2 ${borderColorClass} rounded-2xl shadow-2xl max-w-2xl w-11/12 md:w-full mx-auto`}
    >
      {/* Header */}
      <div className="p-6 pb-4 border-b border-ssi-stone/20">
        <div className="flex items-center gap-4 mb-3">
          <div className={`${iconBgClass} p-3 rounded-xl`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {context.title}
            </h3>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentStep
                    ? `w-8 ${iconBgClass}`
                    : i < currentStep
                    ? `w-4 ${iconBgClass} opacity-50`
                    : 'w-4 bg-ssi-stone/30'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-ssi-stone ml-2">
            {currentStep + 1} of {totalSteps}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <p className="text-lg md:text-xl text-ssi-sand leading-relaxed mb-6">
          {context.content}
        </p>

        {/* Quote if present */}
        {context.quote && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={`border-l-4 ${borderColorClass} pl-6 py-4 mb-6 bg-ssi-black/30 rounded-r-lg`}
          >
            <p className={`text-xl md:text-2xl ${accentColorClass} italic font-light`}>
              "{context.quote}"
            </p>
          </motion.div>
        )}

        {/* Connections */}
        {context.connections && Object.keys(context.connections).length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 pt-4 border-t border-ssi-stone/20"
          >
            <p className="text-xs text-ssi-stone/70 uppercase tracking-wider mb-2">
              Connected Concepts
            </p>
            <div className="space-y-1.5">
              {Object.entries(context.connections).map(([key, value]) => (
                <div key={key} className="flex items-start gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${iconBgClass} mt-2 flex-shrink-0`}></div>
                  <p className="text-sm text-ssi-stone italic">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Footer with actions */}
      <div className="p-6 pt-0 flex flex-col sm:flex-row gap-3">
        <button
          onClick={onNext}
          className={`flex-1 ${buttonGradientClass} text-white font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-opacity`}
        >
          {isLast ? 'Continue to Next Slide' : 'Next Context'}
        </button>
        <button
          onClick={onSkip}
          className="sm:w-auto px-6 py-3 border border-ssi-stone/30 text-ssi-stone rounded-xl hover:bg-ssi-stone/10 transition-colors"
        >
          Skip
        </button>
      </div>
    </motion.div>
  );
};

export default ContextCard;
