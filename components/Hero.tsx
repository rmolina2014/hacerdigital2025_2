import React from 'react';
import { ArrowRight, BarChart3, Map as MapIcon } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 animate-fade-in-up">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-slate-300 text-xs font-semibold uppercase tracking-wider">
            Nueva Área: Data Science & Geo-Intelligence
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          Software a Medida. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
            Decisiones Inteligentes.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Transformamos datos en rentabilidad. Fusionamos desarrollo de software premium con 
          ciencia de datos aplicada y visualización geoespacial para potenciar tu negocio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#consultant"
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            Consultar con IA
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 glass-panel text-white hover:bg-white/10 rounded-lg font-bold transition-all"
          >
            Explorar Servicios
          </a>
        </div>

        {/* Feature Highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
          {[
            { icon: <Code2 className="text-blue-400" />, title: "Desarrollo Web & Apps", desc: "Sistemas escalables y modernos." },
            { icon: <BarChart3 className="text-indigo-400" />, title: "KPIs & Dashboards", desc: "Visualización de datos en tiempo real." },
            { icon: <MapIcon className="text-teal-400" />, title: "Mapas Interactivos", desc: "Análisis geoespacial de tu mercado." },
          ].map((item, i) => (
             <div key={i} className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
               <div className="mb-3">{item.icon}</div>
               <h3 className="text-white font-semibold mb-1">{item.title}</h3>
               <p className="text-slate-400 text-sm">{item.desc}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper icon
const Code2 = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export default Hero;