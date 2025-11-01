import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPlay, FaInfoCircle, FaFire } from 'react-icons/fa';
import './Dashboard.css';
import { projects } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import SearchBar, { FilterOptions } from '../components/SearchBar';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'all',
    sortBy: 'recent',
    trending: false
  });

  const categories = [
    { title: 'Trending Now 🔥', filter: 'trending', icon: <FaFire /> },
    { title: 'AI & Automation Tools', filter: 'ai' },
    { title: 'Full Stack Applications', filter: 'fullstack' },
    { title: 'Web Development Projects', filter: 'web' },
    { title: 'Tech Experiments', filter: 'experiment' }
  ];

  // Filter and search projects
  const filteredProjects = useMemo(() => {
    let result = [...projects];

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        p.techStack.some(tech => tech.toLowerCase().includes(query))
      );
    }

    // Apply category filter
    if (filters.category !== 'all') {
      result = result.filter(p => p.category === filters.category);
    }

    // Apply trending filter
    if (filters.trending) {
      result = result.filter(p => p.trending);
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'recent':
        result.sort((a, b) => b.year - a.year);
        break;
      case 'oldest':
        result.sort((a, b) => a.year - b.year);
        break;
      case 'name':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name-desc':
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    return result;
  }, [searchQuery, filters]);

  const getProjectsByCategory = (category: string) => {
    if (category === 'trending') {
      return filteredProjects.filter(p => p.trending);
    }
    return filteredProjects.filter(p => p.category === category);
  };

  const hasSearchOrFilters = searchQuery || filters.category !== 'all' || filters.trending || filters.sortBy !== 'recent';

  return (
    <div className="dashboard-container">
      {/* Netflix-style Navbar */}
      <Navbar />

      {/* Featured Banner */}
      <div className="featured-banner">
        <div className="banner-background">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80" 
            alt="Tech Background" 
            className="banner-gif"
            loading="eager"
          />
        </div>
        <div className="banner-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="banner-title">AI Outfit Recommender</h2>
            <p className="banner-description">
              An intelligent fashion recommendation system powered by machine learning.
              Analyzes user preferences, weather conditions, and occasions to suggest
              the perfect outfit combinations.
            </p>
            <div className="banner-tags">
              <span className="tag">Python</span>
              <span className="tag">TensorFlow</span>
              <span className="tag">React</span>
              <span className="tag">Node.js</span>
            </div>
            <div className="banner-buttons">
              <button className="btn btn-play" onClick={() => navigate('/project/ai-outfit-recommender')}>
                <FaPlay /> View Project
              </button>
              <button className="btn btn-info">
                <FaInfoCircle /> More Info
              </button>
            </div>
          </motion.div>
        </div>
        <div className="banner-gradient"></div>
      </div>

      {/* Search and Filter */}
      <div className="search-section">
        <SearchBar
          onSearch={setSearchQuery}
          onFilterChange={setFilters}
          placeholder="Search projects by name, description, or tech stack..."
        />
      </div>

      {/* Project Carousels or Search Results */}
      <div className="carousels-section">
        {hasSearchOrFilters ? (
          // Show all filtered results in a grid
          <motion.div
            className="search-results"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="results-title">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'Result' : 'Results'} Found
            </h3>
            {filteredProjects.length > 0 ? (
              <div className="results-grid">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <h3>No projects found</h3>
                <p>Try adjusting your search or filters</p>
              </div>
            )}
          </motion.div>
        ) : (
          // Show categorized carousels
          categories.map((category, idx) => {
            const categoryProjects = getProjectsByCategory(category.filter);
            if (categoryProjects.length === 0) return null;

            return (
              <motion.div
                key={idx}
                className="carousel-row"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <h3 className="row-title">
                  {category.icon && <span className="row-icon">{category.icon}</span>}
                  {category.title}
                </h3>
                <div className="carousel-container">
                  <div className="carousel-track">
                    {categoryProjects.map((project, index) => (
                      <div key={project.id} className="carousel-item">
                        <ProjectCard project={project} index={index} />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Dashboard;
