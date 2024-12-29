import React, { createContext, useContext, useState } from 'react';

type View = 'dashboard' | 'employees' | 'tasks';

interface NavigationContextType {
  currentView: View;
  setCurrentView: (view: View) => void;
}

const NavigationContext = createContext<NavigationContextType | null>(null);

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
}

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [currentView, setCurrentView] = useState<View>('dashboard');

  return (
    <NavigationContext.Provider value={{ currentView, setCurrentView }}>
      {children}
    </NavigationContext.Provider>
  );
}