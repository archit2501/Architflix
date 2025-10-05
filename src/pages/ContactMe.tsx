import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactMe.css';

const ContactMe: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you! Your message has been received.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-container">
      <nav className="navbar">
        <h1 className="logo" onClick={() => navigate('/dashboard')}>ARCHITFLIX</h1>
        <div className="nav-links">
          <span onClick={() => navigate('/dashboard')}>Home</span>
          <span onClick={() => navigate('/skills')}>Skills</span>
          <span onClick={() => navigate('/projects')}>Projects</span>
          <span onClick={() => navigate('/about')}>About</span>
        </div>
      </nav>

      <div className="contact-content">
        <div className="contact-grid">
          <div className="contact-info">
            <h1 className="page-title">Let's Connect</h1>
            <p className="page-subtitle">
              Ready to collaborate on innovative projects or discuss opportunities? 
              I'm always excited to work on challenging problems and cutting-edge technologies.
            </p>

            <div className="profile-card">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
                alt="Archit Jain"
                className="profile-image"
              />
              <div className="profile-details">
                <h2>Archit Jain</h2>
                <p className="profile-role">Full Stack Developer & AI Automation Engineer</p>
                <p className="profile-location">📍 New Delhi, India</p>
                <p className="profile-education">🎓 B.Tech Final Year, Amity University</p>
              </div>
            </div>

            <div className="contact-methods">
              <h3>Get In Touch</h3>
              <a href="mailto:architjain2501@gmail.com" className="contact-link">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>architjain2501@gmail.com</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/architjain01/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-icon">💼</span>
                <div>
                  <h4>LinkedIn</h4>
                  <p>Connect professionally</p>
                </div>
              </a>
              <a
                href="https://github.com/archit2501"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-icon">💻</span>
                <div>
                  <h4>GitHub</h4>
                  <p>View my code</p>
                </div>
              </a>
            </div>

            <div className="availability">
              <div className="status-indicator active"></div>
              <span>Available for new opportunities</span>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;