export interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  joinDate: string;
  managerId: string;
  email: string;
  profileImage?: string;
}

export interface EmployeePerformance {
  id: string;
  employeeId: string;
  year: number;
  quarter: number;
  overallScore: number;
  status: 'draft' | 'in-review' | 'completed';
  lastUpdated: string;
}