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
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  const [previewLoaded, setPreviewLoaded] = useState(false);

  const handleClick = () => {
    navigate(`/project/${project.id}`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="project-card-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {project.topTen && (
        <div className="top-ten-badge">
          <span className="top-ten-number">{project.topTen}</span>
        </div>
      )}

      <div className="project-card-image">
        {/* Thumbnail Image - Always present */}
        <img
          src={project.thumbnail}
          alt={project.title}
          onLoad={() => setThumbnailLoaded(true)}
          className={`project-image-layer thumbnail ${thumbnailLoaded ? 'loaded' : ''} ${isHovered && project.videoPreview ? 'hidden' : ''}`}
        />

        {/* Preview Image - Shows on hover if available */}
        {project.videoPreview && (
          <img
            src={project.videoPreview}
            alt={`${project.title} preview`}
            onLoad={() => setPreviewLoaded(true)}
            className={`project-image-layer preview ${previewLoaded ? 'loaded' : ''} ${isHovered ? 'visible' : ''}`}
          />
        )}

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