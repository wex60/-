import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { Calendar, Clock, User, AlertTriangle, Star } from 'lucide-react';
import { formatDateTime, getRemainingTime, isOverdue } from '../../utils/dateTime';
import { calculateCompletionRating } from '../../utils/taskRating';
import type { Task, Employee } from '../../types';

interface Props {
  task: Task;
  index: number;
  employee?: Employee;
  onStatusChange: (newStatus: Task['status']) => void;
}

export function TaskCard({ task, index, employee, onStatusChange }: Props) {
  const isTaskOverdue = isOverdue(task.dueDate);
  
  const priorityColors = {
    critical: 'bg-purple-100 text-purple-800',
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-green-100 text-green-800',
    'on-hold': 'bg-gray-100 text-gray-800'
  };

  const priorityLabels = {
    critical: 'حرج',
    high: 'عالية',
    medium: 'متوسطة',
    low: 'منخفضة',
    'on-hold': 'معلق'
  };

  const speedRating = task.completedDate ? calculateCompletionRating(task) : null;
  const speedRatingColors = {
    excellent: 'text-green-600',
    good: 'text-blue-600',
    fair: 'text-yellow-600',
    'needs-improvement': 'text-red-600'
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`bg-white rounded-lg border p-4 hover:shadow-md transition-shadow ${
            isTaskOverdue && task.status !== 'completed' ? 'border-red-300' : 'border-gray-200'
          }`}
        >
          <div className="flex justify-between items-start mb-3">
            <h4 className="font-medium text-gray-900">{task.title}</h4>
            <span className={`text-xs px-2 py-1 rounded-full ${priorityColors[task.priority]}`}>
              {priorityLabels[task.priority]}
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-4">{task.description}</p>

          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between text-gray-500">
              <div className="flex items-center">
                <User className="h-4 w-4 ml-1" />
                <span>{employee?.name || 'غير محدد'}</span>
              </div>

              <div className="flex items-center">
                <Calendar className="h-4 w-4 ml-1" />
                <span>{formatDateTime(task.startDate)}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="h-4 w-4 ml-1" />
                <span>{formatDateTime(task.dueDate)}</span>
              </div>

              {isTaskOverdue && task.status !== 'completed' && (
                <div className="flex items-center text-red-600">
                  <AlertTriangle className="h-4 w-4 ml-1" />
                  <span>{getRemainingTime(task.dueDate)}</span>
                </div>
              )}
            </div>

            {speedRating && (
              <div className="flex items-center mt-2">
                <Star className={`h-4 w-4 ml-1 ${speedRatingColors[speedRating]}`} />
                <span className={speedRatingColors[speedRating]}>
                  {speedRating === 'excellent' ? 'ممتاز' :
                   speedRating === 'good' ? 'جيد' :
                   speedRating === 'fair' ? 'مقبول' : 'يحتاج تحسين'}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
}