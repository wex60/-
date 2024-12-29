import React from 'react';
import { CheckCircle, Clock, Target } from 'lucide-react';
import type { Goal } from '../../types';

interface Props {
  goals: Goal[];
  onUpdateProgress: (goalId: string, progress: number) => void;
}

export function GoalTracker({ goals, onUpdateProgress }: Props) {
  const getPriorityColor = (priority: Goal['priority']) => {
    switch (priority) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
    }
  };

  return (
    <div className="space-y-6">
      {goals.map((goal) => (
        <div key={goal.id} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold">{goal.title}</h3>
              <p className="text-gray-600 mt-1">{goal.description}</p>
            </div>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(goal.priority)}`}>
              {goal.priority === 'high' ? 'أولوية عالية' :
               goal.priority === 'medium' ? 'أولوية متوسطة' :
               'أولوية منخفضة'}
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="w-4 h-4 ml-2" />
              <span>الموعد النهائي: {new Date(goal.dueDate).toLocaleDateString('ar-SA')}</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">التقدم</span>
                <span className="text-sm text-gray-600">{goal.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 rounded-full h-2"
                  style={{ width: `${goal.progress}%` }}
                />
              </div>
            </div>

            <div className="space-y-2">
              {goal.metrics.map((metric) => (
                <div key={metric.id} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{metric.name}</span>
                  <span className="text-sm font-medium">
                    {metric.current}/{metric.target} {metric.unit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}