import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {router} from "./Routes/Routes";
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import { CssBaseline } from '@mui/material';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);

