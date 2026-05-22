/*
  Archivo: main.tsx
  Descripción: Punto de entrada de la aplicación React. Crea el árbol de componentes y lo monta en el div con id 'root'.
  Comentario: Se usa StrictMode para detectar problemas potenciales en desarrollo.
*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css' // Mano, aquí apuntamos al CSS global centralizado con Tailwind v4
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

