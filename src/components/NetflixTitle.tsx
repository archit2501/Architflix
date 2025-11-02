import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import { useNavigate } from 'react-router-dom';

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const text = 'ARCHITFLIX';

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
          const rotation = offset * 3; // Adjust curve intensity
          const translateY = Math.abs(offset) * -2; // Adjust arc height

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
