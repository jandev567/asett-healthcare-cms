import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '@cmsgov/design-system/css/index.css';
import '@cmsgov/design-system/css/core-theme.css';
// import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
