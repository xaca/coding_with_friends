import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        // ...other output options
        assetFileNames: (assetInfo) => {
          // Customize asset file names and paths based on assetInfo
          return `assets/[name]-[hash].[ext]`;
        },
        manualChunks: {
          // ...manual chunk configuration
        },
        experimental: {
          renderBuiltUrl: (filename, publicPath) => {
            // Customize the URL for the given filename and publicPath
            // This is where you can apply your advanced base path logic
            return `${publicPath}/${filename}`;
          },
        },
      },
    },
  },
});  