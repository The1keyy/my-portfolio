import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import global styles
import App from './App';
import reportWebVitals from './reportWebVitals'; // For performance tracking
import 'bootstrap/dist/css/bootstrap.min.css'; 

// Create a root element for rendering the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside React.StrictMode (helps with detecting potential issues)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Used for measuring app performance
// You can pass console.log or another function to capture performance metrics
reportWebVitals();
