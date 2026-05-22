/* Creado por: Angel Rojas - Portafolio V2 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css' // Mano, aquí apuntamos al CSS global centralizado con Tailwind v4
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

