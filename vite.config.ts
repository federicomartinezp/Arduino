import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      // This is crucial to keep your existing 'process.env.API_KEY' code working
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});