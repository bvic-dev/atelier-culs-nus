import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  // Utilisez cette valeur pour GitHub Pages ou changez-la en fonction de votre dépôt
  base: '/atelier-culs-nus/',
})
