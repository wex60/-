export interface Goal {
  id: string;
  employeeId: string;
  title: string;
  description: string;
  category: 'performance' | 'development' | 'career';
  status: 'active' | 'completed' | 'cancelled';
  priority: 'high' | 'medium' | 'low';
  startDate: string;
  dueDate: string;
  progress: number;
  metrics: GoalMetric[];
  alignedWith: string[]; // Strategic objectives IDs
}

export interface GoalMetric {
  id: string;
  name: string;
  target: number;
  current: number;
  unit: string;
}