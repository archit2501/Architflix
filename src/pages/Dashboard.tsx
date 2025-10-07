import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPlay, FaInfoCircle, FaArrowLeft, FaFire } from 'react-icons/fa';
import './Dashboard.css';
import { projects } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const categories = [
    { title: 'Trending Now 🔥', filter: 'trending', icon: <FaFire /> },
    { title: 'AI & Automation Tools', filter: 'ai' },
    { title: 'Full Stack Applications', filter: 'fullstack' },
    { title: 'Web Development Projects', filter: 'web' },
    { title: 'Tech Experiments', filter: 'experiment' }
  ];

  const getProjectsByCategory = (category: string) => {
    if (category === 'trending') {
      return projects.filter(p => p.trending);
    }
    return projects.filter(p => p.category === category);
  };

  return (
    <div className="dashboard-container">
      {/* Netflix-style Navbar */}
      <nav className="dashboard-nav">
        <div className="nav-left">
          <h1 className="nav-logo" onClick={() => navigate('/')}>ARCHITFLIX</h1>
          <div className="nav-links">
            <span onClick={() => navigate('/dashboard')} className="active">Home</span>
            <span onClick={() => navigate('/about')}>About</span>
            <span onClick={() => navigate('/contact')}>Contact</span>
          </div>
        </div>
        <button className="btn-back" onClick={() => navigate('/')}>
          <FaArrowLeft /> Back
        </button>
      </nav>

      {/* Featured Banner */}
      <div className="featured-banner">
        <div className="banner-background">
          <video 
            className="banner-video"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="https://cdn.pixabay.com/video/2023/11/16/188877-885988423_large.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="banner-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="banner-title">AI Outfit Recommender</h2>
            <p className="banner-description">
              An intelligent fashion recommendation system powered by machine learning.
              Analyzes user preferences, weather conditions, and occasions to suggest
              the perfect outfit combinations.
            </p>
            <div className="banner-tags">
              <span className="tag">Python</span>
              <span className="tag">TensorFlow</span>
              <span className="tag">React</span>
              <span className="tag">Node.js</span>
            </div>
            <div className="banner-buttons">
              <button className="btn btn-play" onClick={() => navigate('/project/ai-outfit-recommender')}>
                <FaPlay /> View Project
              </button>
              <button className="btn btn-info">
                <FaInfoCircle /> More Info
              </button>
            </div>
          </motion.div>
        </div>
        <div className="banner-gradient"></div>
      </div>

      {/* Project Carousels */}
      <div className="carousels-section">
        {categories.map((category, idx) => {
          const categoryProjects = getProjectsByCategory(category.filter);
          if (categoryProjects.length === 0) return null;

          return (
            <motion.div
              key={idx}
              className="carousel-row"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h3 className="row-title">
                {category.icon && <span className="row-icon">{category.icon}</span>}
                {category.title}
              </h3>
              <div className="carousel-container">
                <div className="carousel-track">
                  {categoryProjects.map((project, index) => (
                    <div key={project.id} className="carousel-item">
                      <ProjectCard project={project} index={index} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
