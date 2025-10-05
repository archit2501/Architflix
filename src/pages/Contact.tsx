import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import './Contact.css';

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      {/* Navbar */}
      <nav className="contact-nav">
        <h1 className="nav-logo" onClick={() => navigate('/')}>ARCHITFLIX</h1>
        <button className="btn-close" onClick={() => navigate('/dashboard')}>
          <FaTimes />
        </button>
      </nav>

      <div className="contact-content">
        {/* Contact Modal */}
        <motion.div
          className="contact-modal"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="modal-header">
            <h1>Get In Touch</h1>
            <p>Let's build something amazing together</p>
          </div>

          {/* Contact Info Cards */}
          <div className="contact-cards">
            <div className="contact-card">
              <FaEnvelope className="card-icon" />
              <h3>Email</h3>
              <a href="mailto:architjain2501@gmail.com">architjain2501@gmail.com</a>
            </div>
            <div className="contact-card">
              <FaLinkedin className="card-icon" />
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/architjain01/" target="_blank" rel="noopener noreferrer">
                Connect with me
              </a>
            </div>
            <div className="contact-card">
              <FaGithub className="card-icon" />
              <h3>GitHub</h3>
              <a href="https://github.com/archit2501" target="_blank" rel="noopener noreferrer">
                View my code
              </a>
            </div>
            <div className="contact-card">
              <FaMapMarkerAlt className="card-icon" />
              <h3>Location</h3>
              <p>New Delhi, India</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send a Message</h2>
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>

          {/* Success Message */}
          {showSuccess && (
            <motion.div
              className="success-message"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ✅ Message sent successfully!
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;