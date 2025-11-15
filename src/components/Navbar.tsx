import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaBriefcase, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'; // Import icons
import './Navbar.css';
import blueImage from '../images/blue.png';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const profileImage = location.state?.profileImage || blueImage;
  const logoText = 'ARCHIT JAIN';

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-left">
          <Link to="/" className="navbar-logo-text">
            {logoText.split('').map((letter, index) => {
              const totalLetters = logoText.length;
              const middleIndex = (totalLetters - 1) / 2;
              const offset = index - middleIndex;

              // Reduce curve intensity for navbar (more subtle than title)
              const rotationIntensity = isMobile ? 1 : 1.5;
              const heightIntensity = isMobile ? -0.3 : -0.5;

              const rotation = offset * rotationIntensity;
              const translateY = Math.abs(offset) * heightIntensity;

              return (
                <span
                  key={index}
                  className="navbar-curved-letter"
                  style={{
                    transform: `rotateY(${rotation}deg) translateY(${translateY}px)`,
                    display: 'inline-block'
                  }}
                >
                  {letter}
                </span>
              );
            })}
          </Link>
          <ul className="navbar-links">
            <li><Link to="/browse">Home</Link></li>
            <li><Link to="/work-experience">Professional</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact-me">Hire Me</Link></li>
          </ul>
        </div>
        <div className="navbar-right">
          {/* Hamburger menu for mobile */}
          <div className="hamburger" onClick={toggleSidebar}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <img src={profileImage} alt="Profile" className="profile-icon" onClick={() => { navigate('/browse') }} />
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`} onClick={closeSidebar}></div>

      {/* Sidebar (only visible on mobile) */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-logo-text">
          {logoText.split('').map((letter, index) => {
            const totalLetters = logoText.length;
            const middleIndex = (totalLetters - 1) / 2;
            const offset = index - middleIndex;

            const rotationIntensity = 1.5;
            const heightIntensity = -0.4;

            const rotation = offset * rotationIntensity;
            const translateY = Math.abs(offset) * heightIntensity;

            return (
              <span
                key={index}
                className="navbar-curved-letter"
                style={{
                  transform: `rotateY(${rotation}deg) translateY(${translateY}px)`,
                  display: 'inline-block'
                }}
              >
                {letter}
              </span>
            );
          })}
        </div>
        <ul>
          <li><Link to="/browse" onClick={closeSidebar}><FaHome /> Home</Link></li>
          <li><Link to="/work-experience" onClick={closeSidebar}><FaBriefcase /> Professional</Link></li>
          <li><Link to="/skills" onClick={closeSidebar}><FaTools /> Skills</Link></li>
          <li><Link to="/projects" onClick={closeSidebar}><FaProjectDiagram /> Projects</Link></li>
          <li><Link to="/contact-me" onClick={closeSidebar}><FaEnvelope /> Hire Me</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
