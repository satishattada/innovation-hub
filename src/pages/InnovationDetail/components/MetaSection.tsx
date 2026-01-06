import React from 'react';

interface MetaSectionProps {
  author: string;
  authorRole: string;
  submittedDate: string;
  category: string;
}

const MetaSection: React.FC<MetaSectionProps> = ({
  author,
  authorRole,
  submittedDate,
  category,
}) => {
  return (
    <div className="detail-meta">
      <div className="meta-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <div>
          <strong>{author}</strong>
          <span>{authorRole}</span>
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
          <span>
            {new Date(submittedDate).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
        </div>
      </div>
      <div className="meta-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
        <div>
          <strong>Category</strong>
          <span>{category}</span>
        </div>
      </div>
    </div>
  );
};

export default MetaSection;
