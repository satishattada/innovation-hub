import React from 'react';

const ShowcaseSection: React.FC = () => {
  return (
    <div className="showcase-section">
      <h2 className="section-title">Featured Innovations: From Idea to Reality</h2>
      <div className="showcase-grid">
        <div className="showcase-card">
          <div className="showcase-header ai">
            <span className="showcase-icon">🤖</span>
            <span className="showcase-badge">Implemented</span>
          </div>
          <h3>AI-Powered Code Review Assistant</h3>
          <p className="showcase-description">
            Automated code quality analysis using machine learning to detect bugs, security vulnerabilities, and suggest optimizations. Reduced review time by 40%.
          </p>
          <div className="showcase-metrics">
            <div className="metric">
              <span className="metric-value">40%</span>
              <span className="metric-label">Time Saved</span>
            </div>
            <div className="metric">
              <span className="metric-value">15+</span>
              <span className="metric-label">Teams Using</span>
            </div>
          </div>
          <div className="showcase-tags">
            <span className="tag">AI/ML</span>
            <span className="tag">DevOps</span>
            <span className="tag">Productivity</span>
          </div>
        </div>

        <div className="showcase-card">
          <div className="showcase-header sustainability">
            <span className="showcase-icon">🌱</span>
            <span className="showcase-badge">In Production</span>
          </div>
          <h3>Smart Energy Management System</h3>
          <p className="showcase-description">
            IoT-based solution for real-time monitoring and optimization of data center energy consumption. AI predicts usage patterns and auto-adjusts cooling systems.
          </p>
          <div className="showcase-metrics">
            <div className="metric">
              <span className="metric-value">30%</span>
              <span className="metric-label">Energy Reduction</span>
            </div>
            <div className="metric">
              <span className="metric-value">$2M</span>
              <span className="metric-label">Annual Savings</span>
            </div>
          </div>
          <div className="showcase-tags">
            <span className="tag">IoT</span>
            <span className="tag">Sustainability</span>
            <span className="tag">Cloud</span>
          </div>
        </div>

        <div className="showcase-card">
          <div className="showcase-header automation">
            <span className="showcase-icon">⚙️</span>
            <span className="showcase-badge">Scaling</span>
          </div>
          <h3>Intelligent Document Processing</h3>
          <p className="showcase-description">
            NLP-powered system for extracting, classifying, and processing unstructured documents. Automates invoice processing, contract analysis, and compliance checks.
          </p>
          <div className="showcase-metrics">
            <div className="metric">
              <span className="metric-value">85%</span>
              <span className="metric-label">Accuracy</span>
            </div>
            <div className="metric">
              <span className="metric-value">10K+</span>
              <span className="metric-label">Docs/Day</span>
            </div>
          </div>
          <div className="showcase-tags">
            <span className="tag">NLP</span>
            <span className="tag">Automation</span>
            <span className="tag">Finance</span>
          </div>
        </div>

        <div className="showcase-card">
          <div className="showcase-header customer">
            <span className="showcase-icon">👥</span>
            <span className="showcase-badge">Pilot</span>
          </div>
          <h3>Personalized Customer Journey Platform</h3>
          <p className="showcase-description">
            Real-time customer behavior analytics and AI-driven personalization engine. Delivers contextual experiences across web, mobile, and in-store touchpoints.
          </p>
          <div className="showcase-metrics">
            <div className="metric">
              <span className="metric-value">25%</span>
              <span className="metric-label">Conversion Lift</span>
            </div>
            <div className="metric">
              <span className="metric-value">3</span>
              <span className="metric-label">Retail Clients</span>
            </div>
          </div>
          <div className="showcase-tags">
            <span className="tag">Analytics</span>
            <span className="tag">Retail</span>
            <span className="tag">AI</span>
          </div>
        </div>

        <div className="showcase-card">
          <div className="showcase-header security">
            <span className="showcase-icon">🔒</span>
            <span className="showcase-badge">Implemented</span>
          </div>
          <h3>Blockchain-Based Supply Chain Tracking</h3>
          <p className="showcase-description">
            Distributed ledger system for end-to-end supply chain transparency. Tracks product authenticity, reduces fraud, and ensures compliance with regulations.
          </p>
          <div className="showcase-metrics">
            <div className="metric">
              <span className="metric-value">99.9%</span>
              <span className="metric-label">Traceability</span>
            </div>
            <div className="metric">
              <span className="metric-value">50K+</span>
              <span className="metric-label">Transactions</span>
            </div>
          </div>
          <div className="showcase-tags">
            <span className="tag">Blockchain</span>
            <span className="tag">Supply Chain</span>
            <span className="tag">Security</span>
          </div>
        </div>

        <div className="showcase-card">
          <div className="showcase-header healthcare">
            <span className="showcase-icon">🏥</span>
            <span className="showcase-badge">In Development</span>
          </div>
          <h3>Predictive Healthcare Analytics</h3>
          <p className="showcase-description">
            ML-based patient risk assessment and early intervention system. Analyzes health records to predict and prevent adverse events, improving patient outcomes.
          </p>
          <div className="showcase-metrics">
            <div className="metric">
              <span className="metric-value">20%</span>
              <span className="metric-label">Readmission ↓</span>
            </div>
            <div className="metric">
              <span className="metric-value">5</span>
              <span className="metric-label">Hospitals</span>
            </div>
          </div>
          <div className="showcase-tags">
            <span className="tag">Healthcare</span>
            <span className="tag">AI/ML</span>
            <span className="tag">Analytics</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
