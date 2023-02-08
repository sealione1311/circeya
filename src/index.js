import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/global.scss';
import './assets/styles/normalize.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

