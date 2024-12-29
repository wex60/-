import { createContext } from 'react';
import type { User } from '../types/auth';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);