import React from 'react';
import ReactDOM from 'react-dom';

import { analyticsInit } from './analytics';
import App from './App';

analyticsInit();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
