import React from 'react';

const OverviewSection: React.FC = () => {
  return (
    <div className="overview-section">
      <div className="overview-content">
        <div className="overview-badge">
          <span className="badge-icon">🚀</span>
          <span className="badge-text">Enterprise Innovation Platform</span>
        </div>
        <h2 className="overview-title">Transforming Ideas Into Enterprise Solutions</h2>
        <p className="overview-description">
          Our innovation and incubation platform leverages advanced lab infrastructure, deep expertise, and a standardized operating model to enable both clients and internal teams to experiment, pilot, and industrialize emerging solutions. We serve as a catalyst for transformation, supporting strategic pursuits and strengthening long-term partnerships across EMEA.
        </p>
        <div className="overview-stats">
          <div className="stat-item">
            <div className="stat-value">50+</div>
            <div className="stat-label">Active Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">15+</div>
            <div className="stat-label">Industry Domains</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">100+</div>
            <div className="stat-label">Innovations Delivered</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">24/7</div>
            <div className="stat-label">Lab Access</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
