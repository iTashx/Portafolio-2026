/* Creado por: Angel Rojas - Portafolio V2 */
import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Play, VideoOff } from 'lucide-react';
import { Youtube, Github, Linkedin, Twitter } from '../ui/BrandIcons';
import { SOCIAL_LINKS, YOUTUBE_VIDEOS } from '../../data/config';
import { Card } from '../ui/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * Sección SocialsHub
 * Mano, aquí le metemos sazón a tu comunidad. Un hub con accesos a tus
 * redes sociales y placeholders para tus videos de YouTube.
 * Si pones tus URLs en src/data/config.ts, el sistema las vincula al pelo de una.
 */
export const SocialsHub: React.FC = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>(0.1);

  // Definimos las tarjetas de redes sociales configuradas
  const networks = [
    {
      name: 'GitHub',
      description: 'Revisa mis repositorios, aportes a código abierto y proyectos personales.',
      url: SOCIAL_LINKS.github,
      icon: <Github className="w-8 h-8 text-white group-hover:text-brand-cyan transition-colors" />,
      colorClass: 'hover:border-brand-cyan/40 hover:shadow-brand-cyan/5',
      badge: 'iTashx',
    },
    {
      name: 'LinkedIn',
      description: 'Conectemos a nivel profesional, revisa mi historial laboral y recomendaciones.',
      url: SOCIAL_LINKS.linkedin,
      icon: <Linkedin className="w-8 h-8 text-white group-hover:text-blue-500 transition-colors" />,
      colorClass: 'hover:border-blue-500/40 hover:shadow-blue-500/5',
      badge: 'Conectar',
    },
    {
      name: 'YouTube',
      description: 'Tutoriales, directos y explicaciones de arquitectura de software.',
      url: SOCIAL_LINKS.youtube,
      icon: <Youtube className="w-8 h-8 text-white group-hover:text-red-500 transition-colors" />,
      colorClass: 'hover:border-red-500/40 hover:shadow-red-500/5',
      badge: 'Suscribirse',
    },
    {
      name: 'Twitter / X',
      description: 'Comparto pensamientos diarios, tips de desarrollo y debates técnicos.',
      url: SOCIAL_LINKS.twitter,
      icon: <Twitter className="w-8 h-8 text-white group-hover:text-indigo-400 transition-colors" />,
      colorClass: 'hover:border-indigo-400/40 hover:shadow-indigo-400/5',
      badge: 'Seguir',
    },
  ];

  return (
    <section
      id="socials"
      ref={sectionRef as any}
      className="py-24 border-t border-slate-900 relative z-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Encabezado */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-brand-cyan uppercase tracking-widest px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
            <Share2 className="w-4 h-4" />
            <span>Comunidad</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans">
            Socials & Contenido
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full" />
        </div>

        {/* Bloque de YouTube */}
        <div className="flex flex-col gap-6 mt-4">
          <div className="flex items-center gap-2">
            <Youtube className="w-5 h-5 text-red-500" />
            <h3 className="text-xl font-bold text-slate-200 font-sans">Últimos Videos</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {YOUTUBE_VIDEOS.map((video) => (
              <motion.div
                key={video.id}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card hoverGlow={false} className="p-0 overflow-hidden bg-slate-950/60 border border-slate-900 flex flex-col h-full justify-between">
                  {/* Contenedor del video embed o placeholder si está vacío */}
                  {video.embedUrl ? (
                    <div className="relative aspect-video w-full">
                      <iframe
                        src={video.embedUrl}
                        title={video.title}
                        className="absolute inset-0 w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div className="aspect-video w-full bg-slate-900 flex flex-col items-center justify-center gap-3 relative border-b border-dark-border group cursor-pointer">
                      {/* Fondo abstracto premium para el video placeholder */}
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-slate-950/30 to-purple-950/20 opacity-60" />
                      <div className="p-4 rounded-full bg-slate-950 border border-slate-800 text-slate-400 group-hover:text-brand-cyan group-hover:border-brand-cyan/30 transition-all duration-300 relative z-10">
                        <Play className="w-8 h-8 fill-current" />
                      </div>
                      <span className="text-xs text-slate-500 font-mono tracking-wider relative z-10 flex items-center gap-1.5">
                        <VideoOff className="w-3.5 h-3.5" />
                        Placeholder - Introduce embedUrl en config.ts
                      </span>
                    </div>
                  )}

                  {/* Metadatos del Video */}
                  <div className="p-6 flex flex-col gap-2">
                    <h4 className="text-lg font-bold text-slate-200 font-sans tracking-wide">
                      {video.title}
                    </h4>
                    <p className="text-sm text-slate-400 font-sans leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tarjetas de Redes Sociales */}
        <div className="flex flex-col gap-6 mt-8">
          <div className="flex items-center gap-2">
            <Share2 className="w-5 h-5 text-brand-purple" />
            <h3 className="text-xl font-bold text-slate-200 font-sans">Canales de Comunicación</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {networks.map((network, idx) => (
              <motion.div
                key={network.name}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full"
              >
                {/* Si no hay URL configurada, la redirigimos a '#' pero sigue viéndose bello */}
                <a
                  href={network.url || '#'}
                  target={network.url ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className={`block h-full group ${!network.url && 'cursor-default pointer-events-none opacity-60'}`}
                >
                  <Card
                    hoverGlow={!!network.url}
                    className={`h-full flex flex-col justify-between p-6 ${network.colorClass}`}
                  >
                    <div className="flex flex-col gap-4">
                      {/* Icono de la red */}
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 w-fit">
                        {network.icon}
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-slate-200 font-sans group-hover:text-white transition-colors flex items-center justify-between">
                          <span>{network.name}</span>
                          {network.url && (
                            <span className="text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-brand-cyan group-hover:border-brand-cyan/20">
                              {network.badge}
                            </span>
                          )}
                        </h4>
                        <p className="text-xs text-slate-400 font-sans leading-relaxed mt-2">
                          {network.description}
                        </p>
                      </div>
                    </div>

                    {!network.url && (
                      <span className="text-[10px] text-slate-600 font-mono tracking-wider mt-4">
                        Por enlazar en config.ts
                      </span>
                    )}
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
