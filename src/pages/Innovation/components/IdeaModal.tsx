import React from 'react';

interface FormData {
  title: string;
  description: string;
  category: string;
  tags: string;
  priority: string;
}

interface IdeaModalProps {
  isOpen: boolean;
  formData: FormData;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
}

const IdeaModal: React.FC<IdeaModalProps> = ({
  isOpen,
  formData,
  onInputChange,
  onSubmit,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Submit Your Innovation Idea</h2>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        <form onSubmit={onSubmit} className="idea-form">
          <div className="form-group">
            <label htmlFor="title">Idea Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={onInputChange}
              placeholder="Give your idea a clear, concise title"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category *</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={onInputChange}
              required
            >
              <option value="Technology">Technology</option>
              <option value="Sustainability">Sustainability</option>
              <option value="Productivity">Productivity</option>
              <option value="HR">HR</option>
              <option value="Operations">Operations</option>
              <option value="Customer Experience">Customer Experience</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="priority">Priority Level</label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={onInputChange}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={onInputChange}
              placeholder="Describe your idea in detail. Include the problem it solves, how it works, and its potential impact."
              rows={6}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tags">Tags (optional)</label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={onInputChange}
              placeholder="Add relevant tags separated by commas (e.g., AI, automation, customer service)"
            />
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              🚀 Submit Idea
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IdeaModal;
