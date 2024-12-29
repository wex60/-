import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

interface PerformanceData {
  period: string;
  score: number;
  goals: number;
  skills: number;
  feedback: number;
}

interface Props {
  data: PerformanceData[];
  employeeName: string;
}

export function PerformanceChart({ data, employeeName }: Props) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">تقرير أداء {employeeName}</h3>
        <div className="flex items-center space-x-4">
          <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            <option value="quarter">ربع سنوي</option>
            <option value="year">سنوي</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">متوسط الأداء</span>
            <TrendingUp className="w-4 h-4 text-green-600" />
          </div>
          <div className="text-2xl font-bold">
            {data[data.length - 1].score}%
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">الأهداف المنجزة</span>
            <BarChart3 className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl font-bold">
            {data[data.length - 1].goals}%
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">تقييم المهارات</span>
            <BarChart3 className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-2xl font-bold">
            {data[data.length - 1].skills}%
          </div>
        </div>
      </div>

      {/* Here you would add your chart component */}
      <div className="h-64 w-full bg-gray-50 rounded-lg">
        {/* Chart placeholder */}
      </div>
    </div>
  );
}