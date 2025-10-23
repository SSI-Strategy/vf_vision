import { motion } from 'framer-motion';
import { BookOpen, Lightbulb, Target, TrendingUp, AlertCircle, MessageSquare, ArrowRight } from 'lucide-react';

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

const ContextPopover = ({ context, onNext, onSkip, isLast, currentStep, totalSteps }) => {
  if (!context) return null;

  const Icon = typeIcons[context.type] || MessageSquare;
  const color = typeColors[context.type] || 'ocean';

  // Position based on context.position or default to bottom-right
  const position = context.position || 'bottom-right';

  const positionClasses = {
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    'bottom-right': 'bottom-8 right-8',
    'bottom-left': 'bottom-8 left-8',
    'top-right': 'top-20 right-8',
    'top-left': 'top-20 left-8',
    'bottom': 'bottom-8 left-1/2 -translate-x-1/2',
    'top': 'top-20 left-1/2 -translate-x-1/2',
    'left': 'left-8 top-1/2 -translate-y-1/2',
    'right': 'right-8 top-1/2 -translate-y-1/2'
  }[position];

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`fixed ${positionClasses} z-50 pointer-events-auto`}
    >
      <div className={`bg-gradient-to-br from-ssi-midnight/95 to-ssi-black/95 backdrop-blur-md border-2 ${borderColorClass} rounded-xl shadow-2xl max-w-md w-full md:w-96`}>
        {/* Header */}
        <div className="p-4 pb-3 border-b border-ssi-stone/20">
          <div className="flex items-start gap-3 mb-2">
            <div className={`${iconBgClass} p-2 rounded-lg flex-shrink-0`}>
              <Icon className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-white leading-tight">
                {context.title}
              </h3>
            </div>
          </div>

          {/* Progress dots */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex gap-1">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === currentStep
                      ? `w-6 ${iconBgClass}`
                      : i < currentStep
                      ? `w-3 ${iconBgClass} opacity-40`
                      : 'w-3 bg-ssi-stone/20'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-ssi-stone/70">
              {currentStep + 1}/{totalSteps}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 max-h-[60vh] overflow-y-auto">
          <p className="text-sm text-ssi-sand leading-relaxed mb-3">
            {context.content}
          </p>

          {/* Quote if present */}
          {context.quote && (
            <div className={`border-l-2 ${borderColorClass} pl-3 py-2 mb-3 bg-ssi-black/30 rounded-r`}>
              <p className={`text-sm ${accentColorClass} italic`}>
                "{context.quote}"
              </p>
            </div>
          )}
        </div>

        {/* Footer - compact actions */}
        <div className="p-3 pt-0 flex gap-2">
          <button
            onClick={onNext}
            className={`flex-1 bg-gradient-to-r from-ssi-${color} to-ssi-turquoise text-white text-sm font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2`}
          >
            {isLast ? 'View Slide' : 'Next'}
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onSkip}
            className="px-4 py-2 border border-ssi-stone/20 text-ssi-stone text-sm rounded-lg hover:bg-ssi-stone/10 transition-colors"
          >
            Skip All
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ContextPopover;
