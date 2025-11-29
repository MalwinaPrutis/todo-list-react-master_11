// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
// USUWAMY: import './index.css'; 
// USUWAMY: import * as serviceWorker from './serviceWorker'; 
import App from './App';
import { theme } from './theme'; 
import { GlobalStyle } from './GlobalStyle';
import { Provider } from 'react-redux'; // Wracamy do Provider
import store from './store'; // Wracamy do importu store

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* TERAZ Provider działa, bo mamy store.js! */}
    <Provider store={store}>
      <ThemeProvider theme={theme}> 
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);