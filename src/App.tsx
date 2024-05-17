import React from 'react';
import logo from './logo.svg';
import { CssBaseline, Typography, Toolbar } from '@mui/material';
import { Outlet } from 'react-router';
import { styled } from '@mui/system';
import Navbar from './Components/NavBar';

function App() {
  return (
    <div style={{ display: 'flex' }}>
    <CssBaseline />
    <Navbar/>
    <Outlet/>
    </div>
  );
}

export default App;
