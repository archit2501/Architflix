import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Project } from '../data/projectsData';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div
      className="project-card-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {project.topTen && (
        <div className="top-ten-badge">
          <span className="top-ten-number">{project.topTen}</span>
        </div>
      )}
      
      <div className="project-card-image">
        <img
          src={isHovered && project.videoPreview ? project.videoPreview : project.thumbnail}
          alt={project.title}
          onLoad={() => setImageLoaded(true)}
          className={imageLoaded ? 'loaded' : ''}
        />
        
        {project.trending && (
          <div className="trending-badge">
            🔥 Trending
          </div>
        )}
      </div>
      
      <div className="project-card-info">
        <h3 className="project-card-title">{project.title}</h3>
        <div className="project-meta">
          <span className="year">{project.year}</span>
          <span className="category">{project.category.toUpperCase()}</span>
        </div>
        <p className="project-card-description">{project.shortDescription}</p>
        <div className="tech-pills">
          {project.techStack.slice(0, 3).map((tech, idx) => (
            <span key={idx} className="tech-pill">{tech}</span>
          ))}
          {project.techStack.length > 3 && (
            <span className="tech-pill more">+{project.techStack.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;