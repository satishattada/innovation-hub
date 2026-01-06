import React from 'react';

interface FilterBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  viewMode: 'gallery' | 'list';
  setViewMode: (mode: 'gallery' | 'list') => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  showAdvancedFilters: boolean;
  setShowAdvancedFilters: (value: boolean) => void;
  activeFilterCount: number;
}

const FilterBar: React.FC<FilterBarProps> = ({
  searchTerm,
  setSearchTerm,
  viewMode,
  setViewMode,
  sortBy,
  setSortBy,
  showAdvancedFilters,
  setShowAdvancedFilters,
  activeFilterCount,
}) => {
  return (
    <div className="filter-bar">
      <div className="filter-bar-left">
        <div className="search-wrapper">
          <div className="search-input-wrapper">
            <svg
              className="search-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              placeholder="Search ideas, authors, or keywords..."
              className="modern-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                className="search-clear"
                onClick={() => setSearchTerm("")}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="filter-bar-right">
        <div className="view-mode-toggle">
          <button
            className={`view-mode-btn ${
              viewMode === "gallery" ? "active" : ""
            }`}
            onClick={() => setViewMode("gallery")}
            title="Gallery View"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </button>
          <button
            className={`view-mode-btn ${
              viewMode === "list" ? "active" : ""
            }`}
            onClick={() => setViewMode("list")}
            title="List View"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="sort-dropdown">
          <svg
            className="sort-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="m3 16 4 4 4-4"></path>
            <path d="M7 20V4"></path>
            <path d="m21 8-4-4-4 4"></path>
            <path d="M17 4v16"></path>
          </svg>
          <select
            className="modern-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="most-voted">Most Voted</option>
            <option value="least-voted">Least Voted</option>
            <option value="most-commented">Most Commented</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
        </div>

        <button
          className={`filter-toggle-btn ${
            activeFilterCount > 0 ? "active" : ""
          }`}
          onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
          <span>Filters</span>
          {activeFilterCount > 0 && (
            <span className="filter-badge">{activeFilterCount}</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
