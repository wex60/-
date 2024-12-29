import React from 'react';
import { LayoutDashboard, Users, CheckSquare, LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigation } from '../../providers/NavigationProvider';

export function Sidebar() {
  const { logout } = useAuth();
  const { currentView, setCurrentView } = useNavigation();

  const menuItems = [
    { id: 'dashboard' as const, icon: LayoutDashboard, label: 'لوحة التحكم' },
    { id: 'employees' as const, icon: Users, label: 'الموظفين' },
    { id: 'tasks' as const, icon: CheckSquare, label: 'المهام' }
  ];

  return (
    <aside className="w-64 bg-white border-l border-gray-200 h-screen sticky top-0">
      <div className="flex flex-col h-full">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900">نظام الأداء</h1>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5 ml-2" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button 
            onClick={logout}
            className="w-full flex items-center px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors mt-2"
          >
            <LogOut className="h-5 w-5 ml-2" />
            <span className="font-medium">تسجيل الخروج</span>
          </button>
        </div>
      </div>
    </aside>
  );
}