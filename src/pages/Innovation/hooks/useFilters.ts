import { useState, useMemo } from 'react';

interface Idea {
  id: number;
  title: string;
  description: string;
  author: string;
  votes: number;
  comments: number;
  status: string;
  tags: string[];
  category: string;
  submittedDate: string;
  priority: string;
}

export const useFilters = (ideas: Idea[]) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedPriority, setSelectedPriority] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [dateRange, setDateRange] = useState("all");
  const [minVotes, setMinVotes] = useState(0);

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

  const filteredAndSortedIdeas = useMemo(() => {
    const filtered = ideas.filter((idea) => {
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

    return filtered.sort((a, b) => {
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
  }, [ideas, searchTerm, selectedCategory, selectedStatus, selectedPriority, sortBy, dateRange, minVotes]);

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedStatus,
    setSelectedStatus,
    selectedPriority,
    setSelectedPriority,
    sortBy,
    setSortBy,
    showAdvancedFilters,
    setShowAdvancedFilters,
    dateRange,
    setDateRange,
    minVotes,
    setMinVotes,
    clearAllFilters,
    getActiveFilterCount,
    removeFilter,
    getStatusClass,
    getPriorityColor,
    filteredAndSortedIdeas,
  };
};
