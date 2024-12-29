import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigation } from '../providers/NavigationProvider';
import { LoginForm } from './auth/LoginForm';
import { Dashboard } from './dashboard/Dashboard';
import { EmployeeList } from './employees/EmployeeList';
import { TaskBoard } from './tasks/TaskBoard';
import { Header } from './layout/Header';
import { Sidebar } from './layout/Sidebar';
import { Modal } from './shared/Modal';
import { AddEmployeeForm } from './employees/AddEmployeeForm';
import type { Employee } from '../types';

export function AppContent() {
  const { user } = useAuth();
  const { currentView } = useNavigation();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [showAddEmployee, setShowAddEmployee] = useState(false);

  if (!user) {
    return <LoginForm />;
  }

  const handleAddEmployee = (employeeData: Omit<Employee, 'id'>) => {
    const newEmployee: Employee = {
      id: Date.now().toString(),
      ...employeeData
    };
    setEmployees([...employees, newEmployee]);
    setShowAddEmployee(false);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'employees':
        return (
          <>
            <EmployeeList 
              employees={employees} 
              onAddEmployee={() => setShowAddEmployee(true)} 
              onSelectEmployee={() => {}} 
            />
            <Modal
              isOpen={showAddEmployee}
              onClose={() => setShowAddEmployee(false)}
              title="إضافة موظف جديد"
            >
              <AddEmployeeForm
                onSubmit={handleAddEmployee}
                onCancel={() => setShowAddEmployee(false)}
              />
            </Modal>
          </>
        );
      case 'tasks':
        return (
          <TaskBoard 
            tasks={[]} 
            employees={employees} 
            onAddTask={() => {}} 
            onUpdateTaskStatus={() => {}} 
          />
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex" dir="rtl">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}