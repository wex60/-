export interface Employee {
  id: string;
  name: string;
  position: string;
  joinDate: string;
}

export interface Task {
  id: string;
  employeeId: string;
  title: string;
  description: string;
  startDate: string;
  dueDate: string;
  completedDate?: string;
  rating?: number;
  status: 'pending' | 'in-progress' | 'completed';
}

export interface TaskFormData {
  title: string;
  description: string;
  employeeId: string;
  dueDate: string;
}