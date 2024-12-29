import React from 'react';
import { UserPlus, Users } from 'lucide-react';
import type { Employee } from '../types';

interface Props {
  employees: Employee[];
  onAddEmployee: () => void;
  onSelectEmployee: (employee: Employee) => void;
}

export function EmployeeList({ employees, onAddEmployee, onSelectEmployee }: Props) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Users className="w-5 h-5 ml-2" />
          <h2 className="text-xl font-semibold">الموظفين</h2>
        </div>
        <button
          onClick={onAddEmployee}
          className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <UserPlus className="w-4 h-4 ml-2" />
          إضافة موظف
        </button>
      </div>
      <div className="space-y-2">
        {employees.map((employee) => (
          <div
            key={employee.id}
            onClick={() => onSelectEmployee(employee)}
            className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <h3 className="font-medium">{employee.name}</h3>
            <p className="text-sm text-gray-600">{employee.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}