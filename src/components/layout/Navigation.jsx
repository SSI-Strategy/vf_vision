import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Navigation = ({ currentSlide, totalSlides, onPrev, onNext }) => {
  return (
    <>
      {/* Previous Button - Left Side */}
      {currentSlide > 0 && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          onClick={onPrev}
          className="fixed left-8 top-1/2 -translate-y-1/2 z-50 bg-ssi-midnight/50 backdrop-blur-sm p-4 rounded-full border border-ssi-ocean/30 hover:bg-ssi-ocean/20 hover:border-ssi-ocean transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8 text-ssi-ocean group-hover:text-white transition-colors" />
        </motion.button>
      )}

      {/* Next Button - Right Side */}
      {currentSlide < totalSlides - 1 && (
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          onClick={onNext}
          className="fixed right-8 top-1/2 -translate-y-1/2 z-50 bg-ssi-midnight/50 backdrop-blur-sm p-4 rounded-full border border-ssi-ocean/30 hover:bg-ssi-ocean/20 hover:border-ssi-ocean transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8 text-ssi-ocean group-hover:text-white transition-colors" />
        </motion.button>
      )}
    </>
  );
};

export default Navigation;
