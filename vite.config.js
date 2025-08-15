import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';

import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
   build: {
    target: 'esnext',        // ensures latest JS syntax support
    minify: 'esbuild',       // faster minification
  },
  optimizeDeps: {
    include: ['react-toastify'], // pre-bundle react-toastify to avoid "use client" errors
  },
  resolve: {
    alias: {
      '@': '/src',           // optional, if you use '@' for src imports
    },
  },
})