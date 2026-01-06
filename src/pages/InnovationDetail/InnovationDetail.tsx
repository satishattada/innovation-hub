import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './InnovationDetail.css';

const InnovationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Mock data - in production, this would come from an API or context
  const ideas = [
    {
      id: 1,
      title: "AI-Powered Customer Service Chatbot with Sentiment Analysis",
      description:
        "Implement an intelligent chatbot using advanced NLP and sentiment analysis to handle customer inquiries 24/7, automatically escalating complex issues to human agents while providing personalized responses based on customer history and preferences.",
      author: "Sarah Chen",
      authorRole: "Senior Product Manager",
      votes: 47,
      comments: 12,
      status: "review",
      tags: ["AI/ML", "Customer Experience", "Automation", "NLP"],
      category: "Technology",
      submittedDate: "2024-01-15",
      priority: "High",
      image: "",
    },
    {
      id: 2,
      title: "Sustainable Packaging Initiative with Blockchain Traceability",
      description:
        "Develop eco-friendly packaging solutions using biodegradable materials combined with blockchain technology for complete supply chain traceability, enabling consumers to track the environmental impact of their purchases.",
      author: "Dr. Michael Rodriguez",
      authorRole: "Sustainability Lead",
      votes: 63,
      comments: 18,
      status: "approved",
      tags: ["Sustainability", "Blockchain", "Supply Chain", "Environment"],
      category: "Sustainability",
      submittedDate: "2024-01-08",
      priority: "Critical",
      image: "",
    },
    {
      id: 3,
      title: "Hybrid Work Collaboration Platform with AR Features",
      description:
        "Create a unified platform for hybrid teams featuring augmented reality meeting spaces, intelligent scheduling, real-time translation, and advanced analytics for productivity tracking and team engagement metrics.",
      author: "Emma Thompson",
      authorRole: "VP of Engineering",
      votes: 38,
      comments: 9,
      status: "open",
      tags: ["Remote Work", "AR/VR", "Collaboration", "Analytics"],
      category: "Productivity",
      submittedDate: "2024-01-20",
      priority: "Medium",
      image: "",
    },
    {
      id: 4,
      title: "Predictive Maintenance System using IoT Sensors",
      description:
        "Deploy IoT sensors across manufacturing facilities with AI-driven predictive maintenance algorithms to reduce downtime by 40%, optimize maintenance schedules, and extend equipment lifespan through data-driven insights.",
      author: "James Wilson",
      authorRole: "Operations Director",
      votes: 52,
      comments: 15,
      status: "implemented",
      tags: ["IoT", "Predictive Analytics", "Manufacturing", "Operations"],
      category: "Operations",
      submittedDate: "2023-12-10",
      priority: "High",
      image: "",
    },
    {
      id: 5,
      title: "Employee Wellness Platform with Mental Health Focus",
      description:
        "Launch a comprehensive wellness initiative including AI-powered mental health assessment tools, personalized wellness plans, virtual therapy sessions, fitness tracking integration, and peer support communities.",
      author: "Dr. Lisa Park",
      authorRole: "Chief People Officer",
      votes: 41,
      comments: 22,
      status: "review",
      tags: ["Wellness", "Mental Health", "HR", "Employee Engagement"],
      category: "HR",
      submittedDate: "2024-01-12",
      priority: "High",
      image: "",
    },
    {
      id: 6,
      title: "Zero-Trust Security Framework Implementation",
      description:
        "Implement a comprehensive zero-trust security architecture with continuous authentication, micro-segmentation, and AI-driven threat detection to protect against advanced persistent threats and insider risks.",
      author: "Marcus Johnson",
      authorRole: "CISO",
      votes: 35,
      comments: 8,
      status: "open",
      tags: ["Cybersecurity", "Zero Trust", "AI", "Risk Management"],
      category: "Technology",
      submittedDate: "2024-01-18",
      priority: "Critical",
      image: "",
    },
    {
      id: 7,
      title: "Customer Journey Analytics with Voice AI",
      description:
        "Build an advanced analytics platform that combines traditional digital journey data with voice interaction analysis, sentiment tracking, and predictive behavior modeling to enhance customer experience.",
      author: "Rachel Green",
      authorRole: "Customer Insights Director",
      votes: 29,
      comments: 11,
      status: "open",
      tags: ["Analytics", "Voice AI", "Customer Experience", "Journey Mapping"],
      category: "Customer Experience",
      submittedDate: "2024-01-22",
      priority: "Medium",
      image: "",
    },
    {
      id: 8,
      title: "Carbon Neutrality Achievement Program",
      description:
        "Develop a comprehensive program to achieve carbon neutrality by 2030, including renewable energy procurement, carbon offset strategies, employee engagement initiatives, and transparent reporting frameworks.",
      author: "Dr. Ahmed Hassan",
      authorRole: "Sustainability Director",
      votes: 58,
      comments: 25,
      status: "approved",
      tags: ["Climate Action", "Carbon Neutral", "Renewable Energy", "ESG"],
      category: "Sustainability",
      submittedDate: "2023-12-05",
      priority: "Critical",
      image: "",
    },
  ];

  const idea = ideas.find((i) => i.id === Number(id));

  if (!idea) {
    return (
      <div className="innovation-detail-container">
        <div className="not-found">
          <h2>Innovation Not Found</h2>
          <button onClick={() => navigate('/innovation')} className="back-btn">
            ← Back to Innovations
          </button>
        </div>
      </div>
    );
  }

  const getStatusClass = (status: string) => {
    switch (status) {
      case "open":
        return "status-open";
      case "review":
        return "status-review";
      case "approved":
        return "status-approved";
      case "implemented":
        return "status-implemented";
      default:
        return "status-open";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical":
        return "#ef4444";
      case "High":
        return "#f59e0b";
      case "Medium":
        return "#10b981";
      default:
        return "#6b7280";
    }
  };

  return (
    <div className="innovation-detail-container">
      <div className="detail-header">
        <button onClick={() => navigate('/innovation')} className="back-btn">
          ← Back to Innovations
        </button>
      </div>

      <div className="detail-content">
        <div className="detail-main">
          <div className="detail-title-section">
            <h1 className="detail-title">{idea.title}</h1>
            <span className={`idea-status ${getStatusClass(idea.status)}`}>
              {idea.status}
            </span>
          </div>

          <div className="detail-meta">
            <div className="meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <div>
                <strong>{idea.author}</strong>
                <span>{idea.authorRole}</span>
              </div>
            </div>
            <div className="meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <div>
                <strong>Submitted</strong>
                <span>{new Date(idea.submittedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </div>
            <div className="meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
              <div>
                <strong>Category</strong>
                <span>{idea.category}</span>
              </div>
            </div>
          </div>

          <div className="detail-description">
            <h2>Description</h2>
            <p>{idea.description}</p>
          </div>

          <div className="detail-tags">
            <h3>Tags</h3>
            <div className="tags-list">
              <span
                className="priority-tag"
                style={{
                  backgroundColor: `${getPriorityColor(idea.priority)}20`,
                  color: getPriorityColor(idea.priority),
                  borderColor: getPriorityColor(idea.priority),
                }}
              >
                {idea.priority} Priority
              </span>
              {idea.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="detail-comments">
            <h2>Comments ({idea.comments})</h2>
            <div className="comments-section">
              <p className="no-comments">Be the first to comment on this innovation!</p>
              <textarea
                className="comment-input"
                placeholder="Share your thoughts and feedback..."
                rows={4}
              ></textarea>
              <button className="submit-comment-btn">Post Comment</button>
            </div>
          </div>
        </div>

        <div className="detail-sidebar">
          <div className="sidebar-card">
            <h3>Engagement</h3>
            <div className="engagement-stats">
              <div className="stat-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
                <div>
                  <span className="stat-number">{idea.votes}</span>
                  <span className="stat-details-label">Votes</span>
                </div>
              </div>
              <div className="stat-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <div>
                  <span className="stat-number">{idea.comments}</span>
                  <span className="stat-details-label">Comments</span>
                </div>
              </div>
            </div>
            <button className="vote-action-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
              </svg>
              Vote for this Innovation
            </button>
          </div>

          <div className="sidebar-card">
            <h3>Implementation Timeline</h3>
            <div className="timeline">
              <div className="timeline-item completed">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <strong>Submitted</strong>
                  <span>{new Date(idea.submittedDate).toLocaleDateString()}</span>
                </div>
              </div>
              <div className={`timeline-item ${idea.status === 'review' || idea.status === 'approved' || idea.status === 'implemented' ? 'completed' : ''}`}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <strong>Under Review</strong>
                  <span>{idea.status === 'review' || idea.status === 'approved' || idea.status === 'implemented' ? 'In Progress' : 'Pending'}</span>
                </div>
              </div>
              <div className={`timeline-item ${idea.status === 'approved' || idea.status === 'implemented' ? 'completed' : ''}`}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <strong>Approved</strong>
                  <span>{idea.status === 'approved' || idea.status === 'implemented' ? 'Approved' : 'Pending'}</span>
                </div>
              </div>
              <div className={`timeline-item ${idea.status === 'implemented' ? 'completed' : ''}`}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <strong>Implemented</strong>
                  <span>{idea.status === 'implemented' ? 'Completed' : 'Pending'}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar-card">
            <h3>Similar Innovations</h3>
            <div className="similar-ideas">
              {ideas
                .filter((i) => i.category === idea.category && i.id !== idea.id)
                .slice(0, 3)
                .map((similar) => (
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
        </div>
      </div>
    </div>
  );
};

export default InnovationDetail;
