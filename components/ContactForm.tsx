import React, { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

const serviceOptions = [
  "Desarrollo de Software",
  "Ciencia de Datos Aplicada",
  "Dashboards de KPIs",
  "Inteligencia Geoespacial",
  "Integración de APIs",
  "Ingeniería de Datos",
  "Otro / Consulta General"
];

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulación de envío
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', service: '', message: '' });
      // Resetear estado después de 3 segundos
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna de Texto */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Hablemos de tu próximo proyecto
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              ¿Interesado en nuestros informes de Data Science o necesitas un desarrollo a medida? 
              Completa el formulario y nuestros especialistas te contactarán con una propuesta inicial y ejemplos de casos de uso.
            </p>
            
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
                <h4 className="text-white font-semibold mb-2">Soporte Técnico</h4>
                <p className="text-slate-400 text-sm">Tiempo de respuesta promedio: &lt; 2 horas</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
                <h4 className="text-white font-semibold mb-2">Ventas y Consultoría</h4>
                <p className="text-slate-400 text-sm">Agenda una demo personalizada de nuestros mapas y dashboards.</p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden">
            {status === 'success' ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/95 z-20 animate-fade-in">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                <p className="text-slate-400 text-center max-w-xs">
                  Gracias por tu interés. Te enviaremos el informe solicitado a tu correo a la brevedad.
                </p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Nombre Completo</label>
                  <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-800/80 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-slate-500"
                    placeholder="Juan Pérez"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Correo Electrónico</label>
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-800/80 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-slate-500"
                    placeholder="juan@empresa.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-slate-300">Servicio de Interés</label>
                <div className="relative">
                  <select
                    required
                    name="service"
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-slate-800/80 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-slate-500">Selecciona un servicio...</option>
                    {serviceOptions.map((option, index) => (
                      <option key={index} value={option} className="bg-slate-800 text-white py-2">
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Mensaje / Detalle del Proyecto</label>
                <textarea
                  required
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-800/80 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-slate-500 resize-none"
                  placeholder="Cuéntanos brevemente qué necesitas..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Solicitar Informe
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;