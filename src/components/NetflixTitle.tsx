import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import { useNavigate } from 'react-router-dom';

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const text = 'ARCHITFLIX';

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-trigger animation after 1.5 seconds
  useEffect(() => {
    const autoTrigger = setTimeout(() => {
      setIsClicked(true);
    }, 1500);

    return () => clearTimeout(autoTrigger);
  }, []);

  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Prevent multiple clicks
    if (isClicked) return;

    // Start animation on click
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate('/browse');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  return (
    <div
      className="netflix-container"
      onClick={handleClick}
      onTouchStart={handleClick}
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <h1 className={`netflix-logo-text ${isClicked ? 'animate' : ''}`}>
        {text.split('').map((letter, index) => {
          const totalLetters = text.length;
          const middleIndex = (totalLetters - 1) / 2;
          const offset = index - middleIndex;

          // Reduce curve intensity for mobile
          const rotationIntensity = isMobile ? 2 : 3;
          const heightIntensity = isMobile ? -1 : -2;

          const rotation = offset * rotationIntensity;
          const translateY = Math.abs(offset) * heightIntensity;

          return (
            <span
              key={index}
              className="curved-letter"
              style={{
                transform: `rotateY(${rotation}deg) translateY(${translateY}px)`,
                display: 'inline-block'
              }}
            >
              {letter}
            </span>
          );
        })}
      </h1>
    </div>
  );
};

export default NetflixTitle;
