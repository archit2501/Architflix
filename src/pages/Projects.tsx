import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "AI Outfit Recommender",
    description: "An intelligent fashion recommendation system powered by machine learning. Analyzes user preferences, weather conditions, and occasions to suggest the perfect outfit combinations.",
    techStack: ["Python", "TensorFlow", "React", "Node.js"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
    category: "AI/ML",
    rank: 1
  },
  {
    id: 2,
    title: "AI Resume Shortlisting Tool",
    description: "Automated resume screening system using NLP and machine learning to match candidates with job requirements, saving hours of manual review time.",
    techStack: ["Python", "OpenAI API", "NLP", "React"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop",
    category: "AI/ML",
    rank: 2
  },
  {
    id: 3,
    title: "Smart Blog AI",
    description: "Intelligent blog content generation platform that helps creators produce engaging, SEO-optimized articles using advanced AI technology.",
    techStack: ["Node.js", "OpenAI API", "React", "MongoDB"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop",
    category: "Web App",
    rank: 3
  }
];

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="projects-container">
      <nav className="navbar">
        <h1 className="logo" onClick={() => navigate('/dashboard')}>ARCHITFLIX</h1>
        <div className="nav-links">
          <span onClick={() => navigate('/dashboard')}>Home</span>
          <span onClick={() => navigate('/skills')}>Skills</span>
          <span onClick={() => navigate('/about')}>About</span>
          <span onClick={() => navigate('/contact')}>Contact</span>
        </div>
      </nav>

      <div className="projects-content">
        <div className="projects-header">
          <h1 className="page-title">Top 3 Projects 🏆</h1>
          <p className="page-subtitle">
            Showcasing my best work in AI/ML and Full-Stack Development
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <div className="rank-badge">#{project.rank}</div>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button className="view-btn">View Project</button>
                </div>
              </div>
              <div className="project-info">
                <div className="category-tag">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, index) => (
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
