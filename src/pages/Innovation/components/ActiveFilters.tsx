import React from 'react';

interface ActiveFiltersProps {
  searchTerm: string;
  selectedCategory: string;
  selectedStatus: string;
  selectedPriority: string;
  dateRange: string;
  minVotes: number;
  onRemoveFilter: (filterType: string) => void;
  onClearAll: () => void;
}

const ActiveFilters: React.FC<ActiveFiltersProps> = ({
  searchTerm,
  selectedCategory,
  selectedStatus,
  selectedPriority,
  dateRange,
  minVotes,
  onRemoveFilter,
  onClearAll,
}) => {
  const hasActiveFilters =
    searchTerm ||
    selectedCategory !== 'all' ||
    selectedStatus !== 'all' ||
    selectedPriority !== 'all' ||
    dateRange !== 'all' ||
    minVotes > 0;

  if (!hasActiveFilters) return null;

  return (
    <div className="active-filters-banner">
      <div className="active-filters-content">
        <div className="active-filters-label">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
          <span>Active filters</span>
        </div>
        <div className="active-filter-chips">
          {searchTerm && (
            <div className="filter-chip-modern">
              <span>Search: "{searchTerm}"</span>
              <button onClick={() => onRemoveFilter('search')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          )}
          {selectedCategory !== 'all' && (
            <div className="filter-chip-modern">
              <span>Category: {selectedCategory}</span>
              <button onClick={() => onRemoveFilter('category')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          )}
          {selectedStatus !== 'all' && (
            <div className="filter-chip-modern">
              <span>Status: {selectedStatus}</span>
              <button onClick={() => onRemoveFilter('status')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          )}
          {selectedPriority !== 'all' && (
            <div className="filter-chip-modern">
              <span>Priority: {selectedPriority}</span>
              <button onClick={() => onRemoveFilter('priority')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          )}
          {dateRange !== 'all' && (
            <div className="filter-chip-modern">
              <span>Date: {dateRange}</span>
              <button onClick={() => onRemoveFilter('date')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          )}
          {minVotes > 0 && (
            <div className="filter-chip-modern">
              <span>Min Votes: {minVotes}</span>
              <button onClick={() => onRemoveFilter('votes')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          )}
        </div>
        <button className="clear-all-filters" onClick={onClearAll}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
          </svg>
          <span>Clear all</span>
        </button>
      </div>
    </div>
  );
};

export default ActiveFilters;
