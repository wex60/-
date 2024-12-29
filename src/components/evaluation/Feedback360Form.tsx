import React, { useState } from 'react';
import { MessageCircle, UserCheck } from 'lucide-react';
import type { Feedback360 } from '../../types/evaluation';

interface Props {
  employeeId: string;
  onSubmit: (feedback: Omit<Feedback360, 'id' | 'createdAt'>) => void;
}

export function Feedback360Form({ employeeId, onSubmit }: Props) {
  const [formData, setFormData] = useState({
    content: '',
    relationshipType: 'peer' as const,
    category: 'skills',
    isAnonymous: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      employeeId,
      fromId: 'current-user-id', // Replace with actual user ID
      ...formData
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg shadow p-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            نوع العلاقة
          </label>
          <select
            value={formData.relationshipType}
            onChange={(e) => setFormData({
              ...formData,
              relationshipType: e.target.value as any
            })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="peer">زميل</option>
            <option value="manager">مدير</option>
            <option value="subordinate">مرؤوس</option>
            <option value="client">عميل</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            الفئة
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({
              ...formData,
              category: e.target.value
            })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="skills">المهارات المهنية</option>
            <option value="communication">التواصل</option>
            <option value="leadership">القيادة</option>
            <option value="teamwork">العمل الجماعي</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            التغذية الراجعة
          </label>
          <textarea
            value={formData.content}
            onChange={(e) => setFormData({
              ...formData,
              content: e.target.value
            })}
            rows={4}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="اكتب ملاحظاتك وتقييمك هنا..."
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="anonymous"
            checked={formData.isAnonymous}
            onChange={(e) => setFormData({
              ...formData,
              isAnonymous: e.target.checked
            })}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="anonymous" className="mr-2 text-sm text-gray-700">
            تقديم تغذية راجعة مجهولة المصدر
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <MessageCircle className="h-5 w-5 ml-2" />
        إرسال التغذية الراجعة
      </button>
    </form>
  );
}