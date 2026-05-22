/* Creado por: Angel Rojas - Portafolio V2 */
import React from 'react';
import { motion } from 'framer-motion';
import { User, Cpu, Database, Cloud } from 'lucide-react';
import { CONFIG } from '../../data/config';
import { Card } from '../ui/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * Sección About
 * Mano, aquí va tu biografía técnica y el set de tecnologías que dominas.
 * Usamos el hook useScrollAnimation para que cuando hagan scroll hacia esta sección,
 * los bloques de habilidades entren con transiciones escalonadas muy finas.
 */
export const About: React.FC = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>(0.1);

  // Datos de tus habilidades por categoría
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Cpu className="w-5 h-5 text-brand-cyan" />,
      skills: ['React 18+', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux / Zustand', 'HTML5 & CSS3'],
    },
    {
      title: 'Backend Development',
      icon: <Database className="w-5 h-5 text-brand-blue" />,
      skills: ['Node.js / Express', 'NestJS', 'PostgreSQL / MySQL', 'MongoDB / Redis', 'REST & GraphQL APIs', 'Go (Golang)'],
    },
    {
      title: 'Cloud & Herramientas',
      icon: <Cloud className="w-5 h-5 text-brand-purple" />,
      skills: ['Git & GitHub', 'Docker', 'AWS (S3, EC2)', 'Vercel / Netlify', 'CI/CD Pipelines', 'Linux / Bash'],
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef as any}
      className="py-24 border-t border-slate-900 relative z-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Encabezado de la sección */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-brand-cyan uppercase tracking-widest px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
            <User className="w-4 h-4" />
            <span>Perfil</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans">
            Sobre Mi Trayectoria
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full" />
        </div>

        {/* Contenido en dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Columna Izquierda: Biografía */}
          <motion.div
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between bg-slate-950/40 border border-slate-900 rounded-2xl p-8 shadow-xl"
          >
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-bold text-slate-100 font-sans">
                ¿Quién es Angel Rojas?
              </h3>
              <p className="text-slate-400 font-sans leading-relaxed">
                Soy un desarrollador de software enfocado en crear soluciones robustas, modulares y de alto rendimiento. Mi filosofía de desarrollo se basa en la arquitectura limpia: escribir código que sea fácil de mantener, testear y escalar.
              </p>
              <p className="text-slate-400 font-sans leading-relaxed">
                Mano, aquí le metemos sazón a cada proyecto. Me gusta entender el problema de negocio a fondo antes de tirar la primera línea de código para asegurarme de que la arquitectura final se adapte perfectamente a las necesidades del cliente.
              </p>
            </div>
            
            {/* Ubicación y metas */}
            <div className="border-t border-slate-900 pt-6 mt-8 flex flex-col gap-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-semibold">Ubicación:</span>
                <span className="text-slate-300 font-medium">{CONFIG.location}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-semibold">Especialidad:</span>
                <span className="text-slate-300 font-medium">Arquitecturas Web Escalables</span>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha: Tarjetas de Habilidades */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <Card hoverGlow className="h-full flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      {category.icon}
                    </div>
                    <h4 className="text-lg font-bold text-slate-200 font-sans">
                      {category.title}
                    </h4>
                  </div>
                  
                  {/* Lista de tags */}
                  <div className="flex flex-wrap gap-2.5 mt-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-md text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
