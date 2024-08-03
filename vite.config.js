// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio',
  plugins: [react()],
  server: {
    port: 3000,
    open: true, // Opens the browser after the server starts
  },
});
