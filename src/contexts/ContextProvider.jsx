import { createContext, useContext, useState, useEffect } from 'react';

const ContextStateContext = createContext();

export const useContextState = () => {
  const context = useContext(ContextStateContext);
  if (!context) {
    throw new Error('useContextState must be used within a ContextProvider');
  }
  return context;
};

export const ContextProvider = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentContextStep, setCurrentContextStep] = useState(0);
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [contextHistory, setContextHistory] = useState([]);
  const [hasSeenWelcome, setHasSeenWelcome] = useState(() => {
    return localStorage.getItem('vf_hasSeenWelcome') === 'true';
  });

  // User preferences
  const [userPreferences, setUserPreferences] = useState(() => {
    const saved = localStorage.getItem('vf_contextPreferences');
    return saved ? JSON.parse(saved) : {
      autoAdvance: true,
      hasCompletedTutorial: false
    };
  });

  // Save preferences to localStorage
  useEffect(() => {
    localStorage.setItem('vf_contextPreferences', JSON.stringify(userPreferences));
  }, [userPreferences]);

  // Track context history
  const addToHistory = (slideIndex, contextStep) => {
    setContextHistory(prev => [...prev, { slideIndex, contextStep, timestamp: Date.now() }]);
  };

  // Navigate to specific slide and context
  const goToSlideAndContext = (slideIndex, contextStep = 0) => {
    setCurrentSlide(slideIndex);
    setCurrentContextStep(contextStep);
    addToHistory(slideIndex, contextStep);
  };

  // Advance to next context or slide
  const advanceContext = (totalContextsForSlide, totalSlides) => {
    if (currentContextStep < totalContextsForSlide - 1) {
      // More contexts in current slide
      const newStep = currentContextStep + 1;
      setCurrentContextStep(newStep);
      addToHistory(currentSlide, newStep);
      return { slideChanged: false, contextChanged: true };
    } else if (currentSlide < totalSlides - 1) {
      // Move to next slide
      const newSlide = currentSlide + 1;
      setCurrentSlide(newSlide);
      setCurrentContextStep(0);
      addToHistory(newSlide, 0);
      return { slideChanged: true, contextChanged: true };
    }
    return { slideChanged: false, contextChanged: false };
  };

  // Go back to previous context or slide
  const regressContext = (totalContextsForPreviousSlide) => {
    if (currentContextStep > 0) {
      // More contexts in current slide
      const newStep = currentContextStep - 1;
      setCurrentContextStep(newStep);
      addToHistory(currentSlide, newStep);
      return { slideChanged: false, contextChanged: true };
    } else if (currentSlide > 0) {
      // Move to previous slide, go to last context
      const newSlide = currentSlide - 1;
      const lastContext = Math.max(0, totalContextsForPreviousSlide - 1);
      setCurrentSlide(newSlide);
      setCurrentContextStep(lastContext);
      addToHistory(newSlide, lastContext);
      return { slideChanged: true, contextChanged: true };
    }
    return { slideChanged: false, contextChanged: false };
  };

  // Toggle overlay visibility
  const toggleOverlay = () => {
    setIsOverlayActive(prev => !prev);
  };

  // Show overlay
  const showOverlay = () => {
    setIsOverlayActive(true);
  };

  // Hide overlay
  const hideOverlay = () => {
    setIsOverlayActive(false);
  };

  // Mark welcome as seen
  const markWelcomeSeen = () => {
    setHasSeenWelcome(true);
    localStorage.setItem('vf_hasSeenWelcome', 'true');
  };

  // Update preferences
  const updatePreferences = (newPreferences) => {
    setUserPreferences(prev => ({ ...prev, ...newPreferences }));
  };

  const value = {
    currentSlide,
    currentContextStep,
    isOverlayActive,
    contextHistory,
    hasSeenWelcome,
    userPreferences,
    setCurrentSlide,
    setCurrentContextStep,
    goToSlideAndContext,
    advanceContext,
    regressContext,
    toggleOverlay,
    showOverlay,
    hideOverlay,
    markWelcomeSeen,
    updatePreferences,
    addToHistory
  };

  return (
    <ContextStateContext.Provider value={value}>
      {children}
    </ContextStateContext.Provider>
  );
};
