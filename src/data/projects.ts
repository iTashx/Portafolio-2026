/* Creado por: Angel Rojas - Portafolio V2 */

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Web' | 'Backend' | 'Otros';
  tags: string[];
  image: string; // URL de la miniatura o clase de gradiente decorativa
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

/**
 * PROJECTS_DATA - Listado de tus proyectos profesionales
 * Mano, aquí le metemos sazón con proyectos rudos para que el cliente se asombre de una.
 * Los dividimos en Web, Backend y Otros para que funcionen con el filtro del portafolio.
 */
export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'Plataforma SaaS con Micro-Frontends',
    description: 'Arquitectura modular federada de alta escalabilidad. Implementa carga perezosa (lazy-load), Zustand para estado global y tailwindcss para estilos atómicos.',
    category: 'Web',
    tags: ['React', 'TypeScript', 'Module Federation', 'Zustand', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/iTashx', // Reemplaza por tu enlace real
    liveUrl: '',
    featured: true,
  },
  {
    id: '2',
    title: 'API Gateway & Microservicios Event-Driven',
    description: 'Diseño e implementación de un API Gateway distribuido con comunicación asíncrona usando RabbitMQ, NestJS y autenticación con Redis y JWT.',
    category: 'Backend',
    tags: ['NestJS', 'Redis', 'RabbitMQ', 'Docker', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/iTashx',
    liveUrl: '',
    featured: true,
  },
  {
    id: '3',
    title: 'Dashboard de Analíticas en Tiempo Real',
    description: 'Consumo de streams de datos de criptomonedas usando WebSockets. Renderizado en tiempo real con optimizaciones de ciclo de vida para evitar re-renders innecesarios.',
    category: 'Web',
    tags: ['Next.js', 'WebSockets', 'Chart.js', 'Tailwind CSS', 'SWR'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/iTashx',
    liveUrl: '',
    featured: false,
  },
  {
    id: '4',
    title: 'Motor de Procesamiento Batch en Go',
    description: 'Servicio eficiente para procesamiento y carga masiva de archivos de texto pesados a base de datos relacional mediante workers concurrentes de Go (goroutines).',
    category: 'Backend',
    tags: ['Go (Golang)', 'Goroutines', 'PostgreSQL', 'Docker', 'CLI'],
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/iTashx',
    liveUrl: '',
    featured: false,
  },
  {
    id: '5',
    title: 'CLI de Automatización DevOps',
    description: 'Herramienta de terminal interactiva para la creación rápida de plantillas de microservicios con dependencias preconfiguradas y deploys en un solo comando.',
    category: 'Otros',
    tags: ['Node.js', 'Commander.js', 'Inquirer.js', 'CI/CD', 'GitHub Actions'],
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/iTashx',
    liveUrl: '',
    featured: true,
  }
];
