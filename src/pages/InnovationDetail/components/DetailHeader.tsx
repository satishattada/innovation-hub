import React from 'react';
import { useNavigate } from 'react-router-dom';

const DetailHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="detail-header">
      <button onClick={() => navigate('/innovation')} className="back-btn">
        ← Back to Innovations
      </button>
    </div>
  );
};

export default DetailHeader;
