import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainApp from './main_App';
import './Login_Page.css';
 

// Ensure this path is correct  for your project structure              

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);

reportWebVitals();
