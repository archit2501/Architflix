import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import Navbar from '../components/Navbar';
import { getTopTenProjects } from '../data/projectsData';

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const topProjects = getTopTenProjects();

  return (
    <div className="projects-container">
      <Navbar />

      <div className="projects-content">
        <div className="projects-header">
          <h1 className="page-title">Top 3 Projects 🏆</h1>
          <p className="page-subtitle">
            Showcasing my best work in AI/ML and Full-Stack Development
          </p>
        </div>

        <div className="projects-grid">
          {topProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <div className="rank-badge">#{project.topTen}</div>
              <div className="project-image">
                <img src={project.thumbnail} alt={project.title} />
                <div className="project-overlay">
                  <button className="view-btn">View on GitHub</button>
                </div>
              </div>
              <div className="project-info">
                <div className="category-tag">{project.category.toUpperCase()}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.shortDescription}</p>
                <div className="tech-stack">
                  {project.techStack.slice(0, 4).map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
