import { defineConfig, Plugin } from 'vite'
import path from 'path'
import fs from 'fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// =============================================================================
// Maps figma:asset/HASH.png → /assets/FILENAME.png during build.
// Before deploy, place your image files in public/assets/.
// =============================================================================
const figmaAssetMap: Record<string, string> = {
  'a266568bddcde42826338ac9082adbaba10bb5c5.png': '/assets/logo.png',
  '5b73e6c3adf9be9d27c1a5f9d947f37f274bc7c8.png': '/assets/transport.png',
  '001c1621aa22ab2a478a5698f77be9dce320de31.png': '/assets/stretch-film.png',
  'f19d04960bd150641072a4892397eaf4c8972f04.png': '/assets/cornerboards.png',
  '615adbc2858537fb510867afcd2ccc3e9ef8c15d.png': '/assets/airbags.png',
  '9e6c9b57ac35bd434c1af5560663be633878b965.png': '/assets/airbags.png',
  '9dd47ef7c9ec4258539938b19df7e46c67c43f9c.png': '/assets/cardboard.png',
  '35b151ef7d05debd29efdcb48671afaa16d85c81.png': '/assets/strapping.png',
  'tuleje_placeholder.png': '/assets/cardboard-tubes.png',
}

function figmaAssetPlugin(): Plugin {
  return {
    name: 'figma-asset',
    enforce: 'pre',
    apply: 'build', // <-- Only map to /assets/ during build. In dev, let the Sandbox's built-in plugin fetch from Figma!
    resolveId(source) {
      if (source.startsWith('figma:asset/')) {
        return '\0' + source  // Prefix with \0 to mark as virtual module
      }
      return null
    },
    load(id) {
      if (id.startsWith('\0figma:asset/')) {
        const filename = id.replace('\0figma:asset/', '')
        const mappedName = figmaAssetMap[filename] || filename
        // Prosta ścieżka absolutna - to rozwiązuje problem z crashowaniem aplikacji
        // (import.meta.env.BASE_URL nie działa w modułach z prefiksem \\0 na produkcji)
        return `export default "${mappedName}";`
      }
      return null
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetPlugin(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
