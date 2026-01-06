import React from 'react';

interface EngagementCardProps {
  votes: number;
  comments: number;
}

const EngagementCard: React.FC<EngagementCardProps> = ({ votes, comments }) => {
  return (
    <div className="sidebar-card">
      <h3>Engagement</h3>
      <div className="engagement-stats">
        <div className="stat-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
          </svg>
          <div>
            <span className="stat-number">{votes}</span>
            <span className="stat-details-label">Votes</span>
          </div>
        </div>
        <div className="stat-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <div>
            <span className="stat-number">{comments}</span>
            <span className="stat-details-label">Comments</span>
          </div>
        </div>
      </div>
      <button className="vote-action-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
        </svg>
        Vote for this Innovation
      </button>
    </div>
  );
};

export default EngagementCard;
