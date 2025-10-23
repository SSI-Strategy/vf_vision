import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, X } from 'lucide-react';

/**
 * ContextOverlay - Interactive tooltip that reveals additional context
 *
 * Features:
 * - Shows on hover OR when triggered programmatically
 * - Tracks whether it's been revealed (for navigation blocking)
 * - Positioned relative to trigger element
 * - Dismissable
 */
const ContextOverlay = ({
  id,
  children,
  content,
  title,
  position = 'top',
  triggerReveal = false,
  onRevealed,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenRevealed, setHasBeenRevealed] = useState(false);

  // Handle programmatic reveal (arrow key press)
  useEffect(() => {
    if (triggerReveal && !hasBeenRevealed) {
      setIsVisible(true);
      markAsRevealed();
    }
  }, [triggerReveal]);

  const markAsRevealed = () => {
    if (!hasBeenRevealed) {
      setHasBeenRevealed(true);
      if (onRevealed) {
        onRevealed(id);
      }
    }
  };

  const handleMouseEnter = () => {
    setIsVisible(true);
    markAsRevealed();
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  // Position classes
  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2'
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger element with indicator */}
      <div className="relative cursor-help group">
        {children}
        {!hasBeenRevealed && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-ssi-turquoise rounded-full animate-pulse" />
        )}
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: position === 'top' ? 10 : -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: position === 'top' ? 10 : -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute ${positionClasses[position]} z-50 w-80 pointer-events-auto`}
          >
            <div className="bg-ssi-midnight border-2 border-ssi-turquoise/50 rounded-xl shadow-2xl p-5 backdrop-blur-sm">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-ssi-turquoise flex-shrink-0" />
                  {title && (
                    <h4 className="text-sm font-bold text-white">{title}</h4>
                  )}
                </div>
                <button
                  onClick={handleClose}
                  className="text-ssi-stone hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="text-sm text-ssi-sand leading-relaxed">
                {content}
              </div>
              {triggerReveal && (
                <div className="mt-3 pt-3 border-t border-ssi-turquoise/20 text-xs text-ssi-stone italic">
                  Press → again to continue
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContextOverlay;
