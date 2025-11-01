import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft, FaSearch, FaUser } from 'react-icons/fa';
import './Navbar.css';

interface NavbarProps {
  showBackButton?: boolean;
  onBackClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ showBackButton = true, onBackClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate('/');
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-left">
        <h1 className="navbar-logo" onClick={() => navigate('/')}>
          ARCHITFLIX
        </h1>
        <div className="navbar-links">
          <span
            onClick={() => navigate('/dashboard')}
            className={isActive('/dashboard') ? 'active' : ''}
          >
            Home
          </span>
          <span
            onClick={() => navigate('/projects')}
            className={isActive('/projects') ? 'active' : ''}
          >
            Projects
          </span>
          <span
            onClick={() => navigate('/about')}
            className={isActive('/about') ? 'active' : ''}
          >
            About
          </span>
          <span
            onClick={() => navigate('/contact')}
            className={isActive('/contact') ? 'active' : ''}
          >
            Contact
          </span>
        </div>
      </div>

      <div className="navbar-right">
        <button className="navbar-icon-btn" aria-label="Search">
          <FaSearch />
        </button>
        <button className="navbar-icon-btn" aria-label="Profile">
          <FaUser />
        </button>
        {showBackButton && (
          <button className="navbar-back-btn" onClick={handleBackClick}>
            <FaArrowLeft /> Back
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
