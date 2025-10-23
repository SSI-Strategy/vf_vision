import { createContext, useContext, useState, useCallback } from 'react';

const SlideContextContext = createContext();

export const useSlideContext = () => {
  const context = useContext(SlideContextContext);
  if (!context) {
    throw new Error('useSlideContext must be used within SlideContextProvider');
  }
  return context;
};

/**
 * SlideContextProvider - Manages overlay reveal state across slides
 *
 * Tracks:
 * - Which overlays have been revealed on each slide
 * - Current overlay being shown (for sequential reveals)
 * - Whether all overlays on current slide have been revealed
 */
export const SlideContextProvider = ({ children }) => {
  // Track revealed overlays per slide: { slideIndex: [overlayId1, overlayId2, ...] }
  const [revealedOverlays, setRevealedOverlays] = useState({});

  // Track current slide's overlay configuration
  const [slideOverlays, setSlideOverlays] = useState({});

  // Current overlay index being revealed (for sequential mode)
  const [currentOverlayIndex, setCurrentOverlayIndex] = useState({});

  /**
   * Register overlays for a slide
   */
  const registerSlideOverlays = useCallback((slideIndex, overlayIds) => {
    setSlideOverlays(prev => ({
      ...prev,
      [slideIndex]: overlayIds
    }));
  }, []);

  /**
   * Mark an overlay as revealed
   */
  const markOverlayRevealed = useCallback((slideIndex, overlayId) => {
    setRevealedOverlays(prev => ({
      ...prev,
      [slideIndex]: [...(prev[slideIndex] || []), overlayId]
    }));
  }, []);

  /**
   * Check if all overlays on a slide have been revealed
   */
  const allOverlaysRevealed = useCallback((slideIndex) => {
    const overlays = slideOverlays[slideIndex] || [];
    const revealed = revealedOverlays[slideIndex] || [];

    if (overlays.length === 0) return true; // No overlays = can proceed
    return overlays.every(id => revealed.includes(id));
  }, [slideOverlays, revealedOverlays]);

  /**
   * Get the next overlay to reveal on a slide
   */
  const getNextOverlay = useCallback((slideIndex) => {
    const overlays = slideOverlays[slideIndex] || [];
    const revealed = revealedOverlays[slideIndex] || [];

    const nextOverlay = overlays.find(id => !revealed.includes(id));
    return nextOverlay || null;
  }, [slideOverlays, revealedOverlays]);

  /**
   * Advance to next overlay (called when arrow key pressed)
   */
  const revealNextOverlay = useCallback((slideIndex) => {
    const nextOverlay = getNextOverlay(slideIndex);
    if (nextOverlay) {
      setCurrentOverlayIndex(prev => ({
        ...prev,
        [slideIndex]: nextOverlay
      }));
      return nextOverlay;
    }
    return null;
  }, [getNextOverlay]);

  /**
   * Reset overlay state when changing slides
   */
  const resetSlideOverlays = useCallback((slideIndex) => {
    setCurrentOverlayIndex(prev => ({
      ...prev,
      [slideIndex]: null
    }));
  }, []);

  /**
   * Get overlay reveal progress for a slide
   */
  const getOverlayProgress = useCallback((slideIndex) => {
    const overlays = slideOverlays[slideIndex] || [];
    const revealed = revealedOverlays[slideIndex] || [];

    return {
      total: overlays.length,
      revealed: revealed.length,
      remaining: overlays.length - revealed.length
    };
  }, [slideOverlays, revealedOverlays]);

  const value = {
    registerSlideOverlays,
    markOverlayRevealed,
    allOverlaysRevealed,
    getNextOverlay,
    revealNextOverlay,
    resetSlideOverlays,
    getOverlayProgress,
    currentOverlayIndex
  };

  return (
    <SlideContextContext.Provider value={value}>
      {children}
    </SlideContextContext.Provider>
  );
};
