/* Creado por: Angel Rojas - Portafolio V2 */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ExternalLink, Filter } from 'lucide-react';
import { Github } from '../ui/BrandIcons';
import { PROJECTS_DATA } from '../../data/projects';
import { Card } from '../ui/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * Sección ProjectsList
 * Mano, aquí listamos tus proyectos. Le echamos pichón a un sistema de filtros
 * dinámicos (Web, Backend, Otros) que reordena los elementos con animaciones
 * fluidas gracias al motor de diseño de Framer Motion.
 */
export const ProjectsList: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'Todos' | 'Web' | 'Backend' | 'Otros'>('Todos');
  const [sectionRef] = useScrollAnimation<HTMLElement>(0.05);

  // Filtramos los proyectos según la pestaña activa
  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'Todos') return true;
    return project.category === activeFilter;
  });

  const filterTabs: ('Todos' | 'Web' | 'Backend' | 'Otros')[] = ['Todos', 'Web', 'Backend', 'Otros'];

  return (
    <section
      id="projects"
      ref={sectionRef as any}
      className="py-24 border-t border-slate-900 relative z-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Encabezado de la Sección */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-brand-cyan uppercase tracking-widest px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
            <Briefcase className="w-4 h-4" />
            <span>Portafolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans">
            Proyectos Destacados
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full" />
        </div>

        {/* Barra de Filtros interactiva */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
          <div className="flex items-center gap-2 text-sm text-slate-500 mr-2 font-medium">
            <Filter className="w-4 h-4 text-slate-400" />
            <span>Filtrar:</span>
          </div>
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`relative px-4 py-2 text-sm font-semibold rounded-lg font-sans transition-all duration-300 cursor-pointer ${
                activeFilter === tab
                  ? 'text-white bg-slate-900 border border-brand-cyan/30'
                  : 'text-slate-400 hover:text-slate-200 border border-transparent'
              }`}
            >
              {tab}
              {activeFilter === tab && (
                <motion.span
                  layoutId="activeFilterBg"
                  className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-br from-brand-cyan/10 to-brand-purple/10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Grilla de Proyectos con Animación de Reordenado */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <Card hoverGlow className="flex flex-col justify-between h-full p-0 overflow-hidden">
                  <div>
                    {/* Imagen de Portada con Overlay */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-900 border-b border-dark-border">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent opacity-80" />
                      
                      {/* Categoría Badge */}
                      <span className="absolute top-4 right-4 px-2.5 py-1 rounded-md text-xs font-bold bg-slate-950/80 backdrop-blur-sm text-brand-cyan border border-slate-800">
                        {project.category}
                      </span>
                    </div>

                    {/* Cuerpo de la Tarjeta */}
                    <div className="p-6 flex flex-col gap-3">
                      <h3 className="text-xl font-bold text-slate-100 font-sans tracking-wide">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-400 font-sans leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Footer de la Tarjeta: Tags y Enlaces */}
                  <div className="p-6 pt-0 flex flex-col gap-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-900 text-slate-400 border border-slate-900"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Enlaces */}
                    <div className="flex items-center justify-between border-t border-slate-900 pt-4 mt-2">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors font-sans cursor-pointer"
                        >
                          <Github className="w-4 h-4" />
                          <span>Código</span>
                        </a>
                      ) : (
                        <span className="text-xs text-slate-600 font-sans">Código Privado</span>
                      )}

                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-brand-cyan hover:text-white transition-colors font-sans cursor-pointer"
                        >
                          <span>Demo en vivo</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <span className="text-xs text-slate-600 font-sans">Próximamente demo</span>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
