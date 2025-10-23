import { useState, useEffect, useRef } from 'react';
import { debounce, getCurrentSlide, scrollToSlide } from '../../utils/scrollUtils';
import Navigation from './Navigation';
import ProgressIndicator from './ProgressIndicator';
import { SLIDES_CONFIG } from '../../utils/constants';
import { useContextState } from '../../contexts/ContextProvider';
import { getTotalContextsForSlide } from '../../data/slideContexts';
import ContextOverlay from '../overlay/ContextOverlay';

const HorizontalScroller = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollerRef = useRef(null);
  const isScrollingRef = useRef(false);

  const {
    currentSlide: contextSlide,
    currentContextStep,
    isOverlayActive,
    showOverlay,
    hideOverlay,
    toggleOverlay,
    advanceContext,
    regressContext,
    goToSlideAndContext,
    setCurrentSlide: setContextSlide,
    setCurrentContextStep,
    userPreferences
  } = useContextState();

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

  // Sync context slide with scroller slide
  useEffect(() => {
    if (currentSlide !== contextSlide) {
      setContextSlide(currentSlide);
      setCurrentContextStep(0);
      // Only show overlay if the slide has contexts and autoAdvance is enabled
      const totalContexts = getTotalContextsForSlide(currentSlide);
      if (userPreferences.autoAdvance && totalContexts > 0) {
        showOverlay();
      }
    }
  }, [currentSlide, contextSlide, setContextSlide, setCurrentContextStep, userPreferences.autoAdvance, showOverlay]);

  // Keyboard navigation - integrated with context system
  useEffect(() => {
    let keyPressed = false;

    const handleKeyDown = (e) => {
      // Prevent repeated firing when key is held down
      if (keyPressed) return;

      // Toggle overlay with ? key
      if (e.key === '?' || e.key === 'h') {
        e.preventDefault();
        keyPressed = true;
        toggleOverlay();
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        keyPressed = true;
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        keyPressed = true;
        handlePrev();
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft' || e.key === '?' || e.key === 'h') {
        keyPressed = false;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [currentSlide, toggleOverlay]);

  const handleNext = () => {
    // If overlay is active, advance through contexts
    if (isOverlayActive) {
      const totalContexts = getTotalContextsForSlide(currentSlide);
      const isLastContext = currentContextStep === totalContexts - 1;

      if (isLastContext) {
        // On last context, hide overlay to reveal slide
        hideOverlay();
        return;
      } else {
        // Advance to next context
        advanceContext(totalContexts, SLIDES_CONFIG.length);
        return;
      }
    }

    // Overlay is not active - advance to next slide and show overlay if it has contexts
    if (currentSlide < SLIDES_CONFIG.length - 1) {
      isScrollingRef.current = true;
      const nextSlide = currentSlide + 1;
      setCurrentSlide(nextSlide);
      scrollToSlide(nextSlide);
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);

      // Only show overlay if the next slide has contexts
      const totalContexts = getTotalContextsForSlide(nextSlide);
      if (totalContexts > 0) {
        showOverlay();
      }
    }
  };

  const handlePrev = () => {
    // If overlay is active, try to regress context first
    if (isOverlayActive) {
      const previousSlideIndex = currentSlide > 0 ? currentSlide - 1 : 0;
      const totalContextsForPrevSlide = getTotalContextsForSlide(previousSlideIndex);
      const result = regressContext(totalContextsForPrevSlide);

      // If we moved to previous slide in context system, sync the scroller
      if (result.slideChanged && currentSlide > 0) {
        isScrollingRef.current = true;
        setCurrentSlide(currentSlide - 1);
        scrollToSlide(currentSlide - 1);
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 800);
      }
    } else {
      // No overlay, just regress slide
      if (currentSlide > 0) {
        isScrollingRef.current = true;
        setCurrentSlide(currentSlide - 1);
        scrollToSlide(currentSlide - 1);
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 800);
      }
    }
  };

  const handleSlideClick = (slideIndex) => {
    isScrollingRef.current = true;
    setCurrentSlide(slideIndex);
    scrollToSlide(slideIndex);
    goToSlideAndContext(slideIndex, 0);
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  };

  const handleNavigateNext = () => {
    if (currentSlide < SLIDES_CONFIG.length - 1) {
      isScrollingRef.current = true;
      setCurrentSlide(currentSlide + 1);
      scrollToSlide(currentSlide + 1);
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }
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

      <ContextOverlay onNavigateNext={handleNavigateNext} />
    </div>
  );
};

export default HorizontalScroller;
