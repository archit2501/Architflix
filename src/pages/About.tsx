import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaReact, FaNode, FaPython, FaDocker, FaAws, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiTensorflow, SiNextdotjs } from 'react-icons/si';
import './About.css';

const About: React.FC = () => {
  const navigate = useNavigate();

  const skills = [
    { name: 'React', icon: <FaReact />, level: 90 },
    { name: 'TypeScript', icon: <SiTypescript />, level: 85 },
    { name: 'Node.js', icon: <FaNode />, level: 90 },
    { name: 'Python', icon: <FaPython />, level: 95 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
    { name: 'PostgreSQL', icon: <SiPostgresql />, level: 80 },
    { name: 'Docker', icon: <FaDocker />, level: 75 },
    { name: 'AWS', icon: <FaAws />, level: 70 },
    { name: 'TensorFlow', icon: <SiTensorflow />, level: 85 },
    { name: 'Next.js', icon: <SiNextdotjs />, level: 88 }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Full Stack Developer & AI Engineer',
      description: 'Building intelligent automation solutions and scalable web applications',
      type: 'current'
    },
    {
      year: '2023',
      title: 'B.Tech Computer Science',
      description: 'Amity University, Noida - Final Year Student',
      type: 'education'
    },
    {
      year: '2022-2023',
      title: 'Freelance Developer',
      description: 'Developed multiple web applications and automation tools for clients',
      type: 'work'
    },
    {
      year: '2021',
      title: 'Started Development Journey',
      description: 'Began learning web development and programming fundamentals',
      type: 'milestone'
    }
  ];

  return (
    <div className="about-container">
      {/* Navbar */}
      <nav className="about-nav">
        <h1 className="nav-logo" onClick={() => navigate('/')}>ARCHITFLIX</h1>
        <div className="nav-links">
          <span onClick={() => navigate('/dashboard')}>Home</span>
          <span onClick={() => navigate('/about')} className="active">About</span>
          <span onClick={() => navigate('/contact')}>Contact</span>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.div
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-hero-content">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The Story Behind the Code
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A journey from curiosity to mastery — building the future, one line at a time.
          </motion.p>
        </div>
      </motion.div>

      {/* Bio Section */}
      <section className="bio-section">
        <motion.div
          className="bio-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>About Archit Jain</h2>
          <p>
            I'm a <strong>Full Stack Developer and AI Automation Engineer</strong> pursuing B.Tech in 
            Computer Science at Amity University, Noida. My passion lies in creating intelligent, 
            scalable solutions that bridge the gap between traditional web development and 
            cutting-edge artificial intelligence.
          </p>
          <p>
            With expertise in both frontend and backend technologies, I specialize in building 
            web applications that are not only visually stunning but also powered by smart automation. 
            From e-commerce platforms to AI-driven recommendation systems, I love tackling challenges 
            that push the boundaries of what's possible.
          </p>
          <div className="bio-stats">
            <div className="stat">
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>5+</h3>
              <p>Tech Stacks Mastered</p>
            </div>
            <div className="stat">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Tech Arsenal</h2>
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h4>{skill.name}</h4>
              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                ></motion.div>
              </div>
              <span className="skill-level">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <h2>Career Timeline</h2>
        <div className="timeline">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              className={`timeline-item ${item.type}`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Connect Section */}
      <section className="connect-section">
        <motion.div
          className="connect-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Let's Connect</h2>
          <p>Find me on these platforms</p>
          <div className="social-links">
            <a href="https://github.com/archit2501" target="_blank" rel="noopener noreferrer" className="social-btn">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/architjain01/" target="_blank" rel="noopener noreferrer" className="social-btn">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
          <button className="btn-resume" onClick={() => navigate('/contact')}>
            Download Resume
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default About;