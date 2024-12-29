import React, { useState } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import { Plus } from 'lucide-react';
import { TaskColumn } from './TaskColumn';
import { TaskFilter } from './TaskFilter';
import type { Task, Employee } from '../../types';

interface Props {
  tasks: Task[];
  employees: Employee[];
  onAddTask: () => void;
  onUpdateTaskStatus: (taskId: string, newStatus: Task['status']) => void;
}

export function TaskBoard({ tasks, employees, onAddTask, onUpdateTaskStatus }: Props) {
  const [filter, setFilter] = useState({
    status: 'all',
    employee: 'all',
    priority: 'all'
  });

  const columns = [
    { id: 'pending', title: 'قيد الانتظار' },
    { id: 'in-progress', title: 'قيد التنفيذ' },
    { id: 'completed', title: 'مكتملة' }
  ] as const;

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const { draggableId, destination } = result;
    onUpdateTaskStatus(draggableId, destination.droppableId as Task['status']);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter.status !== 'all' && task.status !== filter.status) return false;
    if (filter.employee !== 'all' && task.employeeId !== filter.employee) return false;
    if (filter.priority !== 'all' && task.priority !== filter.priority) return false;
    return true;
  });

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="h-full">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">لوحة المهام</h2>
            <p className="text-gray-600 mt-1">إدارة وتتبع مهام الفريق</p>
          </div>
          <button
            onClick={onAddTask}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="h-5 w-5 ml-2" />
            مهمة جديدة
          </button>
        </div>

        <TaskFilter 
          employees={employees} 
          filter={filter} 
          onFilterChange={setFilter} 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {columns.map(column => (
            <TaskColumn
              key={column.id}
              status={column.id}
              title={column.title}
              tasks={filteredTasks.filter(task => task.status === column.id)}
              employees={employees}
              onUpdateStatus={onUpdateTaskStatus}
            />
          ))}
        </div>
      </div>
    </DragDropContext>
  );
}