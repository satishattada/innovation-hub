import React, { useState } from "react";
import InnovationHero from "./components/InnovationHero";
import FilterBar from "./components/FilterBar";
import ActiveFilters from "./components/ActiveFilters";
import AdvancedFilters from "./components/AdvancedFilters";
import IdeasGrid from "./components/IdeasGrid";
import IdeasList from "./components/IdeasList";
import CategoriesSection from "./components/CategoriesSection";
import IdeaModal from "./components/IdeaModal";
import { useIdeasData } from "./hooks/useIdeasData";
import { useFilters } from "./hooks/useFilters";
import "./Innovation.css";

const Innovation: React.FC = () => {
  const [viewMode, setViewMode] = useState<"gallery" | "list">("gallery");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Technology",
    tags: "",
    priority: "Medium",
  });

  const { ideas, categories } = useIdeasData();
  const {
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
  } = useFilters(ideas);

  const handleModalOpen = () => setIsModalOpen(true);

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting idea:", formData);
    alert("Idea submitted successfully! It will be reviewed by our innovation team.");
    handleModalClose();
  };

  return (
    <div className="innovation-container">
      <InnovationHero onSubmitClick={handleModalOpen} />

      <div className="innovation-list-container">
        <section className="browse-section">
          <div className="section-header">
            <div className="section-title">
              <h2>Explore Innovation Ideas</h2>
              <span className="results-count">
                {filteredAndSortedIdeas.length} ideas found
              </span>
            </div>
          </div>

          <FilterBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            viewMode={viewMode}
            setViewMode={setViewMode}
            sortBy={sortBy}
            setSortBy={setSortBy}
            showAdvancedFilters={showAdvancedFilters}
            setShowAdvancedFilters={setShowAdvancedFilters}
            activeFilterCount={getActiveFilterCount()}
          />

          <ActiveFilters
            searchTerm={searchTerm}
            selectedCategory={selectedCategory}
            selectedStatus={selectedStatus}
            selectedPriority={selectedPriority}
            dateRange={dateRange}
            minVotes={minVotes}
            onRemoveFilter={removeFilter}
            onClearAll={clearAllFilters}
          />

          {showAdvancedFilters && (
            <AdvancedFilters
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedStatus={selectedStatus}
              setSelectedStatus={setSelectedStatus}
              selectedPriority={selectedPriority}
              setSelectedPriority={setSelectedPriority}
              dateRange={dateRange}
              setDateRange={setDateRange}
              minVotes={minVotes}
              setMinVotes={setMinVotes}
            />
          )}

          {filteredAndSortedIdeas.length > 0 ? (
            viewMode === "gallery" ? (
              <IdeasGrid
                ideas={filteredAndSortedIdeas}
                getStatusClass={getStatusClass}
                getPriorityColor={getPriorityColor}
              />
            ) : (
              <IdeasList
                ideas={filteredAndSortedIdeas}
                getStatusClass={getStatusClass}
                getPriorityColor={getPriorityColor}
              />
            )
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

        <CategoriesSection
          categories={categories}
          onCategorySelect={setSelectedCategory}
        />
      </div>

      <IdeaModal
        isOpen={isModalOpen}
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        onClose={handleModalClose}
      />
    </div>
  );
};

export default Innovation;
