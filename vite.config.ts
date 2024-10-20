import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from 'vite-plugin-commonjs';

export default defineConfig({
  plugins: [react(), commonjs()],
    build: {
        rollupOptions: {
            output: {
                format: 'es', // Garante que o formato de saída seja ES Modules
            },
        },
    },
  server: {
    proxy: {
            '/api': {
                target: 'https://www.pexels.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
  },
});