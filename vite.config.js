import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/dsbsed-website/', // Replace 'your-repo-name' with your GitHub repository name
});
