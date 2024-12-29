// Types for performance evaluation system
export interface PerformanceMetric {
  id: string;
  name: string;
  description: string;
  weight: number; // 0-100
  category: 'skills' | 'behavior' | 'results' | 'goals';
  subMetrics?: PerformanceMetric[];
}

export interface EvaluationPeriod {
  id: string;
  startDate: string;
  endDate: string;
  type: 'monthly' | 'quarterly' | 'annual';
  status: 'upcoming' | 'active' | 'completed';
}

export interface PerformanceEvaluation {
  id: string;
  employeeId: string;
  evaluatorId: string;
  periodId: string;
  metrics: MetricScore[];
  overallScore: number;
  feedback: string;
  status: 'draft' | 'submitted' | 'reviewed';
  createdAt: string;
  updatedAt: string;
}

export interface MetricScore {
  metricId: string;
  score: number; // 1-5
  comment: string;
}

export interface Feedback360 {
  id: string;
  employeeId: string;
  fromId: string;
  relationshipType: 'peer' | 'manager' | 'subordinate' | 'self' | 'client';
  content: string;
  category: string;
  isAnonymous: boolean;
  createdAt: string;
}