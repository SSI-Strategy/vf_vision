import { useState } from 'react';
import PasswordGate from './components/auth/PasswordGate';
import HorizontalScroller from './components/layout/HorizontalScroller';
import Slide1Hero from './slides/Slide1Hero';
import Slide2MarketImperative from './slides/Slide2MarketImperative';
import Slide3VelocityFoundry from './slides/Slide3VelocityFoundry';
import Slide4CompetitiveAdvantage from './slides/Slide4CompetitiveAdvantage';
import Slide5BusinessModel from './slides/Slide5BusinessModel';
import Slide6RiskMitigation from './slides/Slide6RiskMitigation';
import Slide7InvestmentJourney from './slides/Slide7InvestmentJourney';
import Slide8WhyNow from './slides/Slide8WhyNow';
import './styles/globals.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <PasswordGate onAuthenticated={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="w-full h-screen">
      <HorizontalScroller>
        <Slide1Hero />
        <Slide2MarketImperative />
        <Slide3VelocityFoundry />
        <Slide4CompetitiveAdvantage />
        <Slide5BusinessModel />
        <Slide6RiskMitigation />
        <Slide7InvestmentJourney />
        <Slide8WhyNow />
      </HorizontalScroller>
    </div>
  );
}

export default App;
