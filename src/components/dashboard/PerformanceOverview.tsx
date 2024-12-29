import React from 'react';
import { TrendingUp, Award, Target, Users } from 'lucide-react';
import type { PerformanceEvaluation } from '../../types/evaluation';

interface Props {
  evaluations: PerformanceEvaluation[];
  employeeId: string;
}

export function PerformanceOverview({ evaluations, employeeId }: Props) {
  const latestEvaluation = evaluations[0]; // Assuming sorted by date

  const calculateAverageScore = () => {
    if (evaluations.length === 0) return 0;
    const sum = evaluations.reduce((acc, eval) => acc + eval.overallScore, 0);
    return (sum / evaluations.length).toFixed(1);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">متوسط الأداء</h3>
          <TrendingUp className="h-6 w-6 text-blue-600" />
        </div>
        <div className="text-3xl font-bold text-gray-900">
          {calculateAverageScore()}%
        </div>
        <div className="mt-2 text-sm text-gray-600">
          آخر 12 شهر
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">المهام المكتملة</h3>
          <Award className="h-6 w-6 text-green-600" />
        </div>
        <div className="text-3xl font-bold text-gray-900">
          85%
        </div>
        <div className="mt-2 text-sm text-gray-600">
          معدل الإنجاز
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">الأهداف</h3>
          <Target className="h-6 w-6 text-purple-600" />
        </div>
        <div className="text-3xl font-bold text-gray-900">
          12/15
        </div>
        <div className="mt-2 text-sm text-gray-600">
          تم تحقيقها
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">التغذية الراجعة</h3>
          <Users className="h-6 w-6 text-yellow-600" />
        </div>
        <div className="text-3xl font-bold text-gray-900">
          24
        </div>
        <div className="mt-2 text-sm text-gray-600">
          تقييم مستلم
        </div>
      </div>
    </div>
  );
}