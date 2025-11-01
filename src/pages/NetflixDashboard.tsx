import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPlay, FaInfoCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './NetflixDashboard.css';
import { projects } from '../data/projectsData';
import Navbar from '../components/Navbar';

const NetflixDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Featured project (first trending project)
  const featuredProject = projects.find(p => p.trending) || projects[0];

  // Category rows
  const categories = [
    { title: 'Trending Now', projects: projects.filter(p => p.trending) },
    { title: 'AI & Machine Learning', projects: projects.filter(p => p.category === 'ai') },
    { title: 'Full Stack Applications', projects: projects.filter(p => p.category === 'fullstack') },
    { title: 'Web Development', projects: projects.filter(p => p.category === 'web') },
    { title: 'Recent Projects', projects: [...projects].sort((a, b) => b.year - a.year).slice(0, 6) },
  ];

  const ScrollRow: React.FC<{ category: { title: string; projects: typeof projects } }> = ({ category }) => {
    const rowRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const scroll = (direction: 'left' | 'right') => {
      if (rowRef.current) {
        const scrollAmount = direction === 'left' ? -600 : 600;
        rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };

    const handleScroll = () => {
      if (rowRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    useEffect(() => {
      const rowElement = rowRef.current;
      if (rowElement) {
        rowElement.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => rowElement.removeEventListener('scroll', handleScroll);
      }
    }, []);

    if (category.projects.length === 0) return null;

    return (
      <div className="netflix-row">
        <h3 className="row-title">{category.title}</h3>
        <div className="row-container">
          {showLeftArrow && (
            <button className="scroll-arrow scroll-arrow-left" onClick={() => scroll('left')}>
              <FaChevronLeft />
            </button>
          )}
          <div className="row-content" ref={rowRef}>
            {category.projects.map((project) => (
              <motion.div
                key={project.id}
                className="netflix-card"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ duration: 0.3 }}
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <div className="card-image-container">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="card-image"
                  />
                  {project.videoPreview && hoveredProject === project.id && (
                    <img
                      src={project.videoPreview}
                      alt={project.title}
                      className="card-image-preview"
                    />
                  )}
                  {project.topTen && (
                    <div className="top-ten-badge">
                      <span className="top-ten-number">{project.topTen}</span>
                    </div>
                  )}
                </div>
                <div className="card-info">
                  <div className="card-info-header">
                    <h4 className="card-title">{project.title}</h4>
                    <div className="card-actions">
                      <button className="card-button card-play">
                        <FaPlay />
                      </button>
                      <button className="card-button card-more">
                        <FaInfoCircle />
                      </button>
                    </div>
                  </div>
                  <div className="card-tags">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="card-tag">{tech}</span>
                    ))}
                  </div>
                  <p className="card-description">{project.shortDescription}</p>
                </div>
              </motion.div>
            ))}
          </div>
          {showRightArrow && (
            <button className="scroll-arrow scroll-arrow-right" onClick={() => scroll('right')}>
              <FaChevronRight />
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="netflix-dashboard">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        className="netflix-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-background">
          <img
            src={featuredProject.thumbnail}
            alt={featuredProject.title}
            className="hero-image"
          />
          <div className="hero-gradient" />
        </div>

        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {featuredProject.title}
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {featuredProject.fullDescription}
          </motion.p>

          <motion.div
            className="hero-tech-stack"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {featuredProject.techStack.slice(0, 5).map((tech, idx) => (
              <span key={idx} className="hero-tech">{tech}</span>
            ))}
          </motion.div>

          <motion.div
            className="hero-buttons"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <button
              className="hero-button hero-play"
              onClick={() => navigate(`/project/${featuredProject.id}`)}
            >
              <FaPlay /> View Project
            </button>
            <button className="hero-button hero-info">
              <FaInfoCircle /> More Info
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Project Rows */}
      <div className="netflix-rows">
        {categories.map((category, index) => (
          <ScrollRow key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default NetflixDashboard;
