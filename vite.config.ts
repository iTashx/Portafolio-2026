/* Creado por: Angel Rojas - Portafolio V2 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './', // Mano, esto es clave para que los assets carguen al pelo en GitHub Pages o cualquier hosting sin configurar nada más.
})

