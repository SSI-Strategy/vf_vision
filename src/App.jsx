import { useState, useEffect, useRef } from 'react';
import PasswordGate from './components/auth/PasswordGate';
import HorizontalScroller from './components/layout/HorizontalScroller';
import WelcomeModal from './components/overlay/WelcomeModal';
import Slide1Hero from './slides/Slide1Hero';
import Slide2MarketImperative from './slides/Slide2MarketImperative';
import Slide3VelocityFoundry from './slides/Slide3VelocityFoundry';
import Slide4CompetitiveAdvantage from './slides/Slide4CompetitiveAdvantage';
import Slide5BusinessModel from './slides/Slide5BusinessModel';
import Slide6RiskMitigation from './slides/Slide6RiskMitigation';
import Slide7InvestmentJourney from './slides/Slide7InvestmentJourney';
import Slide8WhyNow from './slides/Slide8WhyNow';
import Slide9Final from './slides/Slide9Final';
import { ContextProvider } from './contexts/ContextProvider';
import { useContextState } from './contexts/ContextProvider';
import './styles/globals.css';

function AppContent() {
  const { showOverlay, hasSeenWelcome } = useContextState();
  const hasShownInitialOverlay = useRef(false);

  // Auto-show welcome modal or overlay after 3 seconds (only once on mount)
  useEffect(() => {
    // Only run this once
    if (hasShownInitialOverlay.current) return;

    const timer = setTimeout(() => {
      // If welcome hasn't been seen, the WelcomeModal will show itself
      // If welcome has been seen, directly show the overlay
      if (hasSeenWelcome) {
        showOverlay();
      }
      hasShownInitialOverlay.current = true;
    }, 3000);

    return () => clearTimeout(timer);
  }, []); // Empty dependency array - only run on mount

  const handleWelcomeStart = () => {
    // Show the first context overlay after welcome
    showOverlay();
  };

  return (
    <div className="w-full h-screen">
      <WelcomeModal onStart={handleWelcomeStart} />
      <HorizontalScroller>
        <Slide1Hero />
        <Slide2MarketImperative />
        <Slide3VelocityFoundry />
        <Slide4CompetitiveAdvantage />
        <Slide5BusinessModel />
        <Slide6RiskMitigation />
        <Slide7InvestmentJourney />
        <Slide8WhyNow />
        <Slide9Final />
      </HorizontalScroller>
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <PasswordGate onAuthenticated={() => setIsAuthenticated(true)} />;
  }

  return (
    <ContextProvider>
      <AppContent />
    </ContextProvider>
  );
}

export default App;
