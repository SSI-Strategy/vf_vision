import { useEffect, Children, cloneElement } from 'react';
import { useSlideContext } from '../../context/SlideContextProvider';

/**
 * SlideWithOverlays - Wrapper for slides that have context overlays
 *
 * Automatically registers overlays and handles reveal state
 */
const SlideWithOverlays = ({ slideIndex, children }) => {
  const { registerSlideOverlays, currentOverlayIndex, markOverlayRevealed } = useSlideContext();

  useEffect(() => {
    // Extract overlay IDs from children
    const overlayIds = [];
    Children.forEach(children, child => {
      if (child?.props?.overlayId) {
        overlayIds.push(child.props.overlayId);
      }
    });

    // Register this slide's overlays
    if (overlayIds.length > 0) {
      registerSlideOverlays(slideIndex, overlayIds);
    }
  }, [slideIndex, registerSlideOverlays]);

  // Clone children and inject trigger props
  const enhancedChildren = Children.map(children, child => {
    if (!child?.props?.overlayId) return child;

    const shouldTrigger = currentOverlayIndex[slideIndex] === child.props.overlayId;

    return cloneElement(child, {
      triggerReveal: shouldTrigger,
      onRevealed: (id) => {
        markOverlayRevealed(slideIndex, id);
        if (child.props.onRevealed) {
          child.props.onRevealed(id);
        }
      }
    });
  });

  return <>{enhancedChildren}</>;
};

export default SlideWithOverlays;
