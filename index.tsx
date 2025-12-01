import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (err: any) {
    console.error("Critical Initialization Error:", err);
    // Visual Debugger: Render error to screen so user sees it instead of white screen
    rootElement.innerHTML = `
      <div style="padding: 2rem; color: #ef4444; font-family: sans-serif;">
        <h1 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">Error de Inicialización</h1>
        <p>La aplicación no pudo arrancar. Detalles técnicos:</p>
        <pre style="background: #fef2f2; padding: 1rem; border-radius: 0.5rem; border: 1px solid #fecaca; overflow: auto;">
          ${err.message || JSON.stringify(err)}
        </pre>
        <p style="margin-top: 1rem; color: #666;">Por favor revisa la consola del navegador (F12) para más detalles.</p>
      </div>
    `;
  }
} else {
  document.body.innerHTML = '<h1 style="color:red">Error Fatal: No se encontró el div #root en index.html</h1>';
}