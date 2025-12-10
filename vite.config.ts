import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // Esto previene que la app explote si process.env.API_KEY es undefined durante el build
      'process.env.API_KEY': JSON.stringify(env.API_KEY || '')
    }
  };
});