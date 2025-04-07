import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Đặt base phù hợp với URL deploy của bạn
export default defineConfig({
  plugins: [react()],
  base: '/react-project/' // Thay đổi "react-project" theo tên repository của bạn
})
