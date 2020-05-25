import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './styles/global';
import gridTheme from './styles/gridTheme';
import { GridThemeProvider } from 'styled-bootstrap-grid';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <GridThemeProvider gridTheme={gridTheme}>
      <App />
    </GridThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
