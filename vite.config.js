import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  //開發中、產品路徑
  // eslint-disable-next-line no-undef
  base: process.env.NODE_ENV === 'production' ? 
  '/React-gh-pages-sample/' : '/',
  plugins: [react()],
})