import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "",
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  build: {
    outDir: "docs",
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue'],
          'vue-image-zooom': ['vue-image-zooom'],
          'vue-code-block': ['@wdns/vue-code-block'],
          prism: ['prismjs'],
        },
      },
    },
  },
});
