import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 確保 GitHub Pages 路徑正確
  build: {
    outDir: 'docs', // 產出 docs 資料夾
    emptyOutDir: true,
  }
})