import React, { useState, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import type { User } from '../types/auth';

// Admin credentials
const ADMIN_EMAIL = 'admin@admin.wex';
const ADMIN_PASSWORD = '12345678';

interface Props {
  children: React.ReactNode;
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = async (email: string, password: string) => {
    // Validate admin credentials
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const adminUser: User = {
        id: '1',
        name: 'أحمد محمد',
        email: ADMIN_EMAIL,
        role: 'admin',
        profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
      };
      setUser(adminUser);
      return;
    }

    // For demo purposes, allow any other login as regular user
    if (email && password.length >= 8) {
      const regularUser: User = {
        id: Date.now().toString(),
        name: 'موظف',
        email,
        role: 'user',
        profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
      };
      setUser(regularUser);
      return;
    }

    throw new Error('بيانات الدخول غير صحيحة');
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
    }
  };

  const value = {
    user,
    login,
    logout,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}