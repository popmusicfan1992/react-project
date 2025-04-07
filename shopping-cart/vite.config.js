import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// Đặt base phù hợp với URL deploy của bạn
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My React App',
        short_name: 'ReactApp',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        icons: [
          {
            src: '/logo.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/logo.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  base: '/react-project/shopping-cart/' // Thay đổi "react-project" theo tên repository của bạn
})
