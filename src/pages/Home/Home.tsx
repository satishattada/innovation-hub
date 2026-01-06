import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import './Home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">
          Welcome to the Innovation Homepage
        </h1>
        <p className="hero-description">
          To address increasing innovation pace, validate ideas earlier, and scale successful solutions across regions and industries. Our regional innovation and incubation initiative is designed to address this need by creating a structured, scalable, and client-centric approach to rapid prototyping and idea validation.
        </p>
      </section>

      {/* Program Overview Section */}
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

      {/* Key Capabilities */}
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

      {/* Industry Partners */}
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

      {/* Roadmap Section */}
      <div className="roadmap-section">
        <h2 className="section-title">Innovation Roadmap 2026</h2>
        <div className="roadmap-timeline">
          <div className="timeline-item">
            <div className="timeline-marker">Q1</div>
            <div className="timeline-content">
              <h3>Foundation & Setup</h3>
              <ul>
                <li>Finalize program naming and branding</li>
                <li>Establish operating model and supporting tools</li>
                <li>Set up collaboration forums and governance</li>
              </ul>
              <div className="timeline-team">Lead: All Teams</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">Q2</div>
            <div className="timeline-content">
              <h3>Team & Infrastructure</h3>
              <ul>
                <li>Identify and onboard core incubation team</li>
                <li>Launch Innovation Repository on OneStop</li>
                <li>Deploy remote lab infrastructure</li>
              </ul>
              <div className="timeline-team">Lead: Chiru, Yogesh, Kartic</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">Q3</div>
            <div className="timeline-content">
              <h3>Scale & Onboard</h3>
              <ul>
                <li>Begin systematic tagging and categorization</li>
                <li>Onboard first wave of incubation initiatives</li>
                <li>Establish client co-creation frameworks</li>
              </ul>
              <div className="timeline-team">Lead: TBD</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">Q4</div>
            <div className="timeline-content">
              <h3>Optimize & Expand</h3>
              <ul>
                <li>Measure impact and optimize processes</li>
                <li>Scale successful innovations to production</li>
                <li>Expand to new markets and domains</li>
              </ul>
              <div className="timeline-team">Lead: All Teams</div>
            </div>
          </div>
        </div>
      </div>

      {/* How to Create Innovation Ideas */}
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

      {/* Featured Innovation Showcase */}
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

      {/* Get Started Section */}
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
    </div>
  );
};

export default Home;