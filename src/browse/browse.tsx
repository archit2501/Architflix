import React from 'react';
import { useNavigate } from 'react-router-dom';
import './browse.css';

interface Profile {
  name: string;
  avatar: string;
  path: string;
  description: string;
  color: string;
}

const profiles: Profile[] = [
  {
    name: "Developer",
    avatar: "/avatars/developer.jpg",
    path: "/dashboard",
    description: "Explore my technical journey",
    color: "#6B7280"
  },
  {
    name: "Creator",
    avatar: "/avatars/creator.jpg",
    path: "/projects",
    description: "View my creative projects",
    color: "#EF4444"
  },
  {
    name: "Professional",
    avatar: "/avatars/professional.jpg",
    path: "/about",
    description: "Learn about my experience",
    color: "#06B6D4"
  },
  {
    name: "Innovator",
    avatar: "/avatars/innovator.jpg",
    path: "/contact",
    description: "Get in touch",
    color: "#F59E0B"
  }
];

const Browse: React.FC = () => {
  const navigate = useNavigate();

  const handleProfileClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="browse-container">
      <div className="browse-header">
        <h1 className="browse-title">Who's Watching?</h1>
        <p className="browse-subtitle">Select a profile to explore ArchitFlix</p>
      </div>
      
      <div className="profiles-grid">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="profile-card"
            onClick={() => handleProfileClick(profile.path)}
          >
            <div className="profile-avatar">
              <img src={profile.avatar} alt={profile.name} className="avatar-image" />
              <div className="profile-overlay">
                <span className="profile-icon">▶</span>
              </div>
            </div>
            <h3 className="profile-name">{profile.name}</h3>
            <p className="profile-description">{profile.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;