import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPlay, FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import './ProjectDetail.css';
import { getProjectById, projects } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = getProjectById(id || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="project-detail-container">
        <Navbar />
        <div className="project-not-found">
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <button className="btn-primary" onClick={() => navigate('/projects')}>
            View All Projects
          </button>
        </div>
      </div>
    );
  }

  // Get related projects (same category, excluding current)
  const relatedProjects = projects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="project-detail-container">
      <Navbar />

      {/* Hero Section */}
      <div className="project-hero">
        <div className="hero-background">
          <img src={project.thumbnail} alt={project.title} />
          <div className="hero-gradient"></div>
        </div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {project.topTen && (
            <div className="top-ten-badge-large">
              <span className="rank-number">#{project.topTen}</span>
              <span className="rank-label">Top Project</span>
            </div>
          )}

          <h1 className="project-hero-title">{project.title}</h1>

          <div className="project-meta-info">
            <span className="project-year">{project.year}</span>
            <span className="project-category">{project.category.toUpperCase()}</span>
            {project.trending && (
              <span className="trending-badge-large">
                =% Trending
              </span>
            )}
          </div>

          <p className="project-hero-description">{project.shortDescription}</p>

          <div className="hero-actions">
            <button
              className="btn btn-play"
              onClick={() => project.liveUrl ? window.open(project.liveUrl, '_blank') : window.open(project.githubUrl, '_blank')}
            >
              <FaPlay /> {project.liveUrl ? 'Live Demo' : 'View Code'}
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <FaGithub /> GitHub
            </button>
            {project.liveUrl && (
              <button
                className="btn btn-secondary"
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                <FaExternalLinkAlt /> Live Site
              </button>
            )}
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="project-content">
        {/* Tech Stack Section */}
        <motion.section
          className="content-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="section-title">Tech Stack</h2>
          <div className="tech-stack-grid">
            {project.techStack.map((tech, index) => (
              <div key={index} className="tech-item">
                <span className="tech-name">{tech}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          className="content-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="section-title">About This Project</h2>
          <p className="section-text">{project.fullDescription}</p>
        </motion.section>

        {/* Features Section */}
        {project.features && project.features.length > 0 && (
          <motion.section
            className="content-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="section-title">Key Features</h2>
            <div className="features-grid">
              {project.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <FaCheckCircle className="feature-icon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Challenges Section */}
        {project.challenges && project.challenges.length > 0 && (
          <motion.section
            className="content-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="section-title">Challenges Overcome</h2>
            <ul className="challenges-list">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Learnings Section */}
        {project.learnings && project.learnings.length > 0 && (
          <motion.section
            className="content-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="section-title">What I Learned</h2>
            <ul className="learnings-list">
              {project.learnings.map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Related Projects Section */}
        {relatedProjects.length > 0 && (
          <motion.section
            className="content-section related-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="section-title">More Like This</h2>
            <div className="related-projects-grid">
              {relatedProjects.map((relatedProject, index) => (
                <ProjectCard key={relatedProject.id} project={relatedProject} index={index} />
              ))}
            </div>
          </motion.section>
        )}

        {/* Back Button */}
        <div className="back-button-container">
          <button className="btn-back-large" onClick={() => navigate(-1)}>
            <FaArrowLeft /> Back to Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
