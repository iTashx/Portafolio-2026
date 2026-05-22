/* Creado por: Angel Rojas - Portafolio V2 */
import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

/**
 * Componente MainLayout
 * Mano, este es el contenedor global de todo tu portafolio.
 * Aquí le inyectamos la grilla de fondo decorativa (.grid-bg) y las esferas de
 * luz neon (.gradient-glow) en los bordes para darle ese toque oscuro e inmersivo.
 * Metemos el Navbar arriba y el Footer abajo, tranqui que esto conecta solo.
 */
export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-dark-bg text-slate-100 overflow-x-hidden font-sans selection:bg-brand-blue/30 selection:text-white">
      {/* Efectos visuales de fondo (Aesthetics premium) */}
      <div className="absolute inset-0 z-0 pointer-events-none grid-bg opacity-45" />
      
      {/* Burbujas de luz ambientadora */}
      <div className="absolute top-[10%] left-[-15%] z-0 pointer-events-none gradient-glow opacity-95 animate-pulse-slow" />
      <div className="absolute bottom-[15%] right-[-15%] z-0 pointer-events-none gradient-glow opacity-75" />
      <div className="absolute top-[50%] left-[40%] z-0 pointer-events-none gradient-glow opacity-50 w-[300px] h-[300px] bg-brand-purple/10 blur-[100px]" />

      {/* Navegación de la aplicación */}
      <Navbar />

      {/* Contenedor de las Secciones */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-16 min-h-[calc(100vh-180px)]">
        {children}
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
};
