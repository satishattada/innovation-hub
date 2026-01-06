import React from 'react';

interface DescriptionSectionProps {
  description: string;
}

const DescriptionSection: React.FC<DescriptionSectionProps> = ({ description }) => {
  return (
    <div className="detail-description">
      <h2>Description</h2>
      <p>{description}</p>
    </div>
  );
};

export default DescriptionSection;
