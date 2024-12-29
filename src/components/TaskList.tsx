import React from 'react';
import { Calendar, Clock, Star } from 'lucide-react';
import type { Task } from '../types';

interface Props {
  tasks: Task[];
  onTaskSelect: (task: Task) => void;
}

export function TaskList({ tasks, onTaskSelect }: Props) {
  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
    }
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('ar-SA');
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          onClick={() => onTaskSelect(task)}
          className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg">{task.title}</h3>
            <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(task.status)}`}>
              {status === 'pending' ? 'قيد الانتظار' : 
               status === 'in-progress' ? 'قيد التنفيذ' : 'مكتمل'}
            </span>
          </div>
          <p className="text-gray-600 mb-3">{task.description}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 ml-1" />
              <span>تاريخ التسليم: {formatDate(task.dueDate)}</span>
            </div>
            {task.completedDate && (
              <div className="flex items-center">
                <Clock className="w-4 h-4 ml-1" />
                <span>تاريخ الإنجاز: {formatDate(task.completedDate)}</span>
              </div>
            )}
            {task.rating && (
              <div className="flex items-center">
                <Star className="w-4 h-4 ml-1 text-yellow-400" />
                <span>التقييم: {task.rating}/5</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}