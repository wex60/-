export interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  joinDate: string;
  managerId: string;
  email: string;
  profileImage?: string;
  role: 'admin' | 'user';
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
  priority: 'critical' | 'high' | 'medium' | 'low' | 'on-hold';
  status: 'pending' | 'in-progress' | 'completed';
  history: TaskHistory[];
}

export interface TaskHistory {
  id: string;
  taskId: string;
  action: 'created' | 'updated' | 'status-changed' | 'completed';
  timestamp: string;
  userId: string;
  changes?: {
    field: string;
    oldValue: any;
    newValue: any;
  }[];
}

export interface UserSettings {
  theme: 'light' | 'dark';
  notifications: {
    email: boolean;
    push: boolean;
    daily: boolean;
    approaching: boolean;
  };
}

export interface TaskRating {
  speed: 'excellent' | 'good' | 'fair' | 'needs-improvement';
  quality: number;
  comments?: string;
}