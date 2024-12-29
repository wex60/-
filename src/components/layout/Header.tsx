import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { Modal } from '../shared/Modal';
import { ProfileEditor } from '../profile/ProfileEditor';

export function Header() {
  const { user } = useAuth();
  const [showProfileEditor, setShowProfileEditor] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6">
      <div className="flex items-center justify-end space-x-4">
        <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full">
          <Bell className="h-6 w-6" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div 
          className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
          onClick={() => setShowProfileEditor(true)}
        >
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">{user?.name}</p>
            <p className="text-xs text-gray-500">
              {user?.role === 'admin' ? 'مدير النظام' : 'موظف'}
            </p>
          </div>
          <img
            src={user?.profileImage}
            alt={user?.name}
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
      </div>

      <Modal
        isOpen={showProfileEditor}
        onClose={() => setShowProfileEditor(false)}
        title="تعديل الملف الشخصي"
      >
        <ProfileEditor />
      </Modal>
    </header>
  );
}