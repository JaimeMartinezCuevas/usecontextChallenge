import './App.css'; // Archivo de estilos CSS

import React from 'react';

import { ThemeProvider } from './themes/ThemeContext';
import RoutesApp from './routes/RoutesApp';

const App = () => {
  return (
  <>
  <div className="App dark">

  <ThemeProvider>
    <RoutesApp />
  </ThemeProvider>
  </div>
  </>
  );
};

export default App;
