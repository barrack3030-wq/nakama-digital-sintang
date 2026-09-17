import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/nakama-digital-sintang/',
  plugins: [react(), tailwindcss()],
});