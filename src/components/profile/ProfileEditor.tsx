import React, { useState } from 'react';
import { Camera, Save } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import type { User } from '../../types/auth';

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png'];

export function ProfileEditor() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [imagePreview, setImagePreview] = useState<string | null>(user?.profileImage || null);
  const [isEditing, setIsEditing] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      alert('يرجى اختيار صورة بتنسيق JPG أو PNG فقط');
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      alert('حجم الصورة يجب أن لا يتجاوز 2 ميجابايت');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const updates: Partial<User> = {
      name,
      profileImage: imagePreview || undefined
    };

    updateProfile(updates);
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <div className="bg-white rounded-xl shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)] p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <img
              src={user?.profileImage}
              alt={user?.name}
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold">{user?.name}</h2>
              <p className="text-gray-600">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            تعديل الملف الشخصي
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)] p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="h-24 w-24 rounded-full overflow-hidden bg-gray-100">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-gray-400">
                  <Camera className="h-8 w-8" />
                </div>
              )}
            </div>
            <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-1.5 rounded-full hover:bg-blue-700 cursor-pointer">
              <Camera className="h-4 w-4" />
              <input
                type="file"
                accept="image/jpeg,image/png"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              الاسم
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            إلغاء
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
          >
            حفظ التغييرات
          </button>
        </div>
      </form>
    </div>
  );
}