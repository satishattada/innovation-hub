import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Idea {
  id: number;
  title: string;
  votes: number;
  comments: number;
}

interface SimilarIdeasCardProps {
  similarIdeas: Idea[];
}

const SimilarIdeasCard: React.FC<SimilarIdeasCardProps> = ({ similarIdeas }) => {
  const navigate = useNavigate();

  return (
    <div className="sidebar-card">
      <h3>Similar Innovations</h3>
      <div className="similar-ideas">
        {similarIdeas.map((similar) => (
          <div
            key={similar.id}
            className="similar-idea"
            onClick={() => navigate(`/innovation/${similar.id}`)}
          >
            <h4>{similar.title.substring(0, 50)}...</h4>
            <div className="similar-meta">
              <span>👍 {similar.votes}</span>
              <span>💬 {similar.comments}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarIdeasCard;
