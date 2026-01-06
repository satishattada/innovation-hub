import React from 'react';
import { useNavigate } from 'react-router-dom';

const GetStartedSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="get-started-section">
      <h2 className="get-started-title">
        Ready to Innovate?
      </h2>
      <p className="get-started-subtitle">Join our community of innovators and turn your ideas into reality</p>
      <div className="get-started-container">
        <div className="idea-section">
          <div className="icon-placeholder">
            💡
          </div>
          <h4>Submit an Idea</h4>
          <p className="action-description">Share your innovation and get feedback from experts</p>
          <button className="action-button" onClick={() => navigate('/innovation')}>
            Get Started
          </button>
        </div>

        <div className="idea-section">
          <div className="icon-placeholder">
            📚
          </div>
          <h4>Learn Best Practices</h4>
          <p className="action-description">Access guides, templates, and success stories</p>
          <button className="action-button">
            Explore Resources
          </button>
        </div>

        <div className="idea-section">
          <div className="icon-placeholder">
            🤝
          </div>
          <h4>Collaborate</h4>
          <p className="action-description">Connect with teams and find implementation partners</p>
          <button className="action-button">
            Join Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
