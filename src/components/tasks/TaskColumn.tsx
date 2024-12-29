import React from 'react';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import { TaskCard } from './TaskCard';
import type { Task, Employee } from '../../types';

interface Props {
  status: Task['status'];
  title: string;
  tasks: Task[];
  employees: Employee[];
  onUpdateStatus: (taskId: string, newStatus: Task['status']) => void;
}

export function TaskColumn({ status, title, tasks, employees, onUpdateStatus }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <span className="px-2.5 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
            {tasks.length}
          </span>
        </div>
      </div>

      <Droppable droppableId={status}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="p-4 space-y-4 min-h-[200px]"
          >
            {tasks.map((task, index) => (
              <TaskCard
                key={task.id}
                task={task}
                index={index}
                employee={employees.find(e => e.id === task.employeeId)}
                onStatusChange={(newStatus) => onUpdateStatus(task.id, newStatus)}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}