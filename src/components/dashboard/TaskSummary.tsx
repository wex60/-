import React from 'react';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import type { Task } from '../../types';

interface Props {
  tasks?: Task[];
}

export function TaskSummary({ tasks = [] }: Props) {
  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  const pendingTasks = tasks.filter(task => task.status === 'pending').length;
  const inProgressTasks = tasks.filter(task => task.status === 'in-progress').length;
  const totalTasks = tasks.length;

  const stats = [
    {
      name: 'المهام المكتملة',
      value: completedTasks,
      icon: CheckCircle2,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'قيد التنفيذ',
      value: inProgressTasks,
      icon: Clock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'قيد الانتظار',
      value: pendingTasks,
      icon: AlertCircle,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)] p-6 transition-all duration-300 hover:shadow-[0_8px_30px_-5px_rgba(0,0,0,0.1)]">
      <h3 className="text-lg font-semibold mb-4">ملخص المهام</h3>
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className={`${stat.bgColor} rounded-lg p-4 transition-transform duration-300 hover:-translate-y-0.5`}
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className={`h-5 w-5 ${stat.color}`} />
                <span className="text-sm text-gray-600">
                  {totalTasks > 0 ? ((stat.value / totalTasks) * 100).toFixed(0) : 0}%
                </span>
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}