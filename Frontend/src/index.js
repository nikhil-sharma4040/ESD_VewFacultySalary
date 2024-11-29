import React from 'react';
import ReactDOM from 'react-dom/client';

// react-dom/client:

// A part of the React library introduced in React 18.
// It contains the tools necessary for rendering React components in the browser DOM (client-side).
// This module replaces the older react-dom for rendering React apps.
// ReactDOM:

// The object imported from react-dom/client provides the createRoot method.
// createRoot is used to create a "root" React rendering context for a specific DOM element in your HTML (like <div id="root"></div>).

import './index.css';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <App />
  </React.StrictMode>

);
// Imports the core React library.
// Details: React provides the tools and API for creating components, handling JSX, and managing application state and rendering.