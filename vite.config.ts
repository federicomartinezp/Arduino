import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Esto previene que la app explote si process.env.API_KEY es undefined durante el build
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || '')
  }
});