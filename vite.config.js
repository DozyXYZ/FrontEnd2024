import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/FrontEnd2024/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
