// ScrollToHashElement.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashElement = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        // Give time for the page to render before scrolling
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    }
  }, [hash]);

  return null;
};

export default ScrollToHashElement;
