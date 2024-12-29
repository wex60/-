import React from 'react';
import { TrendingUp, Award } from 'lucide-react';
import type { Employee } from '../../types';

interface Props {
  employees?: Employee[];
}

export function EmployeePerformance({ employees = [] }: Props) {
  if (employees.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)] p-6 transition-all duration-300 hover:shadow-[0_8px_30px_-5px_rgba(0,0,0,0.1)]">
        <h3 className="text-lg font-semibold mb-4">أداء الموظفين</h3>
        <p className="text-gray-600 text-center py-4">
          لا يوجد موظفين حالياً
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)] p-6 transition-all duration-300 hover:shadow-[0_8px_30px_-5px_rgba(0,0,0,0.1)]">
      <h3 className="text-lg font-semibold mb-4">أداء الموظفين</h3>
      <div className="space-y-4">
        {employees.map((employee) => (
          <div
            key={employee.id}
            className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="flex items-center">
              {employee.profileImage ? (
                <img
                  src={employee.profileImage}
                  alt={employee.name}
                  className="h-10 w-10 rounded-full"
                />
              ) : (
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 font-medium">
                    {employee.name.charAt(0)}
                  </span>
                </div>
              )}
              <div className="mr-3">
                <div className="font-medium">{employee.name}</div>
                <div className="text-sm text-gray-600">{employee.position}</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-green-600">
                <TrendingUp className="h-4 w-4 ml-1" />
                <span>95%</span>
              </div>
              <Award className="h-5 w-5 text-yellow-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}