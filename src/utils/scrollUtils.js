// Smooth scroll to a specific slide
export const scrollToSlide = (slideIndex, behavior = 'smooth') => {
  const slideWidth = window.innerWidth;
  const container = document.querySelector('.horizontal-scroller');

  if (container) {
    container.scrollTo({
      left: slideIndex * slideWidth,
      behavior: behavior
    });
  }
};

// Get current slide index based on scroll position
export const getCurrentSlide = (scrollPosition) => {
  const slideWidth = window.innerWidth;
  return Math.round(scrollPosition / slideWidth);
};

// Debounce function for scroll events
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Snap to nearest slide
export const snapToSlide = (scrollPosition) => {
  const currentSlide = getCurrentSlide(scrollPosition);
  scrollToSlide(currentSlide, 'smooth');
};
