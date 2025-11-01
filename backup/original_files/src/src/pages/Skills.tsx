import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Skills: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: '#141414', color: '#fff' }}>
      <Navbar />
      <div style={{ padding: '120px 4%', textAlign: 'center' }}>
        <h1>Skills Page</h1>
        <p>View skills on the <span onClick={() => navigate('/about')} style={{ color: '#e50914', cursor: 'pointer', textDecoration: 'underline' }}>About page</span></p>
      </div>
    </div>
  );
};

export default Skills;
