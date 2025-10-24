import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './BackToTop.scss';

// BackToTop component - Floating button to return to top of page
function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  // Check if device is mobile or tablet
  const checkDevice = () => {
    const width = window.innerWidth;
    setIsMobileOrTablet(width <= 1024); // Show on mobile and tablet
  };

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Add event listeners
  useEffect(() => {
    checkDevice();
    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('resize', checkDevice);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  // Only render on mobile and tablet devices
  if (!isMobileOrTablet) {
    return null;
  }

  return (
    <>
      {isVisible && (
        <button 
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Volver al inicio"
          title="Volver al inicio"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default BackToTop;
