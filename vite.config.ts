import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'

export default defineConfig({
  plugins: [react(), chunkSplitPlugin()],
  define: {
    'process.env': process.env,
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
})
