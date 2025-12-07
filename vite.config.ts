import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 關鍵：確保資源使用相對路徑，避免在 GitHub Pages 出現 404
  build: {
    outDir: 'docs', // 關鍵：將打包結果輸出到 docs 資料夾，這是 GitHub Pages 的標準設定之一
    emptyOutDir: true, // 每次打包前清空資料夾
  }
})