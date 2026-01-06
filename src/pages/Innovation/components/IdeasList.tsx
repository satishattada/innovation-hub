import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Idea {
  id: number;
  title: string;
  description: string;
  author: string;
  votes: number;
  comments: number;
  status: string;
  tags: string[];
  priority: string;
  category: string;
  submittedDate: string;
}

interface IdeasListProps {
  ideas: Idea[];
  getStatusClass: (status: string) => string;
  getPriorityColor: (priority: string) => string;
}

const IdeasList: React.FC<IdeasListProps> = ({ ideas, getStatusClass, getPriorityColor }) => {
  const navigate = useNavigate();

  return (
    <div className="ideas-list">
      {ideas.map((idea) => (
        <div
          key={idea.id}
          className="idea-list-item"
          onClick={() => navigate(`/innovation/${idea.id}`)}
          style={{ cursor: 'pointer' }}
        >
          <div className="list-item-main">
            <div className="list-item-left">
              <div className="list-item-header">
                <h3 className="list-item-title">
                  {idea.title.length > 50
                    ? idea.title.substring(0, 50) + '...'
                    : idea.title}
                </h3>
                <span className={`idea-status ${getStatusClass(idea.status)}`}>
                  {idea.status}
                </span>
              </div>
              <p className="list-item-description">
                {idea.description.substring(0, 150)}...
              </p>
              <div className="list-item-meta">
                <span className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  {idea.author}
                </span>
                <span className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  {new Date(idea.submittedDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
                <span className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                  </svg>
                  {idea.category}
                </span>
              </div>
              <div className="list-item-tags">
                <span
                  className="tag-compact priority-tag"
                  style={{
                    backgroundColor: `${getPriorityColor(idea.priority)}20`,
                    color: getPriorityColor(idea.priority),
                    borderColor: getPriorityColor(idea.priority),
                  }}
                >
                  {idea.priority}
                </span>
                {idea.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="tag-compact">
                    {tag}
                  </span>
                ))}
                {idea.tags.length > 3 && (
                  <span className="tag-compact tag-more">
                    +{idea.tags.length - 3}
                  </span>
                )}
              </div>
            </div>
            <div className="list-item-right">
              <div className="list-item-stats">
                <div className="stat-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                  </svg>
                  <div className="stat-content">
                    <span className="stat-number">{idea.votes}</span>
                    <span className="stat-label">Votes</span>
                  </div>
                </div>
                <div className="stat-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <div className="stat-content">
                    <span className="stat-number">{idea.comments}</span>
                    <span className="stat-label">Comments</span>
                  </div>
                </div>
              </div>
              <button className="list-vote-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
                Vote
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IdeasList;
