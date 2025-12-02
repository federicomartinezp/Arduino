import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  document.body.innerHTML = `
    <div style="color: red; padding: 20px; font-family: sans-serif;">
      <h1>Error Fatal</h1>
      <p>No se encontró el elemento con id="root" en el HTML.</p>
    </div>
  `;
} else {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (err: any) {
    console.error("Critical Render Error:", err);
    // Visual Debugger: Render error to screen directly into body to bypass React
    document.body.innerHTML = `
      <div style="background-color: #fef2f2; color: #991b1b; padding: 2rem; font-family: sans-serif; height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <div style="max-width: 600px; background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border: 1px solid #fecaca;">
          <h1 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; color: #ef4444;">❌ La App no pudo iniciar</h1>
          <p style="margin-bottom: 1rem;">Se ha detectado un error crítico durante el arranque.</p>
          <div style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 4px; overflow-x: auto; font-family: monospace; font-size: 0.9rem;">
            ${err?.message || String(err)}
          </div>
          <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #64748b;">
            Intenta recargar la página. Si el error persiste, verifica la consola de desarrollador (F12).
          </p>
        </div>
      </div>
    `;
  }
}