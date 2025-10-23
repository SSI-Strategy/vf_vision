import { motion, AnimatePresence } from 'framer-motion';
import { Zap, X } from 'lucide-react';
import { useContextState } from '../../contexts/ContextProvider';

const WelcomeModal = ({ onStart }) => {
  const { hasSeenWelcome, markWelcomeSeen } = useContextState();

  const handleStart = () => {
    markWelcomeSeen();
    if (onStart) onStart();
  };

  const handleDismiss = () => {
    markWelcomeSeen();
  };

  return (
    <AnimatePresence>
      {!hasSeenWelcome && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, delay: 3.0 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
        >
          <div className="bg-gradient-to-r from-ssi-midnight/95 to-ssi-black/95 backdrop-blur-md border-2 border-ssi-ocean rounded-xl shadow-2xl max-w-lg">
            <div className="p-5 flex items-start gap-4">
              {/* Icon */}
              <div className="bg-gradient-to-r from-ssi-ocean to-ssi-turquoise p-2.5 rounded-lg flex-shrink-0">
                <Zap className="w-5 h-5 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 pr-8">
                <h3 className="text-lg font-bold text-white mb-1">
                  Interactive Guided Tour
                </h3>
                <p className="text-sm text-ssi-sand leading-relaxed mb-3">
                  Use <kbd className="px-1.5 py-0.5 bg-ssi-stone/20 rounded text-xs text-ssi-turquoise">→</kbd> to navigate through contextual insights for each slide.
                  Press <kbd className="px-1.5 py-0.5 bg-ssi-stone/20 rounded text-xs text-ssi-turquoise">?</kbd> anytime to toggle.
                </p>
                <button
                  onClick={handleStart}
                  className="bg-gradient-to-r from-ssi-ocean to-ssi-turquoise text-white text-sm font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Let's Begin
                </button>
              </div>

              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="absolute top-3 right-3 p-1 rounded-full hover:bg-ssi-stone/20 transition-colors group"
                aria-label="Dismiss welcome"
              >
                <X className="w-4 h-4 text-ssi-stone group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeModal;
