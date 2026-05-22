/* Creado por: Angel Rojas - Portafolio V2 */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { CONFIG } from '../../data/config';
import { Input, Textarea } from '../ui/Input';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * Sección Contact
 * Mano, aquí le echamos pichón al formulario de contacto.
 * Es interactivo, valida de forma básica los datos ingresados
 * y muestra un modal/bloque animado de éxito cuando se envía.
 * Tranqui que todo esto conecta solo.
 */
export const Contact: React.FC = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>(0.1);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpiamos el error al escribir
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio, mano.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Escribe un correo electrónico válido, porfa.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Escribe un mensaje para poder leerte.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulamos una petición de envío a un servidor de correos (EmailJS o similar)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reseteamos el estado de éxito tras 5 segundos
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef as any}
      className="py-24 border-t border-slate-900 relative z-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Encabezado */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-brand-cyan uppercase tracking-widest px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
            <MessageSquare className="w-4 h-4" />
            <span>Contacto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans">
            ¿Tienes un proyecto en mente?
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full" />
        </div>

        {/* Distribución */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-4">
          
          {/* Información de Contacto / Detalles */}
          <motion.div
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between gap-8 bg-slate-950/40 border border-slate-900 rounded-2xl p-8 shadow-xl"
          >
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-slate-100 font-sans tracking-wide">
                ¡Hablemos de tu idea!
              </h3>
              <p className="text-slate-400 font-sans leading-relaxed">
                Mano, si necesitas un desarrollo a medida, optimizar tu arquitectura actual o simplemente quieres consultar un presupuesto, escríbeme y le echamos pichón juntos.
              </p>
            </div>

            {/* Fila de Contactos */}
            <div className="flex flex-col gap-6 my-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-brand-cyan">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col font-sans">
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Enviar Correo</span>
                  <a href={`mailto:${CONFIG.email}`} className="text-slate-300 hover:text-brand-cyan transition-colors font-medium">
                    {CONFIG.email}
                  </a>
                </div>
              </div>

              {/* Ubicación */}
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-brand-purple">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col font-sans">
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Ubicación</span>
                  <span className="text-slate-300 font-medium">{CONFIG.location}</span>
                </div>
              </div>
            </div>

            {/* Aviso de respuesta */}
            <p className="text-xs text-slate-500 font-mono">
              Respondo generalmente en menos de 24 horas hábiles. ¡Tranqui que esto fluye rápido!
            </p>
          </motion.div>

          {/* Formulario Interactivo */}
          <motion.div
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <Card hoverGlow={false} className="h-full p-8 bg-slate-950/20 border border-slate-900">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Nombre */}
                      <Input
                        label="Nombre completo *"
                        name="name"
                        type="text"
                        placeholder="Escribe tu nombre..."
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                        disabled={isSubmitting}
                      />
                      {/* Correo */}
                      <Input
                        label="Correo electrónico *"
                        name="email"
                        type="email"
                        placeholder="ejemplo@correo.com"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Asunto */}
                    <Input
                      label="Asunto"
                      name="subject"
                      type="text"
                      placeholder="¿De qué trata tu propuesta?"
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />

                    {/* Mensaje */}
                    <Textarea
                      label="Mensaje *"
                      name="message"
                      placeholder="Mano, cuéntame un poco sobre tu proyecto..."
                      value={formData.message}
                      onChange={handleChange}
                      error={errors.message}
                      disabled={isSubmitting}
                    />

                    {/* Botón de Enviar */}
                    <Button
                      type="submit"
                      isLoading={isSubmitting}
                      className="w-full gap-2 font-semibold text-lg cursor-pointer"
                    >
                      <span>Enviar Mensaje</span>
                      <Send className="w-4 h-4" />
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center gap-4 py-12"
                  >
                    <div className="p-4 rounded-full bg-emerald-950/30 border border-emerald-500/30 text-emerald-400">
                      <CheckCircle2 className="w-16 h-16 animate-bounce" />
                    </div>
                    <h4 className="text-2xl font-bold text-white font-sans tracking-wide">
                      ¡Mensaje enviado con éxito, mano!
                    </h4>
                    <p className="text-slate-400 font-sans max-w-sm leading-relaxed">
                      Le echamos un ojo y te respondo lo más rápido posible. ¡Gracias por ponerte en contacto!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
