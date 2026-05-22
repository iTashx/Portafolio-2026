/* Creado por: Angel Rojas - Portafolio V2 */
import { useEffect, useRef, useState } from 'react';

/**
 * Hook useScrollAnimation
 * Mano, le echamos pichón a esta lógica para saber cuándo un componente
 * entra en la pantalla (viewport) y activarle sus transiciones.
 * Tranqui que esto conecta solo: te da la referencia y te dice si ya es visible.
 */
export function useScrollAnimation<T extends HTMLElement>(threshold = 0.1) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    // Si no hay soporte en el navegador, lo ponemos visible de una
    if (!('IntersectionObserver' in window)) {
      setIsIntersecting(true);
      return;
    }

    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Como es una animación de entrada de "una sola vez", dejamos de observar
          observer.unobserve(currentElement);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px', // Un pequeño offset para que la animación empiece antes de estar totalmente adentro
      }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  return [elementRef, isIntersecting] as const;
}
