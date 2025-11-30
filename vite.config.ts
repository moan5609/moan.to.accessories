import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 部署設定：使用相對路徑並輸出到 docs 資料夾
export default defineConfig({
  plugins: [react()],
  // 設置 base 為 './' (相對路徑) 解決 GitHub Pages 的路徑問題
  base: './', 
  build: {
    // 設置輸出目錄為 'docs'，這是 GitHub Pages 推薦使用的資料夾名稱
    outDir: 'docs', 
  }
})
