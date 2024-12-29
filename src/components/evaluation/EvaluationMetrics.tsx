import React from 'react';
import { Sliders, BarChart2 } from 'lucide-react';
import type { PerformanceMetric } from '../../types/evaluation';

interface Props {
  metrics: PerformanceMetric[];
  onMetricChange: (metricId: string, value: number) => void;
  onCommentChange: (metricId: string, comment: string) => void;
}

export function EvaluationMetrics({ metrics, onMetricChange, onCommentChange }: Props) {
  return (
    <div className="space-y-6">
      {metrics.map((metric) => (
        <div key={metric.id} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <BarChart2 className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold">{metric.name}</h3>
            </div>
            <span className="text-sm text-gray-500">
              الوزن: {metric.weight}%
            </span>
          </div>
          
          <p className="text-gray-600 mb-4">{metric.description}</p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                التقييم (1-5)
              </label>
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                onChange={(e) => onMetricChange(metric.id, Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ملاحظات
              </label>
              <textarea
                rows={3}
                onChange={(e) => onCommentChange(metric.id, e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="أضف ملاحظاتك هنا..."
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}