import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
       
        '@mui/icons-material/keyboardArrowRight',
      ],
    },
  },
  resolve: {
    alias: {
      '@mui/icons-material': '@mui/icons-material'
    }
  }
});
