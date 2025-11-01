import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import { useNavigate } from 'react-router-dom';

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

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
        ARCHITFLIX
      </h1>
    </div>
  );
};

export default NetflixTitle;
