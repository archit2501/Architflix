// queries/getProjects.ts
import { Project } from '../types';

export async function getProjects(): Promise<Project[]> {
  return [
    {
      title: 'Insurance Brokerage Management System',
      description: 'Full-stack Insurance Brokerage Management System built with modern web technologies. Features include client management, policy tracking, claims processing, and automated commission calculations. Designed for scalability and efficiency in managing insurance operations.',
      techUsed: 'TypeScript, React, Node.js, MongoDB, Express',
      image: { url: 'https://picsum.photos/seed/insurance/400/300' },
      link: 'https://github.com/archit2501/insurance-brokerage-system'
    },
    {
      title: 'Architflix - Netflix-Style Portfolio',
      description: 'Netflix-style portfolio showcasing AI/ML and Full-Stack projects with interactive UI, profile selection, and dynamic content loading. Features include work experience timeline, skills showcase, certifications, and project galleries with smooth animations.',
      techUsed: 'TypeScript, React, React Router, CSS Animations, Responsive Design',
      image: { url: 'https://picsum.photos/seed/architflix/400/300' },
      link: 'https://github.com/archit2501/Architflix'
    },
    {
      title: 'AI Wardrobe Stylist',
      description: 'AI-powered virtual stylist for smart outfit recommendations based on wardrobe, weather, and calendar events. Developed using Python, Streamlit, and OpenCV with color and pattern analysis using K-means clustering. Integrated Google Calendar & OpenWeatherMap APIs for personalized styling.',
      techUsed: 'Python, Streamlit, OpenCV, K-means, Google Calendar API, OpenWeatherMap API',
      image: { url: 'https://picsum.photos/seed/wardrobe/400/300' },
      link: 'https://github.com/archit2501/AI-wardrobe-stylist'
    },
    {
      title: 'Enhanced Anomaly Detection System',
      description: 'Advanced Deep Learning Anomaly Detection System achieving 99.98% accuracy with multi-dataset training. Implements state-of-the-art deep learning techniques for detecting anomalies in complex datasets. Features real-time detection and comprehensive performance metrics.',
      techUsed: 'Python, TensorFlow, Keras, Deep Learning, Neural Networks',
      image: { url: 'https://picsum.photos/seed/anomaly/400/300' },
      link: 'https://github.com/archit2501/enhanced-anomaly-detection-system'
    },
    {
      title: 'AI-Powered Resume Shortlisting Tool',
      description: 'NLP-based tool that analyzes resumes and job descriptions to generate match scores using TF-IDF and cosine similarity, achieving 85% accuracy across 50+ test cases. Features PDF parsing, keyword gap analysis, and automated ranking. Reduced manual screening time by 60%.',
      techUsed: 'Python, spaCy, scikit-learn, Flask, TF-IDF, NLP',
      image: { url: 'https://picsum.photos/seed/resume/400/300' },
      link: 'https://github.com/archit2501/resume-shortlisting-tool'
    },
    {
      title: 'SmartBin - Waste Classification',
      description: 'Smart waste management system using computer vision and machine learning to classify waste materials. Helps automate waste sorting and promotes environmental sustainability through intelligent bin systems.',
      techUsed: 'Python, Computer Vision, Machine Learning, OpenCV',
      image: { url: 'https://picsum.photos/seed/smartbin/400/300' },
      link: 'https://github.com/archit2501/Smartbin-WBC'
    },
    {
      title: 'SmartBlog AI',
      description: 'AI-powered blogging platform with intelligent content generation, recommendation system, and natural language processing capabilities. Features automated content suggestions and smart categorization.',
      techUsed: 'JavaScript, Node.js, AI/ML APIs, Natural Language Processing',
      image: { url: 'https://picsum.photos/seed/smartblog/400/300' },
      link: 'https://github.com/archit2501/smartblog-AI'
    },
    {
      title: 'File Encryption & Decryption Tool',
      description: 'Cross-platform encryption application utilizing PyCryptodome, integrating AES, DES, and Caesar Cipher algorithms for secure file encryption and decryption. Features secure key management protocols and file integrity verification.',
      techUsed: 'Python, PyCryptodome, AES, DES, Cryptography',
      image: { url: 'https://picsum.photos/seed/crypto/400/300' },
      link: 'https://github.com/archit2501/File-Encryption-and-Decryption-tool-using-Python-'
    },
    {
      title: 'Movie Genre Classification from Posters',
      description: 'Machine learning model for multi-label genre classification of movies from their poster images using Convolutional Neural Networks (CNNs). Implements computer vision and deep learning techniques for accurate genre prediction.',
      techUsed: 'Python, TensorFlow, Keras, CNN, Computer Vision',
      image: { url: 'https://picsum.photos/seed/movies/400/300' },
      link: 'https://github.com/archit2501/-Movie-Genres-Classification-from-their-Poster-Image-using-CNNs'
    },
    {
      title: 'Professional Portfolio Website',
      description: 'Clean and professional portfolio website showcasing web development and AI projects. Features responsive design, project galleries, skills showcase, and contact forms.',
      techUsed: 'HTML, CSS, JavaScript, Responsive Design',
      image: { url: 'https://picsum.photos/seed/portfolio/400/300' },
      link: 'https://github.com/archit2501/portfolio-website'
    }
  ];
}
