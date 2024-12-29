import React from 'react';
import { UserPlus, Users } from 'lucide-react';
import type { Employee } from '../../types';

interface Props {
  employees: Employee[];
  onAddEmployee: () => void;
  onSelectEmployee: (employee: Employee) => void;
}

export function EmployeeList({ employees, onAddEmployee, onSelectEmployee }: Props) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">الموظفين</h2>
          <p className="text-gray-600 mt-1">إدارة وعرض معلومات الموظفين</p>
        </div>
        <button
          onClick={onAddEmployee}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <UserPlus className="h-5 w-5 ml-2" />
          إضافة موظف
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.map((employee) => (
          <div
            key={employee.id}
            onClick={() => onSelectEmployee(employee)}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              {employee.profileImage ? (
                <img
                  src={employee.profileImage}
                  alt={employee.name}
                  className="h-12 w-12 rounded-full"
                />
              ) : (
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-medium">
                    {employee.name.charAt(0)}
                  </span>
                </div>
              )}
              <div>
                <h3 className="font-medium text-gray-900">{employee.name}</h3>
                <p className="text-sm text-gray-600">{employee.position}</p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">القسم</p>
                  <p className="font-medium">{employee.department}</p>
                </div>
                <div>
                  <p className="text-gray-500">تاريخ الالتحاق</p>
                  <p className="font-medium">
                    {new Date(employee.joinDate).toLocaleDateString('ar-SA')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}