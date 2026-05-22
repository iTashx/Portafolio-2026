/* Creado por: Angel Rojas - Portafolio V2 */
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  hoverGlow?: boolean;
}

/**
 * Componente Card
 * Tranqui que esto conecta solo. Es una tarjeta premium con diseño "glassmorphic"
 * y un efecto de borde degradado resplandeciente (neon glow) cuando le pasas el mouse.
 * Ideal para listar proyectos, habilidades y redes sociales.
 */
export const Card: React.FC<CardProps> = ({
  className,
  children,
  onClick,
  hoverGlow = true,
}) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={onClick || hoverGlow ? { y: -6 } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={cn(
        'relative group rounded-2xl overflow-hidden bg-dark-card border border-dark-border p-6 transition-all duration-300 shadow-xl',
        onClick && 'cursor-pointer',
        hoverGlow && 'hover:border-transparent hover:shadow-2xl hover:shadow-indigo-500/10',
        className
      )}
    >
      {/* Fondo de resplandor para el borde en hover - Aquí le metemos sazón con gradientes */}
      {hoverGlow && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-cyan/20 via-brand-blue/10 to-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      
      {/* Contenido principal */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};
