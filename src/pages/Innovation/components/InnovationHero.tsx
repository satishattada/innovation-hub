import React from "react";

interface InnovationHeroProps {
  onSubmitClick: () => void;
}

const InnovationHero: React.FC<InnovationHeroProps> = ({ onSubmitClick }) => {
  return (
    <section className="innovation-hero">
      <div className="hero-image-container">
        <h1>Innovation Hub</h1>
        <p>
          Transform your ideas into reality. Join thousands of innovators
          driving change across our organization.
        </p>
        <button className="submit-idea-btn" onClick={onSubmitClick}>
          ✨ Submit New Idea
        </button>
      </div>
      <div className="idea-stats">
        <div className="stat-item">
          <span className="stat-item-number">247</span>
          <span className="stat-count-label">Active Ideas</span>
        </div>
        <div className="stat-item">
          <span className="stat-item-number">89</span>
          <span className="stat-count-label">Implemented</span>
        </div>
        <div className="stat-item">
          <span className="stat-item-number">12.4K</span>
          <span className="stat-count-label">Total Votes</span>
        </div>
      </div>
    </section>
  );
};

export default InnovationHero;
