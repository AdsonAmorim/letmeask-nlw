import React from 'react';
import { GlobalStyle } from './styles/global';
import { AppRoutes } from './Routes';

export function App() {
  return (
    <div className="App">
      <AppRoutes />
      <GlobalStyle />
    </div>
  );
}
