import React, { useState } from 'react';
import { User, Briefcase, Building2, Calendar, Mail } from 'lucide-react';
import type { Employee } from '../../types';

interface Props {
  onSubmit: (employee: Omit<Employee, 'id'>) => void;
  onCancel: () => void;
}

export function AddEmployeeForm({ onSubmit, onCancel }: Props) {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    department: '',
    email: '',
    joinDate: new Date().toISOString().split('T')[0],
    managerId: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            اسم الموظف
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="block w-full rounded-md border-gray-300 pr-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="الاسم الكامل"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            البريد الإلكتروني
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="block w-full rounded-md border-gray-300 pr-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="example@company.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            المنصب الوظيفي
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <Briefcase className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              required
              value={formData.position}
              onChange={(e) => setFormData({ ...formData, position: e.target.value })}
              className="block w-full rounded-md border-gray-300 pr-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="المسمى الوظيفي"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            القسم
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <Building2 className="h-5 w-5 text-gray-400" />
            </div>
            <select
              required
              value={formData.department}
              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              className="block w-full rounded-md border-gray-300 pr-10 focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">اختر القسم</option>
              <option value="it">تقنية المعلومات</option>
              <option value="hr">الموارد البشرية</option>
              <option value="finance">المالية</option>
              <option value="marketing">التسويق</option>
              <option value="operations">العمليات</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            تاريخ الالتحاق
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="date"
              required
              value={formData.joinDate}
              onChange={(e) => setFormData({ ...formData, joinDate: e.target.value })}
              className="block w-full rounded-md border-gray-300 pr-10 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          إلغاء
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
        >
          إضافة الموظف
        </button>
      </div>
    </form>
  );
}