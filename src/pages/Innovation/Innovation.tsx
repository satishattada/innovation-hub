import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Innovation.css";
import demoImage from "../../public/assets/demos.png";

const Innovation: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedPriority, setSelectedPriority] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [dateRange, setDateRange] = useState("all");
  const [minVotes, setMinVotes] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"gallery" | "list">("gallery");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Technology",
    tags: "",
    priority: "Medium",
  });

  // Enhanced mock data with more realistic content
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

  const categories = [
    {
      name: "Technology",
      icon: "🤖",
      description:
        "Digital transformation, AI/ML, automation, and emerging technologies",
      ideaCount: 3,
      color: "#667eea",
    },
    {
      name: "Sustainability",
      icon: "🌱",
      description:
        "Environmental initiatives, carbon reduction, and sustainable practices",
      ideaCount: 2,
      color: "#10b981",
    },
    {
      name: "Productivity",
      icon: "⚡",
      description:
        "Process improvements, collaboration tools, and efficiency enhancements",
      ideaCount: 1,
      color: "#f59e0b",
    },
    {
      name: "HR",
      icon: "👥",
      description:
        "People and culture initiatives, wellness programs, and talent development",
      ideaCount: 1,
      color: "#8b5cf6",
    },
    {
      name: "Operations",
      icon: "🏭",
      description:
        "Operational excellence, supply chain, and manufacturing innovations",
      ideaCount: 1,
      color: "#ef4444",
    },
    {
      name: "Customer Experience",
      icon: "🎯",
      description:
        "Customer-focused innovations, service improvements, and experience design",
      ideaCount: 1,
      color: "#06b6d4",
    },
  ];

  const filteredIdeas = ideas.filter((idea) => {
    const matchesSearch =
      idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      idea.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      idea.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      idea.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "all" || idea.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "all" || idea.status === selectedStatus;
    const matchesPriority =
      selectedPriority === "all" || idea.priority === selectedPriority;
    const matchesVotes = idea.votes >= minVotes;

    // Date range filtering
    let matchesDate = true;
    if (dateRange !== "all") {
      const ideaDate = new Date(idea.submittedDate);
      const now = new Date();
      const daysDiff = Math.floor(
        (now.getTime() - ideaDate.getTime()) / (1000 * 3600 * 24)
      );

      switch (dateRange) {
        case "today":
          matchesDate = daysDiff === 0;
          break;
        case "week":
          matchesDate = daysDiff <= 7;
          break;
        case "month":
          matchesDate = daysDiff <= 30;
          break;
        case "quarter":
          matchesDate = daysDiff <= 90;
          break;
        default:
          matchesDate = true;
      }
    }

    return (
      matchesSearch &&
      matchesCategory &&
      matchesStatus &&
      matchesPriority &&
      matchesVotes &&
      matchesDate
    );
  });

  // Sort filtered ideas
  const sortedIdeas = [...filteredIdeas].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return (
          new Date(b.submittedDate).getTime() -
          new Date(a.submittedDate).getTime()
        );
      case "oldest":
        return (
          new Date(a.submittedDate).getTime() -
          new Date(b.submittedDate).getTime()
        );
      case "most-voted":
        return b.votes - a.votes;
      case "least-voted":
        return a.votes - b.votes;
      case "most-commented":
        return b.comments - a.comments;
      case "alphabetical":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

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

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setFormData({
      title: "",
      description: "",
      category: "Technology",
      tags: "",
      priority: "Medium",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Submitting idea:", formData);
    alert(
      "Idea submitted successfully! It will be reviewed by our innovation team."
    );
    handleModalClose();
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedStatus("all");
    setSelectedPriority("all");
    setDateRange("all");
    setMinVotes(0);
    setSortBy("newest");
  };

  const getActiveFilterCount = () => {
    let count = 0;
    if (searchTerm) count++;
    if (selectedCategory !== "all") count++;
    if (selectedStatus !== "all") count++;
    if (selectedPriority !== "all") count++;
    if (dateRange !== "all") count++;
    if (minVotes > 0) count++;
    return count;
  };

  const removeFilter = (filterType: string) => {
    switch (filterType) {
      case "search":
        setSearchTerm("");
        break;
      case "category":
        setSelectedCategory("all");
        break;
      case "status":
        setSelectedStatus("all");
        break;
      case "priority":
        setSelectedPriority("all");
        break;
      case "date":
        setDateRange("all");
        break;
      case "votes":
        setMinVotes(0);
        break;
      default:
        break;
    }
  };

  return (
    <div className="innovation-container">
      {/* Hero Section */}
      <section className="innovation-hero">
        <h1>Innovation Hub</h1>
        <p>
          Transform your ideas into reality. Join thousands of innovators
          driving change across our organization.
        </p>
        <button className="submit-idea-btn" onClick={handleModalOpen}>
          ✨ Submit New Idea
        </button>
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
      <div className="innovation-list-container">
        {/* Browse Ideas Section */}
        <section className="browse-section">
          <div className="section-header">
            <div className="section-title">
              <h2>Explore Innovation Ideas</h2>
              <span className="results-count">
                {sortedIdeas.length} ideas found
              </span>
            </div>
          </div>

          {/* Modern Filter Bar */}
          <div className="filter-bar">
            <div className="filter-bar-left">
              <div className="search-wrapper">
                <div className="search-input-wrapper">
                  <svg
                    className="search-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                  <input
                    type="text"
                    placeholder="Search ideas, authors, or keywords..."
                    className="modern-search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {searchTerm && (
                    <button
                      className="search-clear"
                      onClick={() => setSearchTerm("")}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="filter-bar-right">
              <div className="view-mode-toggle">
                <button
                  className={`view-mode-btn ${
                    viewMode === "gallery" ? "active" : ""
                  }`}
                  onClick={() => setViewMode("gallery")}
                  title="Gallery View"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                </button>
                <button
                  className={`view-mode-btn ${
                    viewMode === "list" ? "active" : ""
                  }`}
                  onClick={() => setViewMode("list")}
                  title="List View"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                </button>
              </div>

              <div className="sort-dropdown">
                <svg
                  className="sort-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="m3 16 4 4 4-4"></path>
                  <path d="M7 20V4"></path>
                  <path d="m21 8-4-4-4 4"></path>
                  <path d="M17 4v16"></path>
                </svg>
                <select
                  className="modern-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="most-voted">Most Voted</option>
                  <option value="least-voted">Least Voted</option>
                  <option value="most-commented">Most Commented</option>
                  <option value="alphabetical">Alphabetical</option>
                </select>
              </div>

              <button
                className={`filter-toggle-btn ${
                  getActiveFilterCount() > 0 ? "active" : ""
                }`}
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
                <span>Filters</span>
                {getActiveFilterCount() > 0 && (
                  <span className="filter-badge">{getActiveFilterCount()}</span>
                )}
              </button>
            </div>
          </div>

          {/* Active Filters Display */}
          {getActiveFilterCount() > 0 && (
            <div className="active-filters-banner">
              <div className="active-filters-content">
                <div className="active-filters-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                  </svg>
                  <span>Active filters</span>
                </div>
                <div className="active-filter-chips">
                  {searchTerm && (
                    <div className="filter-chip-modern">
                      <span>Search: "{searchTerm}"</span>
                      <button onClick={() => removeFilter("search")}>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                  )}
                  {selectedCategory !== "all" && (
                    <div className="filter-chip-modern">
                      <span>Category: {selectedCategory}</span>
                      <button onClick={() => removeFilter("category")}>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                  )}
                  {selectedStatus !== "all" && (
                    <div className="filter-chip-modern">
                      <span>Status: {selectedStatus}</span>
                      <button onClick={() => removeFilter("status")}>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                  )}
                  {selectedPriority !== "all" && (
                    <div className="filter-chip-modern">
                      <span>Priority: {selectedPriority}</span>
                      <button onClick={() => removeFilter("priority")}>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                  )}
                  {dateRange !== "all" && (
                    <div className="filter-chip-modern">
                      <span>Date: {dateRange}</span>
                      <button onClick={() => removeFilter("date")}>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                  )}
                  {minVotes > 0 && (
                    <div className="filter-chip-modern">
                      <span>Min Votes: {minVotes}</span>
                      <button onClick={() => removeFilter("votes")}>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
                <button className="clear-all-filters" onClick={clearAllFilters}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  </svg>
                  <span>Clear all</span>
                </button>
              </div>
            </div>
          )}

          {/* Advanced Filters Panel */}
          {showAdvancedFilters && (
            <div className="advanced-filters-container">
              <div className="advanced-filters-header">
                <h3>Advanced Filters</h3>
                <p>Refine your search with specific criteria</p>
              </div>

              <div className="advanced-filters-grid">
                <div className="filter-card">
                  <div className="filter-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                    </svg>
                  </div>
                  <div className="filter-card-content">
                    <label className="filter-label">Category</label>
                    <select
                      className="filter-select-modern"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="all">All Categories</option>
                      <option value="Technology">Technology</option>
                      <option value="Sustainability">Sustainability</option>
                      <option value="Productivity">Productivity</option>
                      <option value="HR">HR</option>
                      <option value="Operations">Operations</option>
                      <option value="Customer Experience">
                        Customer Experience
                      </option>
                    </select>
                  </div>
                </div>

                <div className="filter-card">
                  <div className="filter-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polygon points="10 8 16 12 10 16 10 8"></polygon>
                    </svg>
                  </div>
                  <div className="filter-card-content">
                    <label className="filter-label">Status</label>
                    <select
                      className="filter-select-modern"
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                    >
                      <option value="all">All Status</option>
                      <option value="open">Open</option>
                      <option value="review">Under Review</option>
                      <option value="approved">Approved</option>
                      <option value="implemented">Implemented</option>
                    </select>
                  </div>
                </div>

                <div className="filter-card">
                  <div className="filter-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  </div>
                  <div className="filter-card-content">
                    <label className="filter-label">Priority</label>
                    <select
                      className="filter-select-modern"
                      value={selectedPriority}
                      onChange={(e) => setSelectedPriority(e.target.value)}
                    >
                      <option value="all">All Priorities</option>
                      <option value="Critical">Critical</option>
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                    </select>
                  </div>
                </div>

                <div className="filter-card">
                  <div className="filter-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <div className="filter-card-content">
                    <label className="filter-label">Date Range</label>
                    <select
                      className="filter-select-modern"
                      value={dateRange}
                      onChange={(e) => setDateRange(e.target.value)}
                    >
                      <option value="all">All Time</option>
                      <option value="today">Today</option>
                      <option value="week">This Week</option>
                      <option value="month">This Month</option>
                      <option value="quarter">This Quarter</option>
                    </select>
                  </div>
                </div>

                <div className="filter-card">
                  <div className="filter-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                  </div>
                  <div className="filter-card-content">
                    <label className="filter-label">Minimum Votes</label>
                    <input
                      type="number"
                      min="0"
                      className="filter-input-modern"
                      value={minVotes}
                      onChange={(e) => setMinVotes(Number(e.target.value))}
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {sortedIdeas.length > 0 ? (
            <div
              className={viewMode === "gallery" ? "ideas-grid" : "ideas-list"}
            >
              {sortedIdeas.map((idea) =>
                viewMode === "gallery" ? (
                  // Gallery View (Card Layout)
                  <div 
                    key={idea.id} 
                    className="idea-card"
                    onClick={() => navigate(`/innovation/${idea.id}`)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="idea-content">
                      <div className="idea-header-section">
                        <h3 className="idea-title">
                          {idea.title.length > 40
                            ? idea.title.substring(0, 40) + "..."
                            : idea.title}
                        </h3>
                        <span
                          className={`idea-status ${getStatusClass(
                            idea.status
                          )}`}
                        >
                          {idea.status}
                        </span>
                      </div>

                      <div className="idea-image-container">
                        <img
                          src={demoImage}
                          alt={idea.title}
                          className="idea-image"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/assets/placeholder.jpg";
                          }}
                        />
                      </div>

                      <div className="innovation-content">
                        <div className="idea-meta">
                          <div className="idea-author">👤 {idea.author}</div>
                          <div className="idea-votes">
                            👍 {idea.votes} votes
                          </div>
                        </div>

                        <p className="idea-description">
                          {idea.description.substring(0, 120)}...
                        </p>

                        <div className="idea-tags">
                          <span
                            className="tag"
                            style={{
                              background: `linear-gradient(135deg, ${getPriorityColor(
                                idea.priority
                              )}20, ${getPriorityColor(idea.priority)}40)`,
                              color: getPriorityColor(idea.priority),
                              borderColor: getPriorityColor(idea.priority),
                            }}
                          >
                            {idea.priority}
                          </span>
                          {idea.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="tag">
                              {tag}
                            </span>
                          ))}
                          {idea.tags.length > 2 && (
                            <span className="tag tag-more">
                              +{idea.tags.length - 2}
                            </span>
                          )}
                        </div>

                        <div className="idea-actions">
                          <button className="vote-btn">👍 Vote</button>
                          <a href="#" className="comment-btn">
                            💬 {idea.comments}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // List View (Table-like Layout)
                  <div 
                    key={idea.id} 
                    className="idea-list-item"
                    onClick={() => navigate(`/innovation/${idea.id}`)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="list-item-main">
                      <div className="list-item-left">
                        <div className="list-item-header">
                          <h3 className="list-item-title">
                            {idea.title.length > 50
                              ? idea.title.substring(0, 50) + "..."
                              : idea.title}
                          </h3>
                          <span
                            className={`idea-status ${getStatusClass(
                              idea.status
                            )}`}
                          >
                            {idea.status}
                          </span>
                        </div>
                        <p className="list-item-description">
                          {idea.description.substring(0, 150)}...
                        </p>
                        <div className="list-item-meta">
                          <span className="meta-item">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                            >
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            {idea.author}
                          </span>
                          <span className="meta-item">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                            >
                              <rect
                                x="3"
                                y="4"
                                width="18"
                                height="18"
                                rx="2"
                                ry="2"
                              ></rect>
                              <line x1="16" y1="2" x2="16" y2="6"></line>
                              <line x1="8" y1="2" x2="8" y2="6"></line>
                              <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            {new Date(idea.submittedDate).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              }
                            )}
                          </span>
                          <span className="meta-item">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                            >
                              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                            </svg>
                            {idea.category}
                          </span>
                        </div>
                        <div className="list-item-tags">
                          <span
                            className="tag-compact priority-tag"
                            style={{
                              backgroundColor: `${getPriorityColor(
                                idea.priority
                              )}20`,
                              color: getPriorityColor(idea.priority),
                              borderColor: getPriorityColor(idea.priority),
                            }}
                          >
                            {idea.priority}
                          </span>
                          {idea.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="tag-compact">
                              {tag}
                            </span>
                          ))}
                          {idea.tags.length > 3 && (
                            <span className="tag-compact tag-more">
                              +{idea.tags.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="list-item-right">
                        <div className="list-item-stats">
                          <div className="stat-box">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                            >
                              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                            </svg>
                            <div className="stat-content">
                              <span className="stat-number">{idea.votes}</span>
                              <span className="stat-label">Votes</span>
                            </div>
                          </div>
                          <div className="stat-box">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                            >
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <div className="stat-content">
                              <span className="stat-number">
                                {idea.comments}
                              </span>
                              <span className="stat-label">Comments</span>
                            </div>
                          </div>
                        </div>
                        <button className="list-vote-btn">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                          </svg>
                          Vote
                        </button>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No ideas found</h3>
              <p>Try adjusting your search terms or browse all categories.</p>
            </div>
          )}

          <div className="load-more">
            <button className="load-more-btn">Load More Ideas</button>
          </div>
        </section>

        {/* Categories Section */}
        <section className="categories-section">
          <h2>Browse by Category</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <div
                key={category.name}
                className="category-card"
                onClick={() => setSelectedCategory(category.name)}
                style={
                  { "--hover-color": category.color } as React.CSSProperties
                }
              >
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.name}</h3>
                <p className="category-description">{category.description}</p>
                <div
                  style={{
                    marginTop: "1rem",
                    fontSize: "0.9rem",
                    color: category.color,
                    fontWeight: "600",
                  }}
                >
                  {category.ideaCount} active ideas
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* Idea Submission Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Submit Your Innovation Idea</h2>
              <button className="modal-close" onClick={handleModalClose}>
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="idea-form">
              <div className="form-group">
                <label htmlFor="title">Idea Title *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Give your idea a clear, concise title"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Category *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Technology">Technology</option>
                  <option value="Sustainability">Sustainability</option>
                  <option value="Productivity">Productivity</option>
                  <option value="HR">HR</option>
                  <option value="Operations">Operations</option>
                  <option value="Customer Experience">
                    Customer Experience
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="priority">Priority Level</label>
                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleInputChange}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Critical">Critical</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="description">Description *</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your idea in detail. Include the problem it solves, how it works, and its potential impact."
                  rows={6}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="tags">Tags (optional)</label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="Add relevant tags separated by commas (e.g., AI, automation, customer service)"
                />
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={handleModalClose}
                >
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  🚀 Submit Idea
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Innovation;
