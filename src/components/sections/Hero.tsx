/* Creado por: Angel Rojas - Portafolio V2 */
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Terminal, ChevronDown } from 'lucide-react';
import { CONFIG } from '../../data/config';
import { Button } from '../ui/Button';

/**
 * Sección Hero
 * Mano, esta es la portada del sitio. Le metemos un gradiente animado en el título,
 * efectos flotantes en un bloque de código simulado y botones con llamados a la acción.
 * Las transiciones de Framer Motion están optimizadas para entrar súper fluidas.
 */
export const Hero: React.FC = () => {
  // Contenedor de animaciones escalonadas (Stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Elementos individuales que entran con fade e inclinación suave
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      id="home"
      className="min-h-[90vh] flex flex-col justify-center items-center py-20 relative z-10"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        {/* Lado Izquierdo: Textos e Información */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
          {/* Badge de saludo - Estilo terminal */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-brand-cyan tracking-wider uppercase self-center lg:self-start w-fit shadow-md"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Disponible para nuevos proyectos</span>
          </motion.div>

          {/* Título de impacto con gradiente */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white font-sans"
          >
            ¡Hola! Soy{' '}
            <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple bg-clip-text text-transparent drop-shadow-sm font-sans">
              {CONFIG.name}
            </span>
          </motion.h1>

          {/* Subtítulo / Cargo */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl font-semibold text-slate-300 font-sans"
          >
            {CONFIG.title}
          </motion.h2>

          {/* Descripción */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-400 font-sans max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            {CONFIG.description}
          </motion.p>

          {/* Botones de acción */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-4"
          >
            <a href="#projects">
              <Button variant="primary" className="gap-2 group">
                Ver Proyectos
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline">Hablemos ahora</Button>
            </a>
          </motion.div>
        </div>

        {/* Lado Derecho: Elemento Gráfico Animado (Visual Mockup) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 hidden lg:block"
        >
          {/* Tarjeta flotante simulando una terminal de código */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-full bg-slate-950/80 border border-slate-800/80 rounded-2xl p-6 shadow-2xl backdrop-blur-sm relative"
          >
            {/* Luces de la ventana */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs text-slate-500 ml-2 font-mono">architecture.ts</span>
            </div>

            {/* Código simulado */}
            <pre className="font-mono text-sm leading-relaxed text-slate-300 overflow-x-auto">
              <code>
                <span className="text-pink-500">const</span> developer = &#123;{'\n'}
                {'  '}name: <span className="text-emerald-400">'{CONFIG.name}'</span>,{'\n'}
                {'  '}role: <span className="text-emerald-400">'Software Architect'</span>,{'\n'}
                {'  '}skills: [<span className="text-amber-400">'React'</span>, <span className="text-amber-400">'TypeScript'</span>, <span className="text-amber-400">'Node'</span>],{'\n'}
                {'  '}passion: <span className="text-emerald-400">'Performance & Clean Code'</span>{'\n'}
                &#125;;{'\n\n'}
                <span className="text-pink-500">function</span> <span className="text-blue-400">createImpact</span>(project) &#123;{'\n'}
                {'  '}console.<span className="text-blue-400">log</span>(<span className="text-emerald-400">`Echándole pichón 🚀`</span>);{'\n'}
                {'  '}<span className="text-pink-500">return</span> project.<span className="text-blue-400">scaleUp</span>();{'\n'}
                &#125;;
              </code>
            </pre>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Flecha de scroll animada */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors pointer-events-none"
      >
        <span className="text-xs font-semibold tracking-widest uppercase font-sans">Saber Más</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
};
