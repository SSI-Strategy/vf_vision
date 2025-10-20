import { useState, useEffect, useRef } from 'react';
import { debounce, getCurrentSlide, scrollToSlide } from '../../utils/scrollUtils';
import Navigation from './Navigation';
import ProgressIndicator from './ProgressIndicator';
import { SLIDES_CONFIG } from '../../utils/constants';

const HorizontalScroller = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollerRef = useRef(null);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const handleScroll = debounce(() => {
      if (!isScrollingRef.current) {
        const newSlide = getCurrentSlide(scroller.scrollLeft);
        setCurrentSlide(newSlide);
      }
    }, 100);

    scroller.addEventListener('scroll', handleScroll);
    return () => scroller.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const handleNext = () => {
    if (currentSlide < SLIDES_CONFIG.length - 1) {
      isScrollingRef.current = true;
      setCurrentSlide(currentSlide + 1);
      scrollToSlide(currentSlide + 1);
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      isScrollingRef.current = true;
      setCurrentSlide(currentSlide - 1);
      scrollToSlide(currentSlide - 1);
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }
  };

  const handleSlideClick = (slideIndex) => {
    isScrollingRef.current = true;
    setCurrentSlide(slideIndex);
    scrollToSlide(slideIndex);
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  };

  return (
    <div className="relative w-full h-full">
      <div
        ref={scrollerRef}
        className="horizontal-scroller flex w-full h-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'thin' }}
      >
        {children}
      </div>

      <Navigation
        currentSlide={currentSlide}
        totalSlides={SLIDES_CONFIG.length}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      <ProgressIndicator
        currentSlide={currentSlide}
        onSlideClick={handleSlideClick}
      />
    </div>
  );
};

export default HorizontalScroller;
