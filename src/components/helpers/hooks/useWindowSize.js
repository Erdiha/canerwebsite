import { useState, useEffect } from 'react';

export function useWindowSize() {
  // Initialize state with undefined width/height
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to update state with window size
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener and immediately set size
    window.addEventListener('resize', handleResize);
    handleResize();

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Run only on mount

  return windowSize;
}
