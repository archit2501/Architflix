import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './About.css';

const About: React.FC = () => {
  const navigate = useNavigate();

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Archit_Jain_Resume.pdf';
    link.download = 'Archit_Jain_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="about-container">
      <nav className="navbar">
        <h1 className="logo" onClick={() => navigate('/dashboard')}>ARCHITFLIX</h1>
        <div className="nav-links">
          <span onClick={() => navigate('/dashboard')}>Home</span>
          <span onClick={() => navigate('/projects')}>Projects</span>
          <span onClick={() => navigate('/about')} className="active">About</span>
          <span onClick={() => navigate('/contact')}>Contact</span>
        </div>
      </nav>

      <div className="about-content">
        <div className="about-header">
          <h1 className="about-title">About Me</h1>
          <p className="about-subtitle">Full Stack Developer & AI Automation Engineer</p>
        </div>

        <div className="about-main">
          <div className="about-section">
            <h2>Who I Am</h2>
            <p>
              I'm Archit Jain, a passionate B.Tech final year student at Amity University 
              with a deep love for technology and innovation. My journey in web development 
              and AI has been driven by curiosity and the desire to create solutions that 
              make a difference.
            </p>
          </div>

          <div className="about-section">
            <h2>What I Do</h2>
            <p>
              With expertise in modern web technologies and artificial intelligence, I 
              specialize in building scalable web applications, AI-powered tools, and 
              machine learning solutions. I'm always eager to take on new challenges and 
              deliver exceptional results.
            </p>
          </div>

          <div className="about-section">
            <h2>My Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend Development</h3>
                <ul>
                  <li>React.js & Next.js</li>
                  <li>TypeScript & JavaScript</li>
                  <li>HTML5 & CSS3</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Backend Development</h3>
                <ul>
                  <li>Node.js & Express</li>
                  <li>Python & Flask</li>
                  <li>MongoDB & PostgreSQL</li>
                  <li>RESTful APIs</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>AI & Machine Learning</h3>
                <ul>
                  <li>TensorFlow & PyTorch</li>
                  <li>Natural Language Processing</li>
                  <li>OpenAI API Integration</li>
                  <li>Computer Vision</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Tools & Technologies</h3>
                <ul>
                  <li>Git & GitHub</li>
                  <li>Docker & AWS</li>
                  <li>VS Code</li>
                  <li>Postman & Figma</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Education</h2>
            <div className="education-card">
              <h3>B.Tech in Computer Science Engineering (Data Science)</h3>
              <p className="institution">Amity University, Noida</p>
              <p className="duration">2021 - 2025 (Expected)</p>
            </div>
          </div>

          <div className="about-section">
            <h2>Connect With Me</h2>
            <div className="social-links">
              <a href="https://github.com/archit2501" target="_blank" rel="noopener noreferrer" className="social-btn">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/architjain01/" target="_blank" rel="noopener noreferrer" className="social-btn">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="mailto:architjain2501@gmail.com" className="social-btn">
                <FaEnvelope /> Email
              </a>
            </div>
          </div>

          <div className="resume-section">
            <button className="download-resume-btn" onClick={handleDownloadResume}>
              <FaDownload /> Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
