import React from 'react';
import { CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <Outlet />
      </div>
    </AuthProvider>
  );
}

export default App;
