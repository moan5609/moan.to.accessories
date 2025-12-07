import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 確保相對路徑正確，避免 GitHub Pages 找不到資源
  build: {
    outDir: 'docs', // 關鍵：將打包結果輸出到 docs 資料夾
    emptyOutDir: true,
  }
})