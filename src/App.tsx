import React from 'react';
import { AuthProvider } from './providers/AuthProvider';
import { NavigationProvider } from './providers/NavigationProvider';
import { AppContent } from './components/AppContent';

function App() {
  return (
    <AuthProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </AuthProvider>
  );
}

export default App;