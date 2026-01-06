export const getStatusClass = (status: string): string => {
  switch (status.toLowerCase()) {
    case 'open':
      return 'status-open';
    case 'review':
      return 'status-review';
    case 'approved':
      return 'status-approved';
    case 'implemented':
      return 'status-implemented';
    default:
      return '';
  }
};

export const getPriorityColor = (priority: string): string => {
  switch (priority.toLowerCase()) {
    case 'high':
      return '#dc2626';
    case 'medium':
      return '#f59e0b';
    case 'low':
      return '#10b981';
    default:
      return '#6b7280';
  }
};
