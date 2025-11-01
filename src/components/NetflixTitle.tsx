import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import { useNavigate } from 'react-router-dom';

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handlePlaySound = () => {
    // Prevent multiple clicks
    if (isClicked) return;

    // Sound removed - just start animation on click
    setIsClicked(true); // Starts animation after clicking
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate('/browse');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  return (
    <div className="netflix-container" onClick={handlePlaySound}>
      <h1 className={`netflix-logo-text ${isClicked ? 'animate' : ''}`}>
        ARCHITFLIX
      </h1>
    </div>
  );
};

export default NetflixTitle;
