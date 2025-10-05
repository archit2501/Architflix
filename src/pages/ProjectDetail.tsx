import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPlay, FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import './ProjectDetail.css';
import { projects } from '../data/projectsData';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="project-not-found">
        <h1>Project Not Found</h1>
        <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
      </div>
    );
  }

  const relatedProjects = projects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="project-detail-container">
      {/* Navbar */}
      <nav className="detail-nav">
        <div className="nav-left">
          <button className="btn-back" onClick={() => navigate('/dashboard')}>
            <FaArrowLeft /> Back
          </button>
          <h1 className="nav-logo" onClick={() => navigate('/')}>ARCHITFLIX</h1>
        </div>
      </nav>

      {/* Hero Banner */}
      <motion.div
        className="detail-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ backgroundImage: `url(${project.bannerImage})` }}
      >
        <div className="hero-overlay"></div>
        <motion.div
          className="hero-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="project-meta">
            <span className="year-badge">{project.year}</span>
            <span className="category-badge">{project.category.toUpperCase()}</span>
          </div>
          <h1 className="project-title">{project.title}</h1>
          <p className="project-short-desc">{project.shortDescription}</p>
          <div className="hero-buttons">
            {project.demo && (
              <button className="btn btn-play">
                <FaPlay /> View Demo
              </button>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-github">
                <FaGithub /> View Code
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Project Details */}
      <div className="detail-content">
        {/* Description Section */}
        <motion.section
          className="description-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>About This Project</h2>
          <p>{project.fullDescription}</p>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section
          className="tech-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Technology Stack</h2>
          <div className="tech-grid">
            {project.techStack.map((tech, idx) => (
              <motion.div
                key={idx}
                className="tech-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * idx }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="features-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Key Features</h2>
          <div className="features-grid">
            {project.features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
              >
                <FaCheckCircle className="feature-icon" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <motion.section
            className="related-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2>More Like This</h2>
            <div className="related-grid">
              {relatedProjects.map((relatedProject) => (
                <motion.div
                  key={relatedProject.id}
                  className="related-card"
                  onClick={() => navigate(`/project/${relatedProject.id}`)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={relatedProject.thumbnail} alt={relatedProject.title} />
                  <div className="related-info">
                    <h4>{relatedProject.title}</h4>
                    <p>{relatedProject.shortDescription}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;