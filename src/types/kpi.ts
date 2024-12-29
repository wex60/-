export interface KPI {
  id: string;
  name: string;
  description: string;
  category: string;
  target: number;
  actual: number;
  unit: string;
  period: string;
  trend: number[];
  status: 'ahead' | 'on-track' | 'behind';
}

export interface DepartmentKPIs {
  departmentId: string;
  kpis: KPI[];
  overallScore: number;
  trends: {
    period: string;
    score: number;
  }[];
}