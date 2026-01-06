import React from 'react';

const PartnersSection: React.FC = () => {
  return (
    <div className="partners-section">
      <h2 className="section-title">Trusted By Industry Leaders</h2>
      <div className="partners-grid">
        <div className="partner-category">
          <div className="partner-icon">🛒</div>
          <h3>Retail & Consumer</h3>
          <div className="partner-logos">
            <div className="partner-logo">Musgrave</div>
            <div className="partner-logo">Unilever</div>
          </div>
        </div>

        <div className="partner-category">
          <div className="partner-icon">💰</div>
          <h3>Financial Services</h3>
          <div className="partner-logos">
            <div className="partner-logo">Danke</div>
            <div className="partner-logo">HSBC</div>
            <div className="partner-logo">Metro Bank</div>
          </div>
        </div>

        <div className="partner-category">
          <div className="partner-icon">📡</div>
          <h3>Telecommunications</h3>
          <div className="partner-logos">
            <div className="partner-logo">British Telecom</div>
          </div>
        </div>

        <div className="partner-category">
          <div className="partner-icon">⚡</div>
          <h3>Energy & Utilities</h3>
          <div className="partner-logos">
            <div className="partner-logo">bp</div>
            <div className="partner-logo">E.ON</div>
          </div>
        </div>

        <div className="partner-category">
          <div className="partner-icon">🏛️</div>
          <h3>Government & Public Sector</h3>
          <div className="partner-logos">
            <div className="partner-logo">NHS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
