/* Creado por: Angel Rojas - Portafolio V2 */
import React from 'react';
import { Heart } from 'lucide-react';
import { Github, Linkedin, Youtube, Twitter, Instagram } from '../ui/BrandIcons';
import { CONFIG, SOCIAL_LINKS } from '../../data/config';

/**
 * Componente Footer
 * Mano, este es el cierre del portafolio. Muestra tus créditos y enlaces
 * de redes sociales dinámicamente. Si dejas el link vacío en config.ts,
 * tranqui que no se renderiza.
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Mapeamos los enlaces sociales activos
  const socialIcons = [
    { name: 'github', url: SOCIAL_LINKS.github, icon: <Github className="w-5 h-5" /> },
    { name: 'linkedin', url: SOCIAL_LINKS.linkedin, icon: <Linkedin className="w-5 h-5" /> },
    { name: 'youtube', url: SOCIAL_LINKS.youtube, icon: <Youtube className="w-5 h-5" /> },
    { name: 'twitter', url: SOCIAL_LINKS.twitter, icon: <Twitter className="w-5 h-5" /> },
    { name: 'instagram', url: SOCIAL_LINKS.instagram, icon: <Instagram className="w-5 h-5" /> },
  ].filter(link => link.url); // Filtrar solo los que tengan URL

  return (
    <footer className="w-full border-t border-dark-border bg-dark-bg/60 py-10 px-6 md:px-12 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Marca del Footer */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-lg font-bold text-white tracking-wide">
            {CONFIG.name}
          </span>
          <p className="text-sm text-slate-400 font-sans text-center md:text-left">
            Construyendo el futuro de la web, un commit a la vez.
          </p>
        </div>

        {/* Iconos Sociales */}
        <div className="flex items-center gap-4">
          {socialIcons.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/40 transition-all duration-300 shadow-md cursor-pointer"
              aria-label={`Enlace a ${social.name}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Créditos de Copyright */}
        <div className="flex items-center gap-1.5 text-sm text-slate-500 font-sans">
          <span>&copy; {currentYear}</span>
          <span>&bull;</span>
          <span>Hecho con</span>
          <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
          <span>desde Venezuela.</span>
        </div>
      </div>
    </footer>
  );
};
