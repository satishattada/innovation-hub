import React from 'react';

interface TitleSectionProps {
  title: string;
  status: string;
  getStatusClass: (status: string) => string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, status, getStatusClass }) => {
  return (
    <div className="detail-title-section">
      <h1 className="detail-title">{title}</h1>
      <span className={`idea-status ${getStatusClass(status)}`}>
        {status}
      </span>
    </div>
  );
};

export default TitleSection;
