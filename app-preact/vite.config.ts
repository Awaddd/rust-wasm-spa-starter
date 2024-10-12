import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  assetsInclude: ['**/*.wasm'],
  server: {
    port: 5173,
    fs: {
        allow: ['..'], // Adjust this based on your directory structure
    },
  },
})
