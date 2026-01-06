import React from 'react';
import { useNavigate } from 'react-router-dom';
import demoImage from '../../../../public/assets/demos.png';

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
}

interface IdeasGridProps {
  ideas: Idea[];
  getStatusClass: (status: string) => string;
  getPriorityColor: (priority: string) => string;
}

const IdeasGrid: React.FC<IdeasGridProps> = ({ ideas, getStatusClass, getPriorityColor }) => {
  const navigate = useNavigate();

  return (
    <div className="ideas-grid">
      {ideas.map((idea) => (
        <div
          key={idea.id}
          className="idea-card"
          onClick={() => navigate(`/innovation/${idea.id}`)}
          style={{ cursor: 'pointer' }}
        >
          <div className="idea-content">
            <div className="idea-header-section">
              <h3 className="idea-title">
                {idea.title.length > 40
                  ? idea.title.substring(0, 40) + '...'
                  : idea.title}
              </h3>
              <span className={`idea-status ${getStatusClass(idea.status)}`}>
                {idea.status}
              </span>
            </div>

            <div className="idea-image-container">
              <img
                src={demoImage}
                alt={idea.title}
                className="idea-image"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/assets/placeholder.jpg';
                }}
              />
            </div>

            <div className="innovation-content">
              <div className="idea-meta">
                <div className="idea-author">👤 {idea.author}</div>
                <div className="idea-votes">👍 {idea.votes} votes</div>
              </div>

              <p className="idea-description">
                {idea.description.substring(0, 120)}...
              </p>

              <div className="idea-tags">
                <span
                  className="tag"
                  style={{
                    background: `linear-gradient(135deg, ${getPriorityColor(
                      idea.priority
                    )}20, ${getPriorityColor(idea.priority)}40)`,
                    color: getPriorityColor(idea.priority),
                    borderColor: getPriorityColor(idea.priority),
                  }}
                >
                  {idea.priority}
                </span>
                {idea.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
                {idea.tags.length > 2 && (
                  <span className="tag tag-more">+{idea.tags.length - 2}</span>
                )}
              </div>

              <div className="idea-actions">
                <button className="vote-btn">👍 Vote</button>
                <a href="#" className="comment-btn">
                  💬 {idea.comments}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IdeasGrid;
