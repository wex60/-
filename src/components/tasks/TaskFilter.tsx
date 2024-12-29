import React from 'react';
import { Filter } from 'lucide-react';
import type { Employee } from '../../types';

interface FilterState {
  status: string;
  employee: string;
  priority: string;
}

interface Props {
  employees: Employee[];
  filter: FilterState;
  onFilterChange: (filter: FilterState) => void;
}

export function TaskFilter({ employees, filter, onFilterChange }: Props) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center">
          <Filter className="h-5 w-5 text-gray-400 ml-2" />
          <span className="text-sm font-medium text-gray-700">تصفية حسب:</span>
        </div>

        <select
          value={filter.status}
          onChange={(e) => onFilterChange({ ...filter, status: e.target.value })}
          className="rounded-lg border-gray-300 text-sm"
        >
          <option value="all">جميع الحالات</option>
          <option value="pending">قيد الانتظار</option>
          <option value="in-progress">قيد التنفيذ</option>
          <option value="completed">مكتملة</option>
        </select>

        <select
          value={filter.employee}
          onChange={(e) => onFilterChange({ ...filter, employee: e.target.value })}
          className="rounded-lg border-gray-300 text-sm"
        >
          <option value="all">جميع الموظفين</option>
          {employees.map((employee) => (
            <option key={employee.id} value={employee.id}>
              {employee.name}
            </option>
          ))}
        </select>

        <select
          value={filter.priority}
          onChange={(e) => onFilterChange({ ...filter, priority: e.target.value })}
          className="rounded-lg border-gray-300 text-sm"
        >
          <option value="all">جميع الأولويات</option>
          <option value="high">عالية</option>
          <option value="medium">متوسطة</option>
          <option value="low">منخفضة</option>
        </select>
      </div>
    </div>
  );
}