import React from 'react';

interface CommentsSectionProps {
  commentsCount: number;
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ commentsCount }) => {
  return (
    <div className="detail-comments">
      <h2>Comments ({commentsCount})</h2>
      <div className="comments-section">
        <p className="no-comments">Be the first to comment on this innovation!</p>
        <textarea
          className="comment-input"
          placeholder="Share your thoughts and feedback..."
          rows={4}
        ></textarea>
        <button className="submit-comment-btn">Post Comment</button>
      </div>
    </div>
  );
};

export default CommentsSection;
