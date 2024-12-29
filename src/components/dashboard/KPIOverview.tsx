import React from 'react';
import { TrendingUp, Users, CheckSquare } from 'lucide-react';

export function KPIOverview() {
  const kpis = [
    {
      title: 'إجمالي المهام',
      value: '24',
      change: '+12%',
      icon: CheckSquare,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'المهام المكتملة',
      value: '18',
      change: '+8%',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'الموظفين النشطين',
      value: '12',
      change: '+2',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {kpis.map((kpi) => {
        const Icon = kpi.icon;
        return (
          <div 
            key={kpi.title} 
            className="bg-white rounded-xl shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)] p-6 transition-all duration-300 hover:shadow-[0_8px_30px_-5px_rgba(0,0,0,0.1)] hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between">
              <div className={`p-2 rounded-lg ${kpi.bgColor}`}>
                <Icon className={`h-6 w-6 ${kpi.color}`} />
              </div>
              <span className="text-sm text-green-600 font-medium">
                {kpi.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold mt-4 text-gray-900">
              {kpi.value}
            </h3>
            <p className="text-gray-600 mt-1">{kpi.title}</p>
          </div>
        );
      })}
    </div>
  );
}