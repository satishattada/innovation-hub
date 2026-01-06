import React from 'react';

interface TimelineCardProps {
  status: string;
  submittedDate: string;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ status, submittedDate }) => {
  return (
    <div className="sidebar-card">
      <h3>Implementation Timeline</h3>
      <div className="timeline">
        <div className="timeline-item completed">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <strong>Submitted</strong>
            <span>{new Date(submittedDate).toLocaleDateString()}</span>
          </div>
        </div>
        <div
          className={`timeline-item ${
            status === 'review' || status === 'approved' || status === 'implemented'
              ? 'completed'
              : ''
          }`}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <strong>Under Review</strong>
            <span>
              {status === 'review' || status === 'approved' || status === 'implemented'
                ? 'In Progress'
                : 'Pending'}
            </span>
          </div>
        </div>
        <div
          className={`timeline-item ${
            status === 'approved' || status === 'implemented' ? 'completed' : ''
          }`}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <strong>Approved</strong>
            <span>
              {status === 'approved' || status === 'implemented' ? 'Approved' : 'Pending'}
            </span>
          </div>
        </div>
        <div className={`timeline-item ${status === 'implemented' ? 'completed' : ''}`}>
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <strong>Implemented</strong>
            <span>{status === 'implemented' ? 'Completed' : 'Pending'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
