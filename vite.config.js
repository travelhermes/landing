import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  root: "src/",
  minify: 'esbuild',
  assetsInclude: ['**/*.jpg', '**/*.png'],
  css: {
    preprocessorOptions: {
      scss: {
        charset: false
      }
    }
  },
  build: {
    minify: false
  }
})
