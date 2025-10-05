import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NetflixTitle.css';

const NetflixTitle: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="netflix-title-container">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="netflix-logo">ARCHITFLIX</h1>
          <h2 className="hero-title">Now Streaming Innovation</h2>
          <h3 className="hero-subtitle">One Line of Code at a Time</h3>
          <p className="hero-description">
            Welcome to the cinematic portfolio of Archit Jain — Full Stack Developer & AI Automation Engineer
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => navigate('/browse')}>
              <span className="btn-icon">▶</span>
              Enter ArchitFlix
            </button>
            <button className="btn-secondary" onClick={() => navigate('/about')}>
              <span className="btn-icon">ℹ</span>
              More Info
            </button>
          </div>
        </div>
      </div>
      
      <div className="features-section">
        <div className="feature-card">
          <div className="feature-icon">🚀</div>
          <h3>Full Stack Excellence</h3>
          <p>Building scalable web applications with modern technologies</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🤖</div>
          <h3>AI Automation</h3>
          <p>Creating intelligent solutions with machine learning</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💡</div>
          <h3>Innovation Driven</h3>
          <p>Always exploring cutting-edge technologies</p>
        </div>
      </div>
    </div>
  );
};

export default NetflixTitle;