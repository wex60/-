import { useState } from 'react';

type View = 'dashboard' | 'employees' | 'tasks';

export function useNavigation() {
  const [currentView, setCurrentView] = useState<View>('dashboard');

  return {
    currentView,
    setCurrentView
  };
}