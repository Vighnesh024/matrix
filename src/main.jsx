// In src/main.jsx or src/main.js (Vite’s entry point)
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'  // <-- This line is required to import Tailwind styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
