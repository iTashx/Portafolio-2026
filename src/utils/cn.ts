/* Creado por: Angel Rojas - Portafolio V2 */

/**
 * Helper cn - Mano, aquí combinamos clases condicionales de Tailwind de forma limpia
 * para que no te vuelvas loco con concatenaciones manuales. Esto conecta solo, tranqui.
 */
export function cn(...inputs: (string | undefined | null | boolean | Record<string, boolean>)[]) {
  const classes: string[] = [];
  
  for (const input of inputs) {
    if (!input) continue;
    if (typeof input === 'string') {
      classes.push(input);
    } else if (typeof input === 'object') {
      for (const [key, value] of Object.entries(input)) {
        if (value) {
          classes.push(key);
        }
      }
    }
  }
  
  return classes.join(' ');
}
