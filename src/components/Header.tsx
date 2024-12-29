import React from 'react';
import { ClipboardList } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center">
        <ClipboardList className="w-8 h-8 mr-3" />
        <h1 className="text-2xl font-bold">نظام إدارة مهام الموظفين</h1>
      </div>
    </header>
  );
}