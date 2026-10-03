import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// SINGLE=1 inlines JS, CSS and images into one HTML file for sharing as a preview.
export default defineConfig({
  plugins: [react(), tailwindcss(), ...(process.env.SINGLE ? [viteSingleFile()] : [])],
  build: { assetsInlineLimit: process.env.SINGLE ? 100_000_000 : 4096 },
})
