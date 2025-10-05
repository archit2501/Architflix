import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContinueWatching.css';

interface ContentItem {
  title: string;
  description: string;
  image: string;
  progress: number;
  path: string;
}

const continueWatchingContent: ContentItem[] = [
  {
    title: "AI Outfit Recommender",
    description: "AI-powered fashion recommendation system",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=225&fit=crop",
    progress: 75,
    path: "/projects"
  },
  {
    title: "Full Stack Mastery",
    description: "Modern web development journey",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=225&fit=crop",
    progress: 60,
    path: "/dashboard"
  },
  {
    title: "AI Automation Suite",
    description: "Machine learning solutions",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=225&fit=crop",
    progress: 85,
    path: "/projects"
  }
];

const ContinueWatching: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="continue-watching-section">
      <h2 className="section-title">Continue Watching</h2>
      <div className="content-row">
        {continueWatchingContent.map((item, index) => (
          <div
            key={index}
            className="content-card"
            onClick={() => navigate(item.path)}
          >
            <div className="content-image">
              <img src={item.image} alt={item.title} />
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
            <div className="content-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;