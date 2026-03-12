import { defineConfig, Plugin } from 'vite'
import path from 'path'
import fs from 'fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Generates _redirects file for Cloudflare Pages SPA routing
function spaRedirectPlugin(): Plugin {
  return {
    name: 'spa-redirect',
    closeBundle() {
      const outDir = path.resolve(__dirname, 'dist')
      if (fs.existsSync(outDir)) {
        fs.writeFileSync(path.resolve(outDir, '_redirects'), '/* /index.html 200\n')
      }
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    spaRedirectPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
