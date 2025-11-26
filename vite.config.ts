import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 設定相對路徑
  build: {
    outDir: 'docs', // 將打包輸出位置改為 docs 資料夾
  }
})