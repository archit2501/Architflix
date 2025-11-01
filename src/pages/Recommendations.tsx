import React from 'react';
import './Recommendations.css';
import chrisProfilePic from '../images/chris.jpg'; // Adjust the path based on your directory structure

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <div className="recommendation-header">
          <img src={chrisProfilePic} alt="Chris Smith" className="profile-pic" />
          <div>
            <h3>Chris Smith</h3>
            <p>Head of Kajima Community</p>
            <p className="date">October 24, 2024</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>✨ "I am pleased to recommend Archit Jain, who completed a valuable internship with our Machine Learning team. During his time with us, Archit demonstrated exceptional technical skills and a strong passion for artificial intelligence and machine learning."</p>
          <p>Archit showed remarkable proficiency in developing ML models, including his work on optimizing prediction accuracy which resulted in an 18% improvement. His ability to quickly grasp complex algorithms and implement them efficiently was impressive. He consistently delivered high-quality code while meeting project deadlines and showed great initiative in exploring new approaches to problem-solving."</p>
          <p>💼 "Beyond his technical capabilities, Archit demonstrated excellent collaboration skills, working effectively with cross-functional teams including data scientists, engineers, and product managers. His enthusiasm for learning, combined with his solid foundation in both Machine Learning and Full Stack Development, makes him a well-rounded developer."</p>
          <p>🌟 "I have no doubt that Archit will be a valuable addition to any organization seeking a talented developer with expertise in ML and web technologies. I wholeheartedly recommend him for any future opportunities."</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
