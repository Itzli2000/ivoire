'use client'
import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';

export default function Template({ children }: {
  children: React.ReactNode
}) {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}