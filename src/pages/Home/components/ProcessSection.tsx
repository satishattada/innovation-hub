import React from 'react';

const ProcessSection: React.FC = () => {
  return (
    <div className="process-section">
      <h2 className="section-title">How to Create & Submit Innovation Ideas</h2>
      <div className="process-steps">
        <div className="process-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Identify a Challenge</h3>
            <p>Look for pain points in your daily work, client interactions, or industry trends. What processes could be more efficient? What problems need solving?</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Research & Validate</h3>
            <p>Check if similar solutions exist. Talk to stakeholders. Understand the scope and potential impact. Gather data to support your hypothesis.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>Draft Your Proposal</h3>
            <p>Clearly articulate the problem, proposed solution, expected benefits, and required resources. Include technical feasibility and business value.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>Submit & Collaborate</h3>
            <p>Use our Innovation Hub to submit your idea. Engage with reviewers, incorporate feedback, and collaborate with teams to refine and implement.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
