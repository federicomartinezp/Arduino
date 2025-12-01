import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Import CSS so Tailwind styles are applied

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
          <pre style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem; margin-top: 1rem; text-align: left; overflow: auto; max-width: 500px;">${err}</pre>
        </div>
      </div>
    `;
  }
} else {
  console.error("Could not find root element to mount to");
}