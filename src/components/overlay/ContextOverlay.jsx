import { AnimatePresence, motion } from 'framer-motion';
import { X, HelpCircle } from 'lucide-react';
import { useContextState } from '../../contexts/ContextProvider';
import { getContext, getTotalContextsForSlide } from '../../data/slideContexts';
import ContextPopover from './ContextPopover.jsx';

const ContextOverlay = ({ onNavigateNext }) => {
  const {
    currentSlide,
    currentContextStep,
    isOverlayActive,
    hideOverlay,
    advanceContext,
    userPreferences
  } = useContextState();

  if (!isOverlayActive) return null;

  const context = getContext(currentSlide, currentContextStep);
  const totalContexts = getTotalContextsForSlide(currentSlide);
  const isLastContext = currentContextStep === totalContexts - 1;

  const handleNext = () => {
    // If we're on the last context, just hide the overlay
    if (isLastContext) {
      hideOverlay();
      return;
    }

    // Otherwise, advance to the next context
    advanceContext(totalContexts, 9);
  };

  const handleSkip = () => {
    hideOverlay();
  };

  const handleClose = () => {
    hideOverlay();
  };

  return (
    <AnimatePresence>
      {isOverlayActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 pointer-events-none"
        >
          {/* Subtle backdrop - much lighter */}
          <div className="absolute inset-0 bg-black/40 pointer-events-auto" onClick={handleClose} />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 z-50 p-2 rounded-full bg-ssi-midnight/90 border border-ssi-stone/30 hover:bg-ssi-ocean/50 transition-colors group pointer-events-auto"
            aria-label="Close context overlay"
          >
            <X className="w-5 h-5 text-ssi-stone group-hover:text-white transition-colors" />
          </button>

          {/* Help hint */}
          <div className="absolute top-6 left-6 z-50 flex items-center gap-2 bg-ssi-midnight/90 border border-ssi-stone/30 rounded-full px-4 py-2 pointer-events-auto">
            <HelpCircle className="w-4 h-4 text-ssi-turquoise" />
            <span className="text-ssi-sand text-sm hidden sm:inline">Press → for next • ? to toggle</span>
          </div>

          {/* Context Popover */}
          <AnimatePresence mode="wait">
            <ContextPopover
              key={`${currentSlide}-${currentContextStep}`}
              context={context}
              onNext={handleNext}
              onSkip={handleSkip}
              isLast={isLastContext}
              currentStep={currentContextStep}
              totalSteps={totalContexts}
            />
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContextOverlay;
