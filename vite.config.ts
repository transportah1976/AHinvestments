import { defineConfig, Plugin } from 'vite'
import path from 'path'
import fs from 'fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// =============================================================================
// Maps figma:asset/HASH.png → /assets/FILENAME.png at BUILD TIME ONLY.
// In serve mode (Figma Make preview) this plugin does NOT exist at all,
// so Figma Make's built-in resolver handles figma:asset natively.
//
// Before deploy, place these files in public/assets/:
//   logo.png, transport.png, stretch-film.png, cornerboards.png,
//   airbags.png, cardboard.png, strapping.png
// =============================================================================
const figmaAssetMap: Record<string, string> = {
  'a266568bddcde42826338ac9082adbaba10bb5c5.png': '/assets/logo.png',
  '5b73e6c3adf9be9d27c1a5f9d947f37f274bc7c8.png': '/assets/transport.png',
  '001c1621aa22ab2a478a5698f77be9dce320de31.png': '/assets/stretch-film.png',
  'f19d04960bd150641072a4892397eaf4c8972f04.png': '/assets/cornerboards.png',
  '615adbc2858537fb510867afcd2ccc3e9ef8c15d.png': '/assets/airbags.png',
  '9dd47ef7c9ec4258539938b19df7e46c67c43f9c.png': '/assets/cardboard.png',
  '35b151ef7d05debd29efdcb48671afaa16d85c81.png': '/assets/strapping.png',
}

function figmaAssetBuildPlugin(): Plugin {
  return {
    name: 'figma-asset-build',
    enforce: 'pre',
    resolveId(source) {
      if (source.startsWith('figma:asset/')) {
        const filename = source.replace('figma:asset/', '')
        if (figmaAssetMap[filename]) {
          return { id: `\0figma-asset:${filename}`, moduleSideEffects: false }
        }
      }
      return null
    },
    load(id) {
      if (id.startsWith('\0figma-asset:')) {
        const filename = id.replace('\0figma-asset:', '')
        const publicPath = figmaAssetMap[filename] || `/assets/${filename}`
        return `export default ${JSON.stringify(publicPath)};`
      }
      return null
    },
  }
}

// Generates _redirects file for Cloudflare Pages / Netlify SPA routing
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

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    tailwindcss(),
    // ONLY add figma asset resolver during build — never during serve (preview)
    ...(command === 'build' ? [figmaAssetBuildPlugin()] : []),
    spaRedirectPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
}))
