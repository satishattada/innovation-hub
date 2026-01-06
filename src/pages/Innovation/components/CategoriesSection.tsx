import React from 'react';

interface Category {
  name: string;
  icon: string;
  description: string;
  ideaCount: number;
  color: string;
}

interface CategoriesSectionProps {
  categories: Category[];
  onCategorySelect: (category: string) => void;
}

const CategoriesSection: React.FC<CategoriesSectionProps> = ({ categories, onCategorySelect }) => {
  return (
    <section className="categories-section">
      <h2>Browse by Category</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <div
            key={category.name}
            className="category-card"
            onClick={() => onCategorySelect(category.name)}
            style={{ '--hover-color': category.color } as React.CSSProperties}
          >
            <span className="category-icon">{category.icon}</span>
            <h3 className="category-title">{category.name}</h3>
            <p className="category-description">{category.description}</p>
            <div
              style={{
                marginTop: '1rem',
                fontSize: '0.9rem',
                color: category.color,
                fontWeight: '600',
              }}
            >
              {category.ideaCount} active ideas
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
