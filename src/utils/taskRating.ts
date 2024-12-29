import type { Task, TaskRating } from '../types';

export function calculateCompletionRating(task: Task): TaskRating['speed'] {
  if (!task.completedDate || !task.dueDate) return 'needs-improvement';

  const completed = new Date(task.completedDate);
  const deadline = new Date(task.dueDate);
  const diffHours = (deadline.getTime() - completed.getTime()) / (1000 * 60 * 60);

  if (diffHours > 24) return 'excellent';
  if (diffHours > 0) return 'good';
  if (diffHours === 0) return 'fair';
  return 'needs-improvement';
}