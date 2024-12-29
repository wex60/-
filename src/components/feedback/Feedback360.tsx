import React from 'react';
import { MessageCircle, UserCheck } from 'lucide-react';

interface Feedback {
  id: string;
  from: string;
  relationship: 'manager' | 'peer' | 'subordinate' | 'self';
  content: string;
  date: string;
  category: string;
}

interface Props {
  feedbackList: Feedback[];
  onSubmitFeedback: (feedback: Omit<Feedback, 'id' | 'date'>) => void;
}

export function Feedback360({ feedbackList, onSubmitFeedback }: Props) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">التغذية الراجعة 360 درجة</h2>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">إضافة تغذية راجعة جديدة</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              نوع العلاقة
            </label>
            <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              <option value="peer">زميل</option>
              <option value="manager">مدير</option>
              <option value="subordinate">مرؤوس</option>
              <option value="self">تقييم ذاتي</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              الفئة
            </label>
            <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              <option value="skills">المهارات المهنية</option>
              <option value="communication">التواصل</option>
              <option value="leadership">القيادة</option>
              <option value="teamwork">العمل الجماعي</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              التغذية الراجعة
            </label>
            <textarea
              rows={4}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="اكتب تغذيتك الراجعة هنا..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            إرسال التغذية الراجعة
          </button>
        </form>
      </div>

      <div className="space-y-6">
        {feedbackList.map((feedback) => (
          <div key={feedback.id} className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <UserCheck className="w-5 h-5 ml-2 text-blue-600" />
                <span className="font-medium">{feedback.from}</span>
                <span className="mx-2">•</span>
                <span className="text-sm text-gray-600">{feedback.relationship}</span>
              </div>
              <span className="text-sm text-gray-500">
                {new Date(feedback.date).toLocaleDateString('ar-SA')}
              </span>
            </div>
            <p className="text-gray-700">{feedback.content}</p>
            <div className="mt-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {feedback.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}