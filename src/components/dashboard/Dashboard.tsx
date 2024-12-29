import React, { useState } from 'react';
import { KPIOverview } from './KPIOverview';
import { TaskSummary } from './TaskSummary';
import { EmployeePerformance } from './EmployeePerformance';
import type { Employee, Task } from '../../types';

export function Dashboard() {
  const [tasks] = useState<Task[]>([]);
  const [employees] = useState<Employee[]>([]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">لوحة التحكم</h2>
        <div className="flex space-x-3">
          <select className="rounded-lg border border-gray-300 bg-white text-gray-900 text-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500">
            <option>آخر 30 يوم</option>
            <option>آخر 3 شهور</option>
            <option>آخر سنة</option>
          </select>
        </div>
      </div>

      <KPIOverview />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TaskSummary tasks={tasks} />
        <EmployeePerformance employees={employees} />
      </div>
    </div>
  );
}