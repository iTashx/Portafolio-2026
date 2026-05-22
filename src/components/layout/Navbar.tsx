/* Creado por: Angel Rojas - Portafolio V2 */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { CONFIG } from '../../data/config';
import { cn } from '../../utils/cn';

/**
 * Componente Navbar
 * Mano, aquí le metemos sazón a la navegación. Flota en la parte superior,
 * tiene Glassmorphism que se activa al hacer scroll y un menú móvil animado
 * de calidad para que el cliente flipe.
 */
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Escuchamos el scroll para cambiar el estilo de fondo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#home' },
    { label: 'Sobre Mí', href: '#about' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'SocialsHub', href: '#socials' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12',
          scrolled 
            ? 'bg-dark-bg/85 backdrop-blur-md border-b border-dark-border shadow-lg shadow-black/10 py-3' 
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo - Sencillo y elegante */}
          <a href="#home" className="flex items-center gap-2 group font-sans">
            <div className="p-2 rounded-lg bg-gradient-to-br from-brand-cyan/20 to-brand-purple/20 border border-slate-800 group-hover:border-brand-cyan transition-colors duration-300">
              <Code2 className="w-5 h-5 text-brand-cyan group-hover:text-brand-purple transition-colors duration-300" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-brand-cyan transition-colors duration-300">
              {CONFIG.name.split(' ')[0]}
              <span className="text-brand-cyan font-extrabold font-sans">.</span>
            </span>
          </a>

          {/* Menú de Escritorio (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1.5 group font-sans"
              >
                {link.label}
                {/* Underline animado en Hover */}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-cyan to-brand-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* Botón de Menú Móvil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Menú Móvil Flotante */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] left-0 w-full bg-dark-bg/95 backdrop-blur-lg border-b border-dark-border z-40 md:hidden px-6 py-8"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-lg font-medium text-slate-300 hover:text-brand-cyan transition-colors font-sans"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
