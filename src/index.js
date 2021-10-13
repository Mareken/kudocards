import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './context/Theme';

import './i18n';

if (process.env.NODE_ENV !== "development") {
  console.log = () => {};
  console.warn = () => {};
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
