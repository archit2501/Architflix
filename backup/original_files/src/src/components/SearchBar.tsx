import React, { useState, useEffect } from 'react';
import { FaSearch, FaTimes, FaFilter } from 'react-icons/fa';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: FilterOptions) => void;
  placeholder?: string;
}

export interface FilterOptions {
  category: string;
  sortBy: string;
  trending: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  onFilterChange,
  placeholder = "Search projects..."
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'all',
    sortBy: 'recent',
    trending: false
  });

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, onSearch]);

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleFilterChange = (key: keyof FilterOptions, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleResetFilters = () => {
    const resetFilters: FilterOptions = {
      category: 'all',
      sortBy: 'recent',
      trending: false
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const hasActiveFilters = filters.category !== 'all' || filters.sortBy !== 'recent' || filters.trending;

  return (
    <div className="search-bar-container">
      <div className="search-bar-wrapper">
        <div className="search-input-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search-btn" onClick={handleClearSearch} aria-label="Clear search">
              <FaTimes />
            </button>
          )}
        </div>

        <button
          className={`filter-toggle-btn ${showFilters ? 'active' : ''} ${hasActiveFilters ? 'has-filters' : ''}`}
          onClick={() => setShowFilters(!showFilters)}
          aria-label="Toggle filters"
        >
          <FaFilter />
          <span>Filters</span>
          {hasActiveFilters && <span className="filter-badge"></span>}
        </button>
      </div>

      {showFilters && (
        <div className="filters-panel">
          <div className="filter-group">
            <label className="filter-label">Category</label>
            <select
              className="filter-select"
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="ai">AI & Machine Learning</option>
              <option value="fullstack">Full Stack</option>
              <option value="web">Web Development</option>
              <option value="experiment">Experiments</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Sort By</label>
            <select
              className="filter-select"
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
            >
              <option value="recent">Most Recent</option>
              <option value="oldest">Oldest First</option>
              <option value="name">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.trending}
                onChange={(e) => handleFilterChange('trending', e.target.checked)}
              />
              <span className="checkbox-label">
                <span className="checkbox-icon"></span>
                Show Trending Only
              </span>
            </label>
          </div>

          {hasActiveFilters && (
            <button className="reset-filters-btn" onClick={handleResetFilters}>
              Reset Filters
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
