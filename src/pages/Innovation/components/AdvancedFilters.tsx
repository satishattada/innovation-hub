import React from 'react';

interface AdvancedFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  selectedStatus: string;
  setSelectedStatus: (value: string) => void;
  selectedPriority: string;
  setSelectedPriority: (value: string) => void;
  dateRange: string;
  setDateRange: (value: string) => void;
  minVotes: number;
  setMinVotes: (value: number) => void;
}

const AdvancedFilters: React.FC<AdvancedFiltersProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedStatus,
  setSelectedStatus,
  selectedPriority,
  setSelectedPriority,
  dateRange,
  setDateRange,
  minVotes,
  setMinVotes,
}) => {
  return (
    <div className="advanced-filters-container">
      <div className="advanced-filters-header">
        <h3>Advanced Filters</h3>
        <p>Refine your search with specific criteria</p>
      </div>

      <div className="advanced-filters-grid">
        <div className="filter-card">
          <div className="filter-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
          </div>
          <div className="filter-card-content">
            <label className="filter-label">Category</label>
            <select
              className="filter-select-modern"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="Technology">Technology</option>
              <option value="Sustainability">Sustainability</option>
              <option value="Productivity">Productivity</option>
              <option value="HR">HR</option>
              <option value="Operations">Operations</option>
              <option value="Customer Experience">Customer Experience</option>
            </select>
          </div>
        </div>

        <div className="filter-card">
          <div className="filter-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
          </div>
          <div className="filter-card-content">
            <label className="filter-label">Status</label>
            <select
              className="filter-select-modern"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="open">Open</option>
              <option value="review">Under Review</option>
              <option value="approved">Approved</option>
              <option value="implemented">Implemented</option>
            </select>
          </div>
        </div>

        <div className="filter-card">
          <div className="filter-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
          </div>
          <div className="filter-card-content">
            <label className="filter-label">Priority</label>
            <select
              className="filter-select-modern"
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
            >
              <option value="all">All Priorities</option>
              <option value="Critical">Critical</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
            </select>
          </div>
        </div>

        <div className="filter-card">
          <div className="filter-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <div className="filter-card-content">
            <label className="filter-label">Date Range</label>
            <select
              className="filter-select-modern"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
            </select>
          </div>
        </div>

        <div className="filter-card">
          <div className="filter-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>
          </div>
          <div className="filter-card-content">
            <label className="filter-label">Minimum Votes</label>
            <input
              type="number"
              min="0"
              className="filter-input-modern"
              value={minVotes}
              onChange={(e) => setMinVotes(Number(e.target.value))}
              placeholder="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedFilters;
