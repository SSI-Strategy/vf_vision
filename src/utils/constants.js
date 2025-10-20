// Password for site access - randomly generated
export const SITE_ACCESS_CODE = "VelocityFoundry2025!";

// Animation variants for Framer Motion
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Slide configuration
export const SLIDES_CONFIG = [
  { id: 1, title: "The Awakening" },
  { id: 2, title: "Market Imperative" },
  { id: 3, title: "Velocity Foundry" },
  { id: 4, title: "Competitive Advantage" },
  { id: 5, title: "Business Model" },
  { id: 6, title: "Risk Mitigation" },
  { id: 7, title: "Investment Journey" },
  { id: 8, title: "Why Now" }
];
