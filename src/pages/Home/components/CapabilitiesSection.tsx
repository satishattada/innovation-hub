import React from 'react';

const CapabilitiesSection: React.FC = () => {
  return (
    <div className="capabilities-section">
      <h2 className="section-title">What We Enable</h2>
      <div className="capabilities-grid">
        <div className="capability-card">
          <div className="capability-icon">🔬</div>
          <h3>Rapid Prototyping</h3>
          <p>Accelerate experimentation across multiple domains and emerging technologies. Enable proof-of-value creation and early-stage solution validation using Infosys labs as a controlled pilot playground.</p>
          <div className="capability-features">
            <span className="feature-tag">Fast Iteration</span>
            <span className="feature-tag">Risk Mitigation</span>
            <span className="feature-tag">Proof of Concept</span>
          </div>
        </div>

        <div className="capability-card">
          <div className="capability-icon">🤝</div>
          <h3>Co-Creation Excellence</h3>
          <p>Client-led innovation pilots and collaborative rollouts. Partner with our experts to turn visionary ideas into production-ready solutions through structured co-creation frameworks.</p>
          <div className="capability-features">
            <span className="feature-tag">Client Partnership</span>
            <span className="feature-tag">Joint Development</span>
            <span className="feature-tag">Shared Success</span>
          </div>
        </div>

        <div className="capability-card">
          <div className="capability-icon">🎯</div>
          <h3>Strategic Differentiation</h3>
          <p>Internal incubation of high-potential ideas, RFP pursuit differentiation, and cross-region reuse of proven showcases and intellectual property for competitive advantage.</p>
          <div className="capability-features">
            <span className="feature-tag">Market Edge</span>
            <span className="feature-tag">IP Portfolio</span>
            <span className="feature-tag">Reusability</span>
          </div>
        </div>

        <div className="capability-card">
          <div className="capability-icon">⚡</div>
          <h3>End-to-End Support</h3>
          <p>From incubation studio to remote lab access, reusable component repositories, and IP publication support. Complete infrastructure for innovation lifecycle management.</p>
          <div className="capability-features">
            <span className="feature-tag">Full Stack</span>
            <span className="feature-tag">Lab Infrastructure</span>
            <span className="feature-tag">IP Management</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesSection;
