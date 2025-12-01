import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Import styles

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (err) {
    console.error("Application initialization error:", err);
    rootElement.innerHTML = `
      <div style="display: flex; height: 100vh; justify-content: center; align-items: center; text-align: center; font-family: sans-serif; color: #ef4444;">
        <div>
          <h1 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">Algo salió mal al iniciar la app</h1>
          <p>Por favor revisa la consola para más detalles.</p>
        </div>
      </div>
    `;
  }
}