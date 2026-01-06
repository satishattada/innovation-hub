import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ideasData } from '../Innovation/data/ideasData';
import DetailHeader from './components/DetailHeader';
import TitleSection from './components/TitleSection';
import MetaSection from './components/MetaSection';
import DescriptionSection from './components/DescriptionSection';
import TagsSection from './components/TagsSection';
import CommentsSection from './components/CommentsSection';
import EngagementCard from './components/EngagementCard';
import TimelineCard from './components/TimelineCard';
import SimilarIdeasCard from './components/SimilarIdeasCard';
import { getStatusClass, getPriorityColor } from './utils/helpers';
import './InnovationDetail.css';

const InnovationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const idea = ideasData.find((i) => i.id === Number(id));

  if (!idea) {
    return (
      <div className="innovation-detail-container">
        <div className="not-found">
          <h2>Innovation Not Found</h2>
          <button onClick={() => navigate('/innovation')} className="back-btn">
            ← Back to Innovations
          </button>
        </div>
      </div>
    );
  }

  // Get similar innovations based on category
  const similarIdeas = ideasData
    .filter((i) => i.category === idea.category && i.id !== idea.id)
    .slice(0, 3);

  return (
    <div className="innovation-detail-container">
      <DetailHeader />

      <div className="detail-content">
        <div className="detail-main">
          <TitleSection 
            title={idea.title} 
            status={idea.status} 
            getStatusClass={getStatusClass} 
          />

          <MetaSection
            author={idea.author}
            authorRole={idea.authorRole}
            submittedDate={idea.submittedDate}
            category={idea.category}
          />

          <DescriptionSection description={idea.description} />

          <TagsSection
            tags={idea.tags}
            priority={idea.priority}
            getPriorityColor={getPriorityColor}
          />

          <CommentsSection commentsCount={idea.comments} />
        </div>

        <div className="detail-sidebar">
          <EngagementCard votes={idea.votes} comments={idea.comments} />

          <TimelineCard status={idea.status} submittedDate={idea.submittedDate} />

          <SimilarIdeasCard similarIdeas={similarIdeas} />
        </div>
      </div>
    </div>
  );
};

export default InnovationDetail;
