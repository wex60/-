import React, { useState } from 'react';
import type { EvaluationForm, EvaluationCriteria } from '../../types';

interface Props {
  criteria: EvaluationCriteria[];
  onSubmit: (form: EvaluationForm) => void;
  onSaveDraft: (form: EvaluationForm) => void;
}

export function EvaluationForm({ criteria, onSubmit, onSaveDraft }: Props) {
  const [scores, setScores] = useState<Record<string, number>>({});
  const [comments, setComments] = useState<Record<string, string>>({});

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">نموذج تقييم الأداء</h2>
      
      {criteria.map((criterion) => (
        <div key={criterion.id} className="mb-8">
          <h3 className="text-xl font-semibold mb-4">{criterion.name}</h3>
          <p className="text-gray-600 mb-4">{criterion.description}</p>
          
          {criterion.subCriteria.map((sub) => (
            <div key={sub.id} className="mb-6">
              <h4 className="text-lg font-medium mb-2">{sub.name}</h4>
              <p className="text-gray-600 mb-4">{sub.description}</p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium text-gray-700">التقييم:</label>
                  <select
                    value={scores[sub.id] || ''}
                    onChange={(e) => setScores({
                      ...scores,
                      [sub.id]: Number(e.target.value)
                    })}
                    className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">اختر التقييم</option>
                    {sub.scoringGuide.map((level) => (
                      <option key={level.score} value={level.score}>
                        {level.score} - {level.description}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ملاحظات
                  </label>
                  <textarea
                    value={comments[sub.id] || ''}
                    onChange={(e) => setComments({
                      ...comments,
                      [sub.id]: e.target.value
                    })}
                    rows={3}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
      
      <div className="flex justify-end space-x-4">
        <button
          onClick={() => onSaveDraft({
            // Form data...
          } as EvaluationForm)}
          className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
        >
          حفظ كمسودة
        </button>
        <button
          onClick={() => onSubmit({
            // Form data...
          } as EvaluationForm)}
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          إرسال التقييم
        </button>
      </div>
    </div>
  );
}