import React, { useState, useEffect } from 'react';
import GoToTopBtn from '../assets/Icons/GoToTop.png';

function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <div className='fixed bottom-10 right-0 mr-10'>
          <button
            className='rounded-3xl p-2'
            onClick={scrollToTop}
          >
            <img src={GoToTopBtn} alt="" className='h-16 hover:opacity-70 transition duration-300'/>
          </button>
        </div>
      )}
    </>
  );
}

export default GoToTop;
