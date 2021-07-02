import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navigation from './Navigation';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <Navigation />
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
