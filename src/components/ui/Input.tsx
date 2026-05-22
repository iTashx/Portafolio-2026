/* Creado por: Angel Rojas - Portafolio V2 */
import React from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

/**
 * Componente Input
 * Mano, un input limpio y premium para que el usuario escriba sus datos.
 * Tiene transiciones de foco y resplandor sutiles.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5 font-sans">
        {label && (
          <label className="text-sm font-medium text-slate-300 transition-colors">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full bg-slate-900/60 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all',
            error && 'border-red-500/80 focus:border-red-500 focus:ring-red-500/10',
            className
          )}
          {...props}
        />
        {error && <span className="text-xs text-red-400 font-medium mt-0.5">{error}</span>}
      </div>
    );
  }
);
Input.displayName = 'Input';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

/**
 * Componente Textarea
 * Lo mismo que el input, pero para textos largos. Ideal para el mensaje de contacto.
 * Conectadito al pelo.
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5 font-sans">
        {label && (
          <label className="text-sm font-medium text-slate-300 transition-colors">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            'w-full bg-slate-900/60 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all min-h-[120px] resize-y',
            error && 'border-red-500/80 focus:border-red-500 focus:ring-red-500/10',
            className
          )}
          {...props}
        />
        {error && <span className="text-xs text-red-400 font-medium mt-0.5">{error}</span>}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';
