import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  base: '/vue-image-zooom/',
  plugins: [
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  },
  build: {
    outDir: 'docs',
  },
});
