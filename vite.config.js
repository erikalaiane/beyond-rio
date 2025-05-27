// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Detectar ambiente Netlify (process.env.NETLIFY) ou GitHub Pages
const isNetlify = process.env.NETLIFY === 'true'

export default defineConfig({
  base: isNetlify ? '/' : '/beyond-rio/',
  plugins: [react()]
})
