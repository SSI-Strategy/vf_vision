import { motion } from 'framer-motion';
import { SLIDES_CONFIG } from '../../utils/constants';

const ProgressIndicator = ({ currentSlide, onSlideClick }) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-3 items-center">
      {SLIDES_CONFIG.map((slide, index) => (
        <button
          key={slide.id}
          onClick={() => onSlideClick(index)}
          className="group relative"
          aria-label={`Go to slide ${index + 1}: ${slide.title}`}
        >
          <motion.div
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'bg-ssi-ocean scale-125'
                : 'bg-ssi-stone/50 hover:bg-ssi-turquoise'
            }`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          />

          {/* Tooltip */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div className="bg-ssi-midnight/90 backdrop-blur-sm px-3 py-1.5 rounded-lg whitespace-nowrap border border-ssi-ocean/30">
              <span className="text-xs font-medium text-white">
                {slide.title}
              </span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default ProgressIndicator;
