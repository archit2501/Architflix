import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';
import './Hero.css';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      {/* Netflix-style Background Video Effect */}
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      {/* ArchitFlix Logo */}
      <motion.div
        className="hero-logo"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>ARCHITFLIX</h1>
      </motion.div>

      {/* Main Hero Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="hero-text">
          <h2 className="hero-title">Archit Jain</h2>
          <h3 className="hero-subtitle">Full Stack Developer & AI Automation Engineer</h3>
          <p className="hero-description">
            Welcome to ArchitFlix — where innovation meets code. 
            Explore my portfolio of web development and AI automation projects, 
            crafted with cutting-edge technologies.
          </p>

          <div className="hero-buttons">
            <button
              className="btn btn-play"
              onClick={() => navigate('/dashboard')}
            >
              <FaPlay /> View Projects
            </button>
            <button
              className="btn btn-info"
              onClick={() => navigate('/about')}
            >
              <FaInfoCircle /> About Me
            </button>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </div>
  );
};

export default Hero;