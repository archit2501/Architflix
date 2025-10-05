import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Skills.css';

const skills = [
  { name: "React", category: "Frontend", icon: "⚛️", level: 90 },
  { name: "TypeScript", category: "Language", icon: "🔷", level: 85 },
  { name: "Node.js", category: "Backend", icon: "🟢", level: 88 },
  { name: "Python", category: "Language", icon: "🐍", level: 92 },
  { name: "AI/ML", category: "Specialization", icon: "🤖", level: 85 },
  { name: "MongoDB", category: "Database", icon: "🍃", level: 80 },
  { name: "Express.js", category: "Backend", icon: "🚄", level: 87 },
  { name: "Next.js", category: "Framework", icon: "▲", level: 83 },
  { name: "TensorFlow", category: "AI/ML", icon: "🧠", level: 78 },
  { name: "Docker", category: "DevOps", icon: "🐳", level: 75 },
  { name: "AWS", category: "Cloud", icon: "☁️", level: 82 },
  { name: "Git", category: "Tools", icon: "📝", level: 95 }
];

const Skills: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="skills-container">
      <nav className="navbar">
        <h1 className="logo" onClick={() => navigate('/dashboard')}>ARCHITFLIX</h1>
        <div className="nav-links">
          <span onClick={() => navigate('/dashboard')}>Home</span>
          <span onClick={() => navigate('/projects')}>Projects</span>
          <span onClick={() => navigate('/about')}>About</span>
          <span onClick={() => navigate('/contact')}>Contact</span>
        </div>
      </nav>

      <div className="skills-content">
        <div className="skills-header">
          <h1 className="page-title">Technical Arsenal</h1>
          <p className="page-subtitle">
            A showcase of technologies and tools I use to build exceptional digital experiences
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-category">{skill.category}</p>
              <div className="skill-meter">
                <div
                  className="skill-meter-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          ))}
        </div>

        <div className="education-section">
          <h2>Education & Background</h2>
          <div className="education-card">
            <h3>B.Tech in Computer Science</h3>
            <p className="edu-institution">Amity University, Noida</p>
            <p className="edu-status">Final Year Student</p>
            <p className="edu-description">
              Specializing in Full Stack Development and AI Automation with a passion for 
              building scalable, intelligent systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;