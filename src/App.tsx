/* Creado por: Angel Rojas - Portafolio V2 */
import { MainLayout } from './components/layout/MainLayout';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { ProjectsList } from './components/sections/ProjectsList';
import { SocialsHub } from './components/sections/SocialsHub';
import { Contact } from './components/sections/Contact';

/**
 * Componente Principal App
 * Mano, aquí se une toda la magia.
 * Renderizamos cada sección del portafolio en orden de lectura lógico,
 * todo envuelto en nuestro MainLayout que maneja el fondo premium y la navegación.
 * ¡Tranqui que esto conecta solo!
 */
function App() {
  return (
    <MainLayout>
      {/* Portada / Bienvenida */}
      <Hero />

      {/* Perfil Profesional & Habilidades */}
      <About />

      {/* Galería de Proyectos con Filtro */}
      <ProjectsList />

      {/* Hub de Redes Sociales y Videos */}
      <SocialsHub />

      {/* Formulario de Contacto */}
      <Contact />
    </MainLayout>
  );
}

export default App;

