import React from 'react';

interface TagsSectionProps {
  tags: string[];
  priority: string;
  getPriorityColor: (priority: string) => string;
}

const TagsSection: React.FC<TagsSectionProps> = ({ tags, priority, getPriorityColor }) => {
  return (
    <div className="detail-tags">
      <h3>Tags</h3>
      <div className="tags-list">
        <span
          className="priority-tag"
          style={{
            backgroundColor: `${getPriorityColor(priority)}20`,
            color: getPriorityColor(priority),
            borderColor: getPriorityColor(priority),
          }}
        >
          {priority} Priority
        </span>
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagsSection;
