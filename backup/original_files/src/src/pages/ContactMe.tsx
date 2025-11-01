import React from 'react';
import Navbar from '../components/Navbar';

const ContactMe: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#141414', color: '#fff' }}>
      <Navbar />
      <div style={{ padding: '120px 4%', textAlign: 'center' }}>
        <h1>Contact Me - Coming Soon</h1>
        <p>Contact form will be added here.</p>
      </div>
    </div>
  );
};

export default ContactMe;
